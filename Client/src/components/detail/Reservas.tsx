import DateRangePicker from "./DateRangePicker";
import { useState, useEffect, useMemo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
import axios from "axios";
import Modal from "react-modal";
import getUser from "../../redux/actions/getUser";
import { AnyAction } from "redux";

const modalStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        transform: "translate(-50%, -50%)",
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        maxWidth: "500px",
        width: "90%",
    }
}

const Reservas = (props: any) => {

    initMercadoPago('TEST-f65903bb-9487-4457-8fe9-9114c375cc8a')

    const dispatch = useDispatch()
    const { property } = props;
    const id_user: string = useSelector((state: any) => state.user.id_user);
    let maxGuest: number[] = [];

    const [bookForm, setBookForm] = useState({
        id_user,
        id_property: undefined,
        start_date: "",
        end_date: "",
        guests_number: 1,
        amount: 0,
        payment_status: true,
        creation_date: new Date(),
        active: true
    })

    const bookFormRef = useRef(bookForm)
    
    const [discount, setDiscount] = useState({
        monthly: false,
        weekly: false
    })

    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [bookingError, setBookingError] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
      }


    useEffect(() => {
        setBookForm({
            ...bookForm,
            id_property: property.id_property
        })
    }, [property])

    useEffect(() => {
        if (bookingSuccess || bookingError) {
          setIsModalOpen(true);
          setTimeout(() => {
            closeModal();
          }, 1500);
        }
      }, [bookingSuccess, bookingError]);

    const calculateAmount = (startDate: string, endDate: string, pricePerNight: number) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24));
        const initialAmount = nights * pricePerNight;
        if(nights >= 28 && property.monthly_discount) {
            setDiscount({
                monthly: true,
                weekly: false
            })
            return Math.floor(initialAmount * 0.8);
        }
        if(nights >= 7 && property.weekly_discount) {
            setDiscount({
                monthly: false,
                weekly: true
            })
            return Math.floor(initialAmount * 0.9);
        }
        setDiscount({
            monthly: false,
            weekly: false
        })
        return initialAmount;
      }

    useEffect(() => {
        if(bookForm.start_date && bookForm.end_date){
            const amount = calculateAmount(bookForm.start_date, bookForm.end_date, property.price_per_night);
            setBookForm({
                ...bookForm,
                amount
            });
        }
        
    }, [bookForm.start_date, bookForm.end_date, property.price_per_night])

    

    for (let i = 2; i <= property.max_guests; i++ ){
        maxGuest.push(i)
    }

    const handleDateChange = (start_date: Date, end_date: Date) => {
        setBookForm({
            ...bookForm,
            start_date: start_date?.toISOString().slice(0, 10),
            end_date: end_date?.toISOString().slice(0, 10),
        })
    }

    const guestHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setBookForm({
            ...bookForm,
            guests_number: Number(e.target.value)
        })
    }

    useEffect(() => {
      bookFormRef.current = bookForm
    }, [bookForm]);


    const paymentComponent = useMemo(() => {
        if (bookForm.amount > 0) {
            return (
                <>
                    {bookingSuccess ? (
                        <p>Reserva realizada con éxito</p>
                    ) : bookingError ? (
                        <p>Error al procesar el pago</p>
                    ) : (
                        <Payment
                            initialization={{
                                amount: bookForm.amount,
                            }}
                            onSubmit={async (form) =>  {
                                console.log(form)
                                return new Promise((resolve, reject) => {
                                    fetch("https://airebnb.onrender.com/process_payment", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify(form),
                                    })
                                    .then((response) => response.json())
                                    .then((response) => {
                                        // recibir el resultado del pago
                                        if(response.status === 'approved' && response.status_detail === 'accredited'){
                                            axios.post('https://airebnb.onrender.com/rent', bookFormRef.current)
                                            .then((response) => {
                                                console.log(response)
                                                setBookingSuccess(true);
                                                dispatch(getUser(id_user) as unknown as AnyAction)
                                            })
                                            .catch((error) => {
                                                console.log(error)
                                                setBookingError(true);
                                            })
                                        }
                                        resolve(form);
                                    })
                                    .catch((error) => {
                                        // manejar la respuesta de error al intentar crear el pago
                                        console.log(error)
                                        setBookingError(true);
                                        reject();
                                    });
                                });
                            }}
                            customization={{
                                paymentMethods: {
                                    creditCard: "all",
                                    debitCard: "all"
                                },
                            }}
                        />
                    )}
                </>
            );
        }
        return null;
      }, [bookForm.amount]);

      


    return (
        <div className="w-1/2">
      <div className="border rounded-xl w-96 flex items-center justify-center text-cairo">
        <div>
          <div>
            <h1 className="font-bold mt-2 ">$ {property.price_per_night} x noche</h1>
          </div>
          <div>
            <h4>
              <i className="fa-solid fa-star text-argentina"></i> {property.rating} -{" "}
              {property.ratings_amount === 0 ? null : (
                <>
                  {property.ratings_amount}{" "}
                  {property.ratings_amount === 1 ? "evaluación" : "evaluaciones"}
                </>
              )}
            </h4>
          </div>

          <div className="mt-3">
            <DateRangePicker handleDateChange={handleDateChange} />
          </div>
          <div>
            <select className="border h-10 w-80 rounded-xel mt-3" value={bookForm.guests_number} onChange={guestHandler}>
              <option value={1}>Viajeros: 1 huésped</option>
              {maxGuest.map((guest: number) => (
                <option key={guest} value={guest}>{`Viajeros: ${guest} huéspedes`}</option>
              ))}
            </select>
            <div>
              
            <div>
            $ {property.price_per_night} x noche * numero de noches
            </div>
            </div>
            {discount.monthly ? (
              <div>
                <div className="line-through">{Math.floor(bookForm.amount / 0.8)}</div>
                <div>20% de descuento aplicado </div>
              </div>
            ) : (
              <></>
            )}
            {discount.weekly ? (
              <div>
                <div className="line-through">{Math.floor(bookForm.amount / 0.9)}</div>
                <div>10% de descuento aplicado </div>
              </div>
            ) : (
              <></>
            )}
            <div className="mt-6 mb-2 font-bold">Total: {bookForm.amount}</div>
            <div>
              {!bookingSuccess && !bookingError && paymentComponent}
              {isModalOpen && (
                <Modal isOpen={isModalOpen} style={modalStyles} onRequestClose={closeModal}>
                  {bookingSuccess && <div>Reserva realizada con exito</div>}
                  {bookingError && <div>Hubo un error con el pago</div>}
                </Modal>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Reservas;