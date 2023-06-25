import DateRangePicker from "./DateRangePicker"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

const Reservas = (props: any) => {

    const { property } = props
    const id_user: string = useSelector((state: any) => state.user.id_user)
    let maxGuest: number[] = []
    const [bookForm, setBookForm] = useState({
        id_user,
        id_property: undefined,
        start_date: "",
        end_date: "",
        guests_number: 1,
        amount: 0,
        payment_status: false,
        creation_date: new Date(),
        active: true
    })
    const [discount, setDiscount] = useState({
        monthly: false,
        weekly: false
    })

    useEffect(() => {
        setBookForm({
            ...bookForm,
            id_property: property.id_property
        })
    }, [property])

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

    const dateHandler = (start_date: Date, end_date: Date) => {
        setBookForm({
            ...bookForm,
            start_date: start_date.toISOString().slice(0, 10),
            end_date: end_date.toISOString().slice(0, 10),
        })
    }

    const guestHandler = (e: any) => {
        setBookForm({
            ...bookForm,
            guests_number: Number(e.target.value)
        })
    }


    return (
        <div className="w-1/2">
            <div className="border rounded-xl w-96 mt-4 flex items-center justify-center">
            <div>
              <div className='mt-3'>
                <DateRangePicker dateHandler={dateHandler}/>
              </div>
              <div>
                <select className='border h-10 w-80 rounded-xl mt-3' onChange={guestHandler}>
                    <option value={1} selected>Viajeros: 1 huésped</option>
                    {
                    maxGuest.map((guest: number) => <option value={guest}>{`Viajeros: ${guest} huéspedes`}</option>) 
                  }
                </select>
                <div>
                    <i className="fa-solid fa-dollar-sign text-argentina mr-1"></i>
                    {property.price_per_night} {" noche"}
                </div>
                {discount.monthly ?
                <div>
                 <div className="line-through">{Math.floor(bookForm.amount / 0.8)}</div>
                 <div>20% de descuento aplicado </div>
                </div>
                 : <></>}
                 {discount.weekly ?
                <div>
                 <div className="line-through">{Math.floor(bookForm.amount / 0.9)}</div>
                 <div>10% de descuento aplicado </div>
                </div>
                 : <></>}
                <div className='mt-6'>Precio: {bookForm.amount}</div>
                <div>
                  <button className="border border-argentina rounded p-1 w-32 mt-3">
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Reservas;