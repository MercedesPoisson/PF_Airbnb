import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getPropertyDetail from "../../../redux/actions/getPropertyDetail";
import updateProperty from "../../../redux/actions/updateProperty";

const propertyTypeMapping: Record<string, string> = {
    House: "Casa",
    Apartment: "Departamento",
    Room: "Habitación",
  };

const TypeCheckBox = ({onSave}) => {
    const property = useSelector((state: any) => state.detail);
    const { id } = useParams();
    const dispatch = useDispatch();

    // Traigo los datos de la base de datos
  useEffect(() => {
    console.log(id);
    dispatch(getPropertyDetail(id));
  }, [dispatch, id]);

  // Seteo estados
    const translatedPropertyType = propertyTypeMapping[property?.property_type];
    const [type, setType] = useState(translatedPropertyType)
    const [isTypeEditing, setIsTypeEditing] = useState(false);
    const [selectedTypes, setSelectedTypes] = useState([]);

    // Guardo el nuevo estado y actualizo el detalle con la nueva información
  const handleSave = () => {
    const updatedProperty = {
      ...property,
      property_type: selectedTypes[0],
    
    };
    dispatch(updateProperty(id, updatedProperty))
      .then(() => {
        onSave()
        setIsTypeEditing(false);
      })
      .catch((error: Error) => {
        console.log("error actualizando propiedad", error);
      });
  };

  const handleCheckboxChange = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((selectedType) => selectedType !== type));
    } else {
      setSelectedTypes([type]);
    }
  };
  
    return(
        <div>
            <h3>
            Tipo de Propiedad:
            {isTypeEditing ? (
              <>
                <label className="mr-2">
                  <input
                    type="checkbox"
                    value="House"
                    checked={selectedTypes.includes("House")}
                    onChange={() => handleCheckboxChange("House")}
                    className="mr-2 ml-2"
                  />
                  Casa
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Apartment"
                    checked={selectedTypes.includes("Apartment")}
                    onChange={() => handleCheckboxChange("Apartment")}
                    className="mr-2 ml-2"
                  />
                  Departamento
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Room"
                    checked={selectedTypes.includes("Room")}
                    onChange={() => handleCheckboxChange("Room")}
                    className="mr-2 ml-2"
                  />
                  Habitación
                </label>
              </>
            ) : (
                <span onClick={() => setIsTypeEditing(true)}>{translatedPropertyType}</span>
            )}
            {!isTypeEditing && (
            <i
              className="fa-solid fa-pen-to-square text-argentina ml-2"
              onClick={() => setIsTypeEditing(true)}
            ></i>
          )}
          </h3>
        </div>
    )
}
export default TypeCheckBox;