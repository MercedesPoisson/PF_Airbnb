import ScrollToTopButton from "../scrollButton/ScrollToTopButton";
import { Link } from "react-router-dom";

const Terminos = () => {
    return(
        <div className="font-cairo max-w-5xl mx-auto mt-10">
        <button>
            <Link to="/">
            <i className="fa-solid fa-angles-left text-argentina mr-2"></i>
            VOLVER
            </Link>
        </button>            
        <h5>Términos Legales</h5>
            <h1 className="text-xl uppercase font-bold">Términos de Servicios</h1>
            <p className="mt-2">La Sección 23 de estos Términos contiene un acuerdo 
            de arbitraje y una renuncia de demanda colectiva que se aplica a todas las reclamaciones presentadas contra Airbnb en los Estados Unidos. Favor de leer con atención.</p>
            <p>Última actualización: 25 de enero de 2023
                <br />
                ¡Gracias por utilizar Airebnb!
                <br /><br />
                Los Presentes Términos de Servicio (“Términos”) son un contrato legal vinculante entre 
                usted y Airbnb que rigen el derecho a usar los sitios web, las aplicaciones y otros 
                ofrecimientos de Airbnb (colectivamente, la “Plataforma Airbnb”). Cuando estos Términos 
                utilizan “Airbnb,” “nosotros,” “nos” o “nuestros” se refieren a la entidad de Airbnb 
                mencionada en el Anexo 1, con quien contrata el usuario.

                La Plataforma Airbnb ofrece un sitio en línea que permite a los usuarios (“Miembros”) publicar, ofrecer,
                buscar y reservar servicios. Los Miembros que publican y ofrecen servicios son “Anfitriones”, 
                mientras que los miembros que buscan, reservan o utilizan servicios son “Huéspedes”. 
                Los Anfitriones ofrecen alojamientos (“Alojamientos”), actividades, excursiones y eventos
                (“Experiencias”), así como una variedad de servicios de viaje y de otro tipo 
                (colectivamente, los “Servicios del Anfitrión”, y cada oferta de un Servicio del Anfitrión un 
                “Anuncio”). Usted debe registrar una cuenta para acceder y utilizar muchas funciones de la 
                Plataforma Airbnb, así como procurar que la información de la cuenta sea precisa. Como 
                proveedor de la Plataforma Airbnb, Airbnb no posee, controla, ofrece ni administra ningún 
                Anuncio, Servicios del Anfitrión o servicios turísticos. Airbnb no es parte de los contratos 
                celebrados directamente entre los Anfitriones y los Huéspedes, ni tampoco es agente 
                inmobiliario, agencia de viajes ni asegurador. Airbnb no actúa como agente de ningún
                Miembro, excepto según lo especificado en los Términos del Servicio de Pagos 
                (“Términos de Pago”). Para obtener más información acerca de la función de Airbnb, 
                consulte la Sección 16.

                Mantenemos otros términos y políticas que complementan estos Términos, como la Política
                de Privacidad, que describe la recopilación y el uso de datos personales, y los Términos 
                de pago, que rigen los servicios de pago prestados a los Miembros por las entidades de pago 
                de Airbnb (colectivamente, "Airbnb Pagos").

                Si usted es Anfitrión, es su responsabilidad comprender y cumplir todas las leyes, normas, 
                reglamentos y contratos con terceros que se apliquen a los Servicios del Anfitrión.</p>

            
            <h1 className="text-xl uppercase font-bold mt-6">Términos para Huéspedes</h1>
            <p className="mt-2">1.  Nuestra Misión.
            <br/>
            Nuestra Misión es crear un mundo donde usted pueda sentirse como en casa donde vaya. 
            Desde cabañas hasta castillos y clases de cocina, revise entre millones de Anuncios para encontrar
            los que se ajusten a sus preferencias. Para obtener más información sobre un Anuncio, consulte 
            la descripción y las fotos, el Perfil del Anfitrión y 
            las evaluaciones de los Huéspedes. Si tiene alguna duda, envíe un mensaje al Anfitrión.</p>
            <p className="mt-2">2.  Búsqueda y Reservación en Airbnb.
            <br/>
            2.1 Búsqueda. Usted puede buscar los Servicios del Anfitrión utilizando criterios
             como el tipo de Servicio del Anfitrión, el destino de viaje, las fechas y el número
              de Huéspedes. Usted también puede utilizar filtros para refinar los resultados de 
              búsqueda. Los resultados de búsqueda se basan en la relevancia para su búsqueda y 
              otros criterios. La relevancia tiene en cuenta factores como el precio, la 
              disponibilidad, las Evaluaciones, el servicio al cliente y el historial de cancelaciones, 
              la popularidad, los viajes anteriores y los Anuncios guardados, los requisitos del Anfitrión
               (por ejemplo, el número mínimo y máximo de noches) 
            y más. Obtenga más información sobre los resultados de búsqueda en el Centro de Ayuda.</p>
            <br/>
            <p className="mt-2">2.3 Reservaciones de Alojamiento. Una Reservación de Alojamiento es una licencia 
            limitada para ingresar, ocupar y utilizar el Alojamiento. El Anfitrión se reserva el derecho de reingresar 
            al Alojamiento durante su estancia en la medida en que: (i) sea razonablemente necesario, (ii) esté permitido 
            por su contrato con el Anfitrión y (iii) sea compatible con la legislación aplicable. Si usted se queda después 
            de la fecha de salida, el Anfitrión tiene derecho a hacer que se marche de una manera consecuente con la ley 
            aplicable, incluso imponiendo penalidades razonables por estancia prolongada. 
            Usted no puede superar el número máximo de Huéspedes permitido.</p>
                <br/>
            <p className="mt-2">2.4 Reservaciones para Experiencias y otros Servicios del Anfitrión. Una Experiencia u 
            otra Reservación de un Servicio del Anfitrión le da derecho a participar, asistir o utilizar dicho Servicio
             del Anfitrión. Usted es responsable de confirmar que usted y cualquier persona a quien invite cumplen con la
              edad mínima, competencia, condición física u otros requisitos establecidos. Usted es responsable de informar 
              al Anfitrión de cualquier condición médica, física u otra circunstancia que pueda afectar su capacidad para 
              participar, asistir o utilizar el Servicio del Anfitrión. Salvo cuando haya autorización expresa, usted no 
              puede permitir que ninguna persona participe en un Servicio del Anfitrión a menos que se incluya como 
            huésped adicional durante el proceso de reservación.</p>


            
    

            <div>
                <ScrollToTopButton />
            </div>
        </div>
    )
}
export default Terminos;