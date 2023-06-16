// import postServices from "../../../redux/actions/postProperties";

const Preview = (props) => {
  
    return (
        <div>
            <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto">
        <div>
          <div className="font-cairo text-2xl">Revisá tu anuncio</div>
          <p className="font-cairo">Esta es la información que van a ver tus huéspedes</p>
        </div>
        <div>
            <h1 className="font-bold font-cairo-play ">{props.formData.title}</h1>
            <h5>{props.formData.location}, {props.formData.province}</h5>
            <h3>{props.formData.description}</h3>
            <h3>Tipo de Propiedad: {props.formData.property_type}</h3>
            <h2>Cantidad de Huespedes: {props.formData.max_guests}</h2>
            <h2>Cantidad Dormitorios: {props.formData.rooms_number}, Catidad de Camas: {props.formData.beds_number}, cantidad de Baños: {props.formData.bathrooms_number}</h2>
            <h4 className="font-bold">Precio por Noche: ${props.formData.price_per_night}</h4>
            <h3>Servicios: {props.formData.services.join(", ")}</h3>
            {props.formData.weekly_discount || props.formData.monthly_discount ? (
              <h4 className="font-bold font-cairo-play">
                Esta propiedad ofrece descuentos! {props.formData.weekly_discount}, {props.formData.monthly_discount}
              </h4>
            ) : null}
        </div>
        <div className="flex space-x-4">
          {props.formData.images.map((image, index) => (
            <img className="h-60" key={index} src={URL.createObjectURL(image)} alt={`Image ${index}`} />
          ))}
        </div>
        
        <div className="col-span-1 font-cairo-play flex items-center justify-start mr-10">
          <button className="border border-argentina rounded p-1 w-32 mt-4 mr-2" onClick={props.previousStep}>
            Anterior
          </button>
          <button className="border border-argentina rounded p-1 w-32 mt-4" onClick={props.handlePost}>Finalizar</button>
        </div>
      </div>
    </div>
    )
}
export default Preview;