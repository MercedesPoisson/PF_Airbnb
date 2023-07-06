
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
    fontSize: "20px",
    position: "relative",
  
  },
  inputs: {
    fontSize: "20px",
    width: "60%",
    height: "50px",
    
    margin: "5px",
   
    position: "relative",
    left: "calc(50% - 45%)",
    borderRadius: "5px"

  },

  inputsName: {
    fontSize: "20px",
    margin: "10px 0px"
  },
  // close: {
  //   fontSize: "30px",
  //   position: "relative",
  //   left: "96%",
  //   top: "-18px",
  //   color: "red"

  // },

  update: {
    fontSize: "18px",
    padding: "10px",
    width: "30%",
    height: "40px",  
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
    padding: "10px 0"
  }

}

//////////////////////////

const ShowUpdate = ({ property, setOpen }: any) => {
  const [updateProperty, setUpdateProperty]: any = useState({
    province: property.province,
    location: property.location,
    price_per_night: property.price_per_night,
    rooms_number: property.rooms_number,
    beds_number: property.beds_number,    
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
    await axios.put("https://airebnb.onrender.com/property/update/" + property.id_property, updateProperty);
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
      <button onClick={() => setOpen(false)}>
        <i className="fa-solid fa-xmark text-sidebar"></i>
      </button>
      <h1 style={style.title}>{property.title}</h1>
      <h1 style={style.title}>user ID:{property.id_user}</h1>
      <div>
        <div style={{ ...style.flex, lineHeight: "1" }}>
          <p style={style.inputsName}>Province: </p>
          <input
            className="border"
            style={style.inputs}
            type="text"
            name="province"
            value={updateProperty.province}
            onChange={(e) => handlerOnchange(e)}
          />
        </div>
        <div style={{ ...style.flex, lineHeight: "1" }}>
          <p style={style.inputsName}>Location: </p>
          <input
            className="border"
            style={style.inputs}
            type="text"
            name="location"
            value={updateProperty.location}
            onChange={(e) => handlerOnchange(e)}
          />
        </div>
        <div style={{ ...style.flex, lineHeight: "1" }}>
          <p style={style.inputsName}>Price: </p>
          <input
            className="border"
            style={style.inputs}
            type="number"
            name="price_per_night"
            value={updateProperty.price_per_night}
            onChange={(e) => handlerOnchange(e)}
          />
        </div>
        <div style={{ ...style.flex, lineHeight: "1" }}>
          <p style={style.inputsName}>Rooms #: </p>
          <input
            className="border"
            style={style.inputs}
            type="number"
            name="rooms_number"
            value={updateProperty.rooms_number}
            onChange={(e) => handlerOnchange(e)}
          />
        </div>
        <div style={{ ...style.flex, lineHeight: "1" }}>
          <p style={style.inputsName}>Beds #: </p>
          <input
            className="border"
            style={style.inputs}
            type="number"
            name="beds>_number"
            value={updateProperty.beds_number}
            onChange={(e) => handlerOnchange(e)}
          />
        </div>

        <div style={{ ...style.flex, lineHeight: "1" }}>
          <button style={style.btn} onClick={() => activeOrDisactive()}>
            {updateProperty.is_active ? "Active" : "Inactive"}
          </button>
          <p>
            {updateProperty.is_active ? (
              <i className="fa-solid fa-plug-circle-check fa-xl text-sidebar"></i>
            ) : (
              <i className="fa-solid fa-plug-circle-xmark fa-xl text-sidebar"></i>
            )}
          </p>
        </div>
      </div>
      <button
        className="border border-sidebar px-4 rounded-md"
        style={style.update}
        onClick={() => sendUpdateProperty()}
      >
        Update
      </button>
    </div>
  );
};


//////////////////////////////////////////////

const DashProperties = () => {

  const [properties, setProperties] = useState([]);
  const [dataUpdate, setDataUpdat] = useState()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await axios.get("https://airebnb.onrender.com/property/all"); // Ajusta la URL de la solicitud según corresponda
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
                <td onClick={(e) => handlerTest(e, property)}><button ><i className="fa-regular fa-pen-to-square"></i></button></td>
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