
const Confirmar = (props) => {
    return (
        <div>
            <h1>Confirma tus datos</h1>
            <h4>Datos del usuario</h4>
            <p>Nombre: {props.valores.nombre}</p>
            <p>Apellido: {props.valores.apellido}</p>
            <p>Usuario: {props.valores.usuario}</p>
            <h4>Datos dirección</h4>
            <p>Calle: {props.valores.calle}</p>
            <p>Colonia: {props.valores.colonia}</p>
            <p>Ciudad: {props.valores.ciudad}</p>
            <p>Estado: {props.valores.estado}</p>
            <div>
                <button className="border border-black" onClick={props.anteriorPaso}>
                    Anterior
                </button>
                <button className="border border-black" onClick={props.siguientePaso}>
                    Confirmar
                </button>
            </div>
        </div>
    );
};

export default Confirmar;