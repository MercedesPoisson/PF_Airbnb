const DireccionUsuario = (props) => {

    const handleInputChange = (event) => {
        props.handleInputChange(event);
    };

    return (
        <div onKeyDown={props.handleEnterKey}>
            <h1>Datos Direccion</h1>
            <div>
                <label htmlFor="">Calle</label>
                <input type="text" name="calle" onChange={handleInputChange} value={props.valores.calle} className="border border-black" />
            </div>
            <div>
                <label htmlFor="">Colonia</label>
                <input type="text" name="colonia" onChange={handleInputChange} value={props.valores.colonia} className="border border-black" />
            </div>
            <div>
                <label htmlFor="">Ciudad</label>
                <input type="text" name="ciudad" onChange={handleInputChange} value={props.valores.ciudad} className="border border-black" />
            </div>
            <div>
                <label htmlFor="">Estado</label>
                <input type="text" name="estado" onChange={handleInputChange} value={props.valores.estado} className="border border-black" />
            </div>
            <div>
                <button className="border border-black" onClick={props.anteriorPaso}>anterior</button>
                <button className="border border-black" onClick={props.siguientePaso}>Siguiente</button>
            </div>
        </div>
    );
};
export default DireccionUsuario