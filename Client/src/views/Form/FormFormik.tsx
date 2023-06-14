
import * as Yup from "yup";
import { useFormik } from "formik";
import NavBar from "./navBar";
// import Intro from "./FirstView";

const FormFormik = () => {
    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            property_type: "",
            adress: "",
            Location: "",
            Province: "",
            max_guest: "",
            rooms_number: "",
            beds_number: "",
            bathrooms_number: "",
            services: {},
            images: [],
            title: "",
            description: "",
            price_per_night: "",
            discount: ""
        },

        validationSchema: Yup.object({
            property_type: Yup.string().required("Requerido"),
            adress: Yup.string().required("Requerido")
        }),
        onSubmit: values => {
            console.log(values)
        }
    })
    return (
        <div>
            <NavBar />
            <div className="w-3/4 mx-auto">
    <div className="font-cairo-play text-2xl text-left mb-8">
      Te ayudamos en todo el recorrido para publicar <br />tu propiedad fácilmente.
    </div>
    <div className="flex flex-col justify-center">
      <button className="bg-transparent border-none rounded-md focus:outline-none mb-4 text-left cursor-default">
        <span className="font-cairo">1) Contanos acerca de tu propiedad</span>
        <p>Compartí datos básicos, como la ubicación y huéspedes pueden quedarse en el lugar.</p>
      </button>
      <button className="bg-transparent border-none rounded-md focus:outline-none mb-4 text-left cursor-default">
        <span className="font-cairo">2) Hacé que se destaque</span>
        <p>Agregá al menos 5 fotos más el título y la descripción.</p>
      </button>
      <button className="bg-transparent border-none rounded-md focus:outline-none mb-4 text-left cursor-default">
        <span className="font-cairo">3) Terminá todo y publicá el anuncio</span>
        <p>Establecé un precio inicial y publicá tu anuncio.</p>
      </button>
    </div>
    
  </div>
            <form noValidate onSubmit={handleSubmit}>
                <div>
                    
                    <label>
                        <input type="radio"
                        {...getFieldProps("property_type")}
                        checked={getFieldProps("property_type").value === "casa"}
                        value="casa" /> Casa
                    </label>
                    <label>
                        <input type="radio"
                        {...getFieldProps("property_type")}
                        checked={getFieldProps("property_type").value === "departamento"}
                        value="departamento" /> Departamento
                    </label>
                    <label>
                        <input type="radio"
                        {...getFieldProps("property_type")}
                        checked={getFieldProps("property_type").value === "habitacion"}
                        value="habitacion" /> Habitacion
                    </label>
                    {touched.property_type && errors.property_type && <span>{errors.property_type}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}
export default FormFormik
