import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getPropertyDetail from "../../../redux/actions/getPropertyDetail";
import updateProperty from "../../../redux/actions/updateProperty";

interface Service {
    service_id: string;
    name: string;
    icon: string;
  }

const Address = ({isEditing, onSave}) => {
  const property = useSelector((state: any) => state.detail);
  const services: Service[] = useSelector((state: any) => state.services);
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log(property);

  // Traigo los datos de la base de datos
  useEffect(() => {
    console.log(id);
    dispatch(getPropertyDetail(id));
  }, [dispatch, id]);

  // Seteo estados
  const [title, setTitle] = useState(property.title);
  const [isTitleEditing, setIsTitleEditing] = useState(false);
  const [address, setAddress] = useState(property.address);
  const [isAddressEditing, setIsAddressEditing] = useState(false);
  const [description, setDescription] = useState(property.description);
  const [isDescriptionEditing, setIsDescriptionEditing] = useState(false);


  // Guardo el nuevo estado y actualizo el detalle con la nueva información
  const handleSave = () => {
    const updatedProperty = {
      ...property,
      title,
      address,
      description,

    };
    dispatch(updateProperty(updatedProperty))
      .then(() => {
        onSave()
        setIsTitleEditing(false);
        setIsAddressEditing(false);
        setIsDescriptionEditing(false);
      })
      .catch((error: Error) => {
        console.log("error actualizando propiedad", error);
      });
  };

    return(
        <div>
      <div>
        <p className="font-cairo-play font-bold text-lg">
          Título:{" "}
          {isTitleEditing ? (
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              onBlur={handleSave}
              className="border"
            />
          ) : (
            <span onClick={() => setIsTitleEditing(true)}>{property.title}</span>
          )}
          {!isTitleEditing && (
            <i
              className="fa-solid fa-pen-to-square text-argentina ml-2"
              onClick={() => setIsTitleEditing(true)}
            ></i>
          )}
        </p>
      </div>

      <div>
        <p className="mt-1"> 
          Dirección:{" "}
          {isAddressEditing ? (
            <input
              type="text"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              onBlur={handleSave}
              className="border"
            />
          ) : (
            <span onClick={() => setIsAddressEditing(true)}>{property.address}</span>
          )}
          {!isAddressEditing && (
            <i
              className="fa-solid fa-pen-to-square text-argentina ml-2"
              onClick={() => setIsAddressEditing(true)}
            ></i>
          )}
        </p>
      </div>
      
      <h5>{property.location}</h5>
      <h5>{property.province}</h5>
      
      <div>
      <p className="mt-1"> 
          Descripción:{" "}
          {isDescriptionEditing ? (
            <textarea
              type="textarea"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              onBlur={handleSave}
              className="border w-w350"
            />
          ) : (
            <span onClick={() => setIsDescriptionEditing(true)}>{property.description}</span>
          )}
          {!isDescriptionEditing && (
            <i
              className="fa-solid fa-pen-to-square text-argentina ml-2"
              onClick={() => setIsDescriptionEditing(true)}
            ></i>
          )}
        </p>
      </div>
    </div>
    )
}
export default Address