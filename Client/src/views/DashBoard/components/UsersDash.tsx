import { useSelector } from "react-redux";

const PropertiesDash = () => {
    const user = useSelector((state:any) => state.user);
    

 console.log(user);

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
              <th>Surname</th>
              <th>e-mail</th>
              <th>Location</th>
              <th>Gender</th>
              <th>Birth</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
              <tr key={user.user_id} className="text-center">
                <td >{user.user_id}</td>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.email}</td>
                <td>{user.location}</td>
                <td>{user.gender}</td>
                <td>{user.Date}</td>
                <td>{user.number}</td>
              </tr>
           </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertiesDash;