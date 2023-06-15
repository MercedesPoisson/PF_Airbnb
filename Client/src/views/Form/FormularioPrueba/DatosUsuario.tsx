const DatosUsuario = (props) => {

    const handleInputChange = (event) => {
        props.handleInputChange(event);
    };

    return ( 
        <div onKeyDown={props.handleEnterKey}>
            <h1>Datos Usuario</h1>
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" 
                name="nombre" 
                onChange={handleInputChange} 
                value={props.valores.nombre} 
                className="border border-black" />
            </div>
            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" name="apellido" onChange={handleInputChange} value={props.valores.apellido} className="border border-black" />
            </div>
            <div>
                <label htmlFor="">Usuario</label>
                <input type="text" name="usuario" onChange={handleInputChange} value={props.valores.usuario} className="border border-black" />
            </div>
            <div>
                <button className="border border-black" onClick={props.siguientePaso}>Siguiente</button>
            </div>
        </div>
    );
};
export default DatosUsuario