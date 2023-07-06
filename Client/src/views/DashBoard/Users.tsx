import axios from "axios";
import { useEffect, useState } from "react";

/////////////////////esta componente deberia estar en otro lado/////////
/////*********************************//////////////////////////////////

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
    left: "calc(50% - 180px)",
  },
  title: {
    minWidth: "40%",
    textAlign: "center",
    fontSize: "20px",
    display: "inline-block",
    position: "relative",
    left: "calc(50% - 20%)",
  },
  inputs: {
    fontSize: "20px",
    width: "60%",
    height: "50px",

    margin: "5px",

    position: "relative",
    left: "calc(50% - 45%)",
    borderRadius: "5px",
  },

  inputsName: {
    fontSize: "20px",
    margin: "10px 0px",
  },
  // close: {
  //     fontSize: "30px",
  //     position: "relative",
  //     left: "96%",
  //     top: "-25px",
  //     color: "red"

  // },

  update: {
    fontSize: "18px",
    padding: "10px",
    width: "30%",
    height: "40px",
    borderRadius: "5px",
    position: "absolute",
    left: "calc(50% - 15%)",
    bottom: "15px",
  },
  flex: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    padding: "0px 6%",
    margin: "20px 0",
  },
  btn: {
    fontSize: "20px",
    borderRadius: "5px",

    padding: "10px 0",
  },
};

///////////////////////////////////////////////////////////

const ShowUpdate = ({ user, setOpen }: any) => {
  const [updateUser, setUpdateUser]: any = useState({
    name: user.name,
    surname: user.surname,
    is_active: user.is_active,
  });
  ///////////////////////////////////////////////

  console.log(user);
  const handlerOnchange = (e: any) => {
    const { value, name } = e.target;
    console.log(value);
    setUpdateUser({
      ...updateUser,
      [name]: value,
    });
  };
  ////////////////////////////////////////////
  const sendUpdateUser = async () => {
    await axios.put(
      "http://localhost:3001/users/update/" + user.id_user,
      updateUser
    );
    alert("user creado correctamente");
    setOpen(false);
  };

  const activeOrDisactive = () => {
    setUpdateUser({
      ...updateUser,
      is_active: !updateUser.is_active,
    });
  };
  //////////////////////////////////////////
  return (
    <div style={style.contain}>
      <button style={style.close} onClick={() => setOpen(false)}>
        <i className="fa-solid fa-xmark text-sidebar"></i>
      </button>
      <h1 style={style.title}>
        User - {user.name} {user.surname}
      </h1>
      <div>
        <div style={style.flex}>
          <p style={style.inputsName}>Name: </p>
          <input
            className="border"
            style={style.inputs}
            type="text"
            name="name"
            value={updateUser.name}
            onChange={(e) => handlerOnchange(e)}
          />
        </div>
        <div style={style.flex}>
          <p style={style.inputsName}>Surname: </p>
          <input
            className="border"
            style={style.inputs}
            type="text"
            name="surname"
            value={updateUser.surname}
            onChange={(e) => handlerOnchange(e)}
          />
        </div>

        <div style={style.flex}>
          <button style={style.btn} onClick={() => activeOrDisactive()}>
            {updateUser.is_active == true ? "Active" : "Inactive"}
          </button>
          <p>
            {updateUser.is_active == true ? (
              <i className="fa-solid fa-plug-circle-check fa-xl text-sidebar"></i>
            ) : (
              <i className="fa-solid fa-plug-circle-xmark fa-xl text-sidebar"></i>
            )}
          </p>
        </div>
      </div>
      <button className="border border-sidebar px-4 rounded-md" style={style.update} onClick={() => sendUpdateUser()}>
        Update <i className="fa-regular fa-pen-to-square"></i>
      </button>
    </div>
  );
};

/////////*******************************************////////////////////
////////////////////////////////////////////////////////////////////////

const DashUsers = () => {
  const [dataUser, setDataUser] = useState([]);
  const [open, setOpen] = useState(false);
  const [dataUpdate, setDataUpdat] = useState();

  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await axios.get("http://localhost:3001/users/"); // Ajusta la URL de la solicitud según corresponda
        setDataUser(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProperties();
  }, [open]);

  const handlerTest = (e: any, user: any) => {
    e.preventDefault();
    setOpen((s) => !s);
    setDataUpdat(user);
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Users</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>Number</th>
              <th>ID</th>
              <th>Name</th>
              <th>surname</th>
              <th>email</th>
              <th>is_active</th>
              <th>edit</th>
            </tr>
          </thead>
          <tbody>
            {dataUser &&
              dataUser.map((user: any, index: number) => (
                <tr key={user.id_user} className="text-center">
                  <td>#{index + 1}</td>
                  <td>{user.id_user}</td>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.is_active ? (
                      <i className="fa-solid fa-plug-circle-check fa-lg"></i>
                    ) : (
                      <i className="fa-solid fa-plug-circle-xmark fa-lg"></i>
                    )}
                  </td>
                  <td>
                    <button onClick={(e) => handlerTest(e, user)}>
                      <i className="fa-regular fa-pen-to-square"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {open ? <ShowUpdate user={dataUpdate} setOpen={setOpen} /> : null}
    </div>
  );
};
export default DashUsers;