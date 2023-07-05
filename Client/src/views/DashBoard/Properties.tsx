
import { useEffect, useState } from "react";
import axios from "axios";

/////////////////////////////este es un component que deberia estar en otra parte

const style: any = {
  contain: {
    width: "600px",
    height: "600px",
    position: "absolute",
    backgroundColor: "#fefefe",
    padding: "10px",
    boxShadow: "0px 0px 10px #c2c2c2",
    borderRadius: "10px",
    top: "20%",
    left: "calc(50% - 180px)"

  },
  title: {

    textAlign: "center",
    fontSize: "35px",
    position: "relative",
    padding: "5px"

  },
  inputs: {
    fontSize: "20px",
    width: "90%",
    height: "50px",
    padding: "10px",
    margin: "5px",
    boxShadow: "0px 0px 5px #222",
    position: "relative",
    left: "calc(50% - 45%)",
    borderRadius: "5px"

  },

  inputsName: {
    fontSize: "25px",
    margin: "10px 0px"
  },
  close: {
    fontSize: "30px",
    position: "relative",
    left: "96%",
    top: "-18px",
    color: "red"

  },

  update: {
    fontSize: "18px",
    padding: "10px",
    width: "30%",
    height: "40px",
    backgroundColor: "#efefe",
    boxShadow: "0px 0px 5px #333",
    borderRadius: "5px",
    position: "absolute",
    left: "calc(50% - 15%)",
    bottom: "15px"
  },
  flex: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    padding: "0px 6%",
    margin: "20px 0"
  },
  btn: {
    fontSize: "20px",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px #c2c2c2",
    padding: "10px 0"
  }


}


//////////////////////////


const ShowUpdate = ({ property, setOpen }: any) => {
  const [updateProperty, setUpdateProperty]: any = useState({
    province: property.province,
    location: property.location,
    is_active: property.is_active

  })
  ///////////////////////////////////////////////



  const handlerOnchange = (e: any) => {
    const { value, name } = e.target;
    console.log(value)
    setUpdateProperty({
      ...updateProperty,
      [name]: value
    })
  }
  ////////////////////////////////////////////
  const sendUpdateProperty = async () => {
    await axios.put("http://localhost:3001/property/update/" + property.id_property, updateProperty);
    alert("property updated!")
    setOpen(false)
  }


  const activeOrDisactive = () => {
    setUpdateProperty({
      ...updateProperty,
      is_active: !updateProperty.is_active
    })
  }

  return (
    <div style={style.contain}>
      <button style={style.close} onClick={() => setOpen(false)}>X</button>
      <h1 style={style.title}>{property.id_user}</h1>
      <div>
        <p style={style.inputsName}>province: </p>
        <input style={style.inputs} type="text" name="province" value={updateProperty.province} onChange={(e) => handlerOnchange(e)} />

        <p style={style.inputsName}>location:  </p>
        <input style={style.inputs} type="text" name="location" value={updateProperty.location} onChange={(e) => handlerOnchange(e)} />
        <div style={style.flex}>
          <button style={style.btn} onClick={() => activeOrDisactive()} >
            {
              updateProperty.is_active == true ? "Unplug" : "plugIn"
            }
          </button>
          <p>
            {
              updateProperty.is_active == true ? <i className="fa-solid fa-plug-circle-check fa-xl"></i> : <i className="fa-solid fa-plug-circle-xmark fa-xl"></i>
            }
          </p>
        </div>
      </div>
      <button style={style.update} onClick={() => sendUpdateProperty()}>Update   <i className="fa-regular fa-pen-to-square"></i></button>
    </div>
  )

}

//////////////////////////////////////////////

const DashProperties = () => {

  const [properties, setProperties] = useState([]);
  const [dataUpdate, setDataUpdat] = useState()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await axios.get("http://localhost:3001/property/all"); // Ajusta la URL de la solicitud según corresponda
        setProperties(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProperties();
  }, [open]);

  console.log(properties);


  const handlerTest = (e: any, property: any) => {
    e.preventDefault()
    setOpen((s) => !s)
    setDataUpdat(property)
  }

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Properties</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>Number</th>
              <th>ID</th>
              {/* <th>User ID</th> */}
              <th>Is Active</th>
              <th>Province</th>
              <th>Location</th>
              <th>Property Type</th>
              <th>Price per Night</th>
              <th>start_date</th>
              <th>end_date</th>
              <th>Room #</th>
              <th>Bed #</th>
              <th>Bath #</th>
              <th>Guest #</th>
              <th>Allow Pets</th>
              <th>edit</th>
            </tr>
          </thead>
          <tbody>
            {properties && properties.map((property: any, index: number) => (
              <tr key={property.id_property} className="text-center">
                <td >#{index + 1}</td>
                <td >{property.id_property}</td>
                {/* <td>{property.id_user}</td> */}
                <td>{property.is_active ? "True" : "False"}</td>
                <td>{property.province}</td>
                <td>{property.location}</td>
                <td>{property.property_type}</td>
                <td>{property.price_per_night}</td>
                <td>{property.start_date}</td>
                <td>{property.end_date}</td>
                <td>{property.rooms_number}</td>
                <td>{property.beds_number}</td>
                <td>{property.bathrooms_number}</td>
                <td>{property.max_guests}</td>
                <td>{property.allow_pts ? "True" : "False"}</td>
                <td onClick={(e) => handlerTest(e, property)}><button><i className="fa-regular fa-pen-to-square"></i></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        open ? <ShowUpdate property={dataUpdate} setOpen={setOpen} /> : null
      }
    </div>
  );
};

export default DashProperties;