import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import UserNavBar from "./UserNavBar";
import updateUser from "../../redux/actions/updateUser";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const provinces = useSelector((state: any) => state.provinces);

  console.log(provinces);

  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  const [number, setNumber] = useState(user.number);
  const [date, setDate] = useState(user.date);
  const [gender, setGender] = useState(user.gender);
  const [isEditing, setIsEditing] = useState(false);
  const [filteredProvinces, setFilteredProvinces] = useState([]);

  const handleAddressChange = (event) => {
    // const inputValue = event.target.value.toLowerCase();
    // const filteredOptions = provinces.filter((province) =>
    //   province.toLowerCase().includes(inputValue)
    // );
    // setFilteredProvinces(filteredOptions);
    setAddress(event.target.value);
    console.log(event.target);
  };

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name,
      surname,
      email,
      address,
      number,
      date,
      gender,
    };

    // if(name) updatedUser.name = name;
    // if(surname) updatedUser.surname = surname;
    // if(email) updatedUser.email = email;
    // if(address) updatedUser.address = address;
    // if(number) updatedUser.number = number;
    // if(date) updatedUser.date = date;
    // if(gender) updatedUser.gender = gender;
    console.log(updatedUser);
    dispatch(updateUser(updatedUser));
  };

  return (
    <div className="font-cairo">
      <UserNavBar />
      <div className="ml-10 mt-10 font-cairo-play">
        <div className="ml-10 mt-10 font-cairo-play">
          {name ? `Hola, ${name}!` : "PERFIL"}
        </div>
      </div>
      <div className="grid grid-cols-12 gap-1 w-3/6 ml-10 mt-8">
        <div className="col-span-3 flex items-center justify-center">
          {user.image ? (
            <img
              src={user.image}
              alt="User Avatar"
              className="text-9xl text-gray-200 "
            />
          ) : (
            <i className="fa-solid fa-image-portrait text-9xl text-gray-200"></i>
          )}
        </div>

        <div className="col-span-9">
          <p className="mb-2">
            Nombre:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditing}
              className="ml-2 border rounded-md w-w250"
            />
            {!isEditing && (
              <i
                className="fa-solid fa-pen-to-square text-argentina ml-2"
                onClick={() => setIsEditing(!isEditing)}
              ></i>
            )}
          </p>

          <p className="mb-2">
            Apellido:
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              disabled={!isEditing}
              className="ml-2 border rounded-md w-w250"
            />
            {!isEditing && (
              <i
                className="fa-solid fa-pen-to-square text-argentina ml-2"
                onClick={() => setIsEditing(!isEditing)}
              ></i>
            )}
          </p>

          <p className="mb-2">
            E-mail:
            <input
              type="text"
              value={email}
              disabled
              className="ml-2 border rounded-md w-w250"
            />
          </p>
          <p className="mb-2">
            Ubicación:
            <select
              value={address}
              disabled={!isEditing}
              className="ml-2 border rounded-md w-w250"
            >
              {provinces.map((province, index) => (
                <option
                  key={index}
                  value={province.nombre}
                  onChange={handleAddressChange}
                >
                  {province.nombre}
                </option>
              ))}
            </select>
          </p>

          <p className="mb-2">
            Teléfono:
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              disabled={!isEditing}
              className="ml-2 border rounded-md w-w250"
            />
            {!isEditing && (
              <i
                className="fa-solid fa-pen-to-square text-argentina ml-2"
                onClick={() => setIsEditing(!isEditing)}
              ></i>
            )}
          </p>
          <p className="mb-2">
            Fecha de Nacimiento:
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              disabled={!isEditing}
              className="ml-2 border rounded-md w-w250"
            />
            {!isEditing && (
              <i
                className="fa-solid fa-pen-to-square text-argentina ml-2"
                onClick={() => setIsEditing(!isEditing)}
              ></i>
            )}
          </p>
          <p className="mb-2">
            Género:
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              disabled={!isEditing}
              className="ml-2 border rounded-md w-w250"
            >
              <option value="Male">Masculino</option>
              <option value="Female">Femenino</option>
              <option value="Other">Otro</option>
            </select>
            {!isEditing && (
              <i
                className="fa-solid fa-pen-to-square text-argentina ml-2"
                onClick={() => setIsEditing(!isEditing)}
              ></i>
            )}
          </p>
        </div>
      </div>

      {isEditing && (
        <div>
          <button
            className="border border-argentina rounded p-1 w-32 mt-4 ml-10"
            onClick={handleSave}
          >
            GUARDAR
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
