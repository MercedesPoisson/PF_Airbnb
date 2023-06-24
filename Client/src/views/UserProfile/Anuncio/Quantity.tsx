import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getPropertyDetail from "../../../redux/actions/getPropertyDetail";
import updateProperty from "../../../redux/actions/updateProperty";

const Quantity = ({ isEditing, onSave }) => {
  const property = useSelector((state: any) => state.detail);
  const { id } = useParams();
  const dispatch = useDispatch();

  // Traigo los datos de la base de datos
  useEffect(() => {
    console.log(id);
    dispatch(getPropertyDetail(id));
  }, [dispatch, id]);

  //seteo estados
  const [guests, setGuests] = useState(property.max_guests);
  const [isGuestsEditing, setIsGuestsEditing] = useState(false);
  const [rooms, setRooms] = useState(property.rooms_number);
  const [isRoomsEditing, setIsRoomsEditing] = useState(false);
  const [beds, setBeds] = useState(property.beds_number);
  const [isBedsEditing, setIsBedsEditing] = useState(false);
  const [bath, setBath] = useState(property.bathrooms_number);
  const [isBathEditing, setIsBathEditing] = useState(false);
  const [price, setPrice] = useState(property.price_per_night);
  const [isPriceEditing, setIsPriceEditing] = useState(false);

  // Guardo el nuevo estado y actualizo el detalle con la nueva información
  const handleSave = () => {
    const updatedProperty = {
      ...property,
      guests,
      rooms,
      beds,
      bath,
      price,
    };
  
    dispatch(updateProperty(updatedProperty))
      .then(() => {
        setIsGuestsEditing(false);
        setIsRoomsEditing(false);
        setIsBedsEditing(false);
        setIsBathEditing(false);
        setIsPriceEditing(false);
        onSave(); // Llama a la función onSave después de guardar los cambios
      })
      .catch((error: Error) => {
        console.log("error actualizando propiedad", error);
      });
  };

  useEffect(() => {
    setGuests(property.max_guests);
    setRooms(property.rooms_number);
    setBeds(property.beds_number);
    setBath(property.bathrooms_number);
    setPrice(property.price_per_night);
  }, [property]);

    return(
        <div>
            {/* <div>
                <h2>
            Cantidad de Huespedes: {" "}
            {isGuestsEditing ? (
              <input
                type="number"
                value={guests}
                onChange={(event) => setGuests(Number(event.target.value))}
                onBlur={() => handleSave(guests)}
                className="border w-16"
              />
            ) : (
                <span onClick={() => setIsGuestsEditing(true)}>{property.max_guests}</span>
            )}
            {!isGuestsEditing && (
            <i
              className="fa-solid fa-pen-to-square text-argentina ml-2"
              onClick={() => setIsGuestsEditing(true)}
            ></i>
          )}
          </h2>
            </div> */}
            <h1 className="flex ">
             <p className="mr-2">Cantidad de huéspedes:</p>
            
               <input 
               type="text"
               value={property.max_guests}
               onChange={(e) => setGuests(e.target.value)}
              
               className="border w-14" 
               />
             {!isEditing && (
               <i className="fa-solid fa-pen-to-square text-argentina ml-2"
                onClick={() => setIsGuestsEditing(!isEditing)}>
                </i>
             )}
           </h1>

            <div>
                 <h2>
            Cantidad Dormitorios: {" "}
            {isRoomsEditing ? (
              <input
                type="number"
                value={rooms}
                onChange={(event) => setRooms(Number(event.target.value))}
                onBlur={() => handleSave(rooms)}
                className="border w-16"
              />
            ) : (
                <span onClick={() => setIsRoomsEditing(true)}>{property.rooms_number}</span>
            )}
            {!isGuestsEditing && (
            <i
              className="fa-solid fa-pen-to-square text-argentina ml-2"
              onClick={() => setIsRoomsEditing(true)}
            ></i>
          )}
            
          </h2>
            </div>
            
            <div>
               <h2>
            Cantidad de Camas: {" "}
            {isBedsEditing ? (
              <input
                type="number"
                value={beds}
                onChange={(event) => setBeds(Number(event.target.value))}
                onBlur={() => handleSave(beds)}
                className="border w-16"
              />
            ) : (
                <span onClick={() => setIsBedsEditing(true)}>{property.beds_number}</span>
            )}
            {!isBedsEditing && (
            <i
              className="fa-solid fa-pen-to-square text-argentina ml-2"
              onClick={() => setIsBedsEditing(true)}
            ></i>
          )}
          </h2> 
            </div>

         <div>
            <h2>
            Cantidad de Baños:{" "}
            {isBathEditing ? (
              <input
                type="number"
                value={bath}
                onChange={(event) => setBath(Number(event.target.value))}
                onBlur={() => handleSave(bath)}
                className="border w-16"
              />
            ) : (
                <span onClick={() => setIsBathEditing(true)}>{property.bathroms_number}</span>
            )}
            {!isBathEditing && (
            <i
              className="fa-solid fa-pen-to-square text-argentina ml-2"
              onClick={() => setIsBathEditing(true)}
            ></i>
          )}
          </h2>
         </div>

         <div>
            <h4 className="font-bold">
            Precio por Noche: ${" "}
            {isPriceEditing ? (
              <input
                type="number"
                value={price}
                onChange={(event) => setPrice(Number(event.target.value))}
                onBlur={() => handleSave(price)}
                className="border w-16"
              />
            ) : (
                <span onClick={() => setIsPriceEditing(true)}>{property.price_per_night}</span>
            )}
            {!isPriceEditing && (
            <i
              className="fa-solid fa-pen-to-square text-argentina ml-2"
              onClick={() => setIsPriceEditing(true)}
            ></i>
          )}
          </h4>
         </div>         
aca van los de cantidades
        </div>
    )
}
export default Quantity;