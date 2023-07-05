import axios from "axios";
import { useEffect, useState } from "react";

/////////////////////esta componente deberia estar en otro lado/////////
/////*********************************//////////////////////////////////
const ShowUpdate = ({ user, setOpen }: any) => {
    const [updateUser, setUpdateUser]: any = useState({
        name: user.name,
        surname: user.surname,
        isactive: user.isactive
    })
///////////////////////////////////////////////
    const handlerOnchange = (e: any) => {
        const { value, name } = e.target;
        console.log(value)
        setUpdateUser({
            ...updateUser,
            [name]: value
        })
    }
    ////////////////////////////////////////////
    const sendUpdateUser = async () => {
        await axios.put("https://airebnb.onrender.com/users/update/" + user.id_user, updateUser);
        alert("user creado correctamente")
        setOpen(false)
    }
    //////////////////////////////////////////
    return (
        <div>
            <button onClick={() => setOpen(false)}>X</button>
            <h1>User edit</h1>
            <div>
                <span>name: </span>
                <input type="text" name="name" value={updateUser.name} onChange={(e) => handlerOnchange(e)} />
                <span>surname:  </span>
                <input type="text" name="surname" value={updateUser.surname} onChange={(e) => handlerOnchange(e)} />
                <input type="checkbox" checked={true} />
            </div>
            <button onClick={() => sendUpdateUser()}>Update</button>
        </div>
    )
}

/////////*******************************************////////////////////
////////////////////////////////////////////////////////////////////////



const DashUsers = () => {

    const [dataUser, setDataUser] = useState([]);
    const [open, setOpen] = useState(false)
    const [dataUpdate, setDataUpdat] = useState()

    useEffect(() => {
        async function fetchProperties() {
            try {
                const response = await axios.get("https://airebnb.onrender.com/users/"); // Ajusta la URL de la solicitud según corresponda
                setDataUser(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchProperties();
    }, [open]);

    const handlerTest = (e: any, user: any) => {
        e.preventDefault()
        setOpen((s) => !s)
        setDataUpdat(user)
    }

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
                        {dataUser && dataUser.map((user: any, index: number) => (
                            <tr key={user.id_user} className="text-center">
                                <td >#{index + 1}</td>
                                <td >{user.id_user}</td>
                                <td>{user.name}</td>
                                <td>{user.surname}</td>
                                <td>{user.email}</td>
                                <td>{user.is_active ? "True" : "False"}</td>
                                <td><button onClick={(e) => handlerTest(e, user)}>O</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {
                open ? <ShowUpdate user={dataUpdate} setOpen={setOpen} /> : null
            }
        </div>
    );
}
export default DashUsers;