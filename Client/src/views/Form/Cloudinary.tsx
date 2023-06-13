const Cloudinary = () => {
    return (
      <>
        <div className="relative">
          <input className="pl-8 w-96 h-10 border rounded-md mb-2" type="text" placeholder="Seleccione la primer imagen" />
          <button className="border border-black rounded p-1 w-32">Buscar</button>
        </div>
        <div className="relative">
          <input className="pl-8 w-96 h-10 border rounded-md mb-2" type="text" placeholder="Seleccione la segunda imagen" />
          <button className="border border-black rounded p-1 w-32">Buscar</button>
        </div>
        <div className="relative">
          <input className="pl-8 w-96 h-10 border rounded-md mb-2" type="text" placeholder="Seleccione la tercer imagen" />
          <button className="border border-black rounded p-1 w-32">Buscar</button>
        </div>
      </>
    );
  };
  
  export default Cloudinary;