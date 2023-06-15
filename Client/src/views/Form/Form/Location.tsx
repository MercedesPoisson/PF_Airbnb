const Location = (props) => {
    return(
        <div>
            <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto ">
        <div>
          <div className="font-cairo text-2xl ">¿Dónde queda tu propiedad?</div>
          <p className="font-cairo">Solo vamos a compartir tu dirección exacta una vez confirmada la reserva.</p>
        </div>
        <div className="items-center">
          <div className="mb-2">
            <div className="relative">
              <input 
              className="pl-8 w-96 h-10 border rounded-md" 
              type="text" 
              placeholder="Ingrese la dirección" 
              name="address"
              onChange={props.handleInputChange}
              value={props.formData.address}
              />
              <i className="fa fa-location-dot absolute left-2 top-3 text-gray-600"></i>
            </div>
          </div>
          <div className="mb-2">
            <div className="relative">
              <input 
              className="pl-8 w-96 h-10 border rounded-md" 
              type="text" 
              placeholder="Ingrese la localidad"
              name="location"
              onChange={props.handleInputChange}
              value={props.formData.location} />
              <i className="fa fa-location-dot absolute left-2 top-3 text-gray-600"></i>
            </div>
          </div>
          <div>
            <div className="relative">
              <input 
              className="pl-8 w-96 h-10 border rounded-md" 
              type="text" 
              placeholder="Ingrese la provincia"
              name="province"
              onChange={props.handleInputChange}
              value={props.formData.province} />
              <i className="fa fa-location-dot absolute left-2 top-3 text-gray-600"></i>
            </div>
          </div>
        </div>
        <div className="col-span-1 font-cairo-play flex justify-start ml-10">
          <button className="border border-argentina rounded p-1 w-32 mt-4 mr-2" onClick={props.previousStep}>
            Anterior
          </button>
          <button className="border border-argentina rounded p-1 w-32 mt-4" onClick={props.nextStep} >
            Siguiente
          </button>
        </div>
      </div>
    </div>
       
    )
}
export default Location;