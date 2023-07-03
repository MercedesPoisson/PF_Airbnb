import ScrollToTopButton from "../scrollButton/ScrollToTopButton";
import { Link } from "react-router-dom";

const Privacidad = () => {
    return(
        <div className="font-cairo max-w-5xl mx-auto mt-10">
        <button>
            <Link to="/">
            <i className="fa-solid fa-angles-left text-argentina mr-2"></i>
            VOLVER
            </Link>
        </button>            
        <h5>Términos Legales</h5>
            <h1 className="text-xl uppercase font-bold">Privacidad en AireBnB</h1>
            <p className="mt-2">Nuestra Política de Privacidad explica qué datos personales que recopilamos, cómo se utilizan, cómo se comparten, y los derechos de privacidad.</p>
            <p>Última actualización: 25 de enero de 2023
                <br /><br />
            Airbnb existe para ayudar a conectar a las personas y construir 
            un mundo más abierto e inclusivo. En resumen, construir un mundo en el que todos 
            nos sintamos como en casa donde vayamos. Nuestra comunidad se basa en la confianza. 
            Para ganárnosla es fundamental que seamos transparentes con respecto a cómo utilizamos 
            sus datos y cómo protegemos su derecho humano a la privacidad.
            <br /><br />
            Esta Política de Privacidad describe cómo Airbnb, Inc. y sus empresas afiliadas 
            (“nosotros”, “nuestro(s), nuestra(s), nos”, o “Airbnb”), tratan la información personal 
            en relación con el uso que usted hace de la Plataforma Airbnb. Dependiendo de dónde viva 
            y de lo que esté haciendo en la Plataforma Airbnb, las páginas de privacidad complementarias 
            que se enumeran a continuación pueden aplicarse a usted. Por favor, siga los enlaces y revise 
            la información complementaria que 
            describe cómo tratamos los datos personales para esas regiones y servicios.</p>

            
            <h1 className="text-xl uppercase font-bold mt-6">1.  DEFINICIONES</h1>
            <p className="mt-2">Los términos no definidos de esta Política de Privacidad tienen la misma definición que en nuestros Términos de Servicio (“Términos”).</p>
            <h1 className="text-xl uppercase font-bold mt-6">2.  DATOS PERSONALES QUE RECOPILAMOS</h1>
            <h1 className="text-l uppercase font-bold">2.1 Datos necesarios para usar la Plataforma Airbnb.</h1>

            <p>
                <br />
                Recopilamos datos personales sobre usted cuando utiliza la plataforma Airbnb. 
                Sin ella, es posible que no podamos proporcionar todos los servicios que solicite. 
                Esta información incluye lo siguiente:
            Información de Contacto, de la Cuenta y del Perfil. Tal como su nombre, apellidos, 
            número telefónico, dirección postal, dirección de correo electrónico, fecha de nacimiento 
            y fotografía, algunos de los cuales dependerán de las características que utilice.
            Verificación de Identidad e Información de Pago. Por ejemplo, imágenes de su 
            identificación oficial personal (según lo permita la legislación aplicable), 
            su número de identificación u otra información de verificación, una selfie cuando 
            verificamos su identificación, su cuenta bancaria o su cuenta de pago. Si usted no es 
            usuario en Airbnb, puede que recibamos información de pago relacionada con usted, por ejemplo, 
            cuando un usuario en Airbnb proporciona su tarjeta de pago para completar una reservación. Si 
            se nos proporciona una copia de su identificación oficial, podemos escanear, usar y almacenar 
            la información contenida en su identificación oficial para 
            verificar su identidad y con fines de seguridad.
            <br /><br />
            Esta Política de Privacidad describe cómo Airbnb, Inc. y sus empresas afiliadas 
            (“nosotros”, “nuestro(s), nuestra(s), nos”, o “Airbnb”), tratan la información personal 
            en relación con el uso que usted hace de la Plataforma Airbnb. Dependiendo de dónde viva 
            y de lo que esté haciendo en la Plataforma Airbnb, las páginas de privacidad complementarias 
            que se enumeran a continuación pueden aplicarse a usted. Por favor, siga los enlaces y revise 
            la información complementaria que 
            describe cómo tratamos los datos personales para esas regiones y servicios.</p>
            <h1 className="text-xl uppercase font-bold mt-6">2.2 Información que elige proporcionar.</h1>
            <p>
                <br />
                Puede optar por proporcionarnos datos personales adicionales. 
                Esta información puede incluir:

            Información de Perfil adicional. Como género, idioma(s) de preferencia, ciudad y 
            descripción personal. Parte de esta información, tal como se indica en la configuración de su 
            cuenta, forma parte de la página pública de su perfil y será visible públicamente.
            Información sobre otras personas. Como un instrumento de pago perteneciente a otra persona o 
            información sobre un compañero de viaje. Al proporcionarnos datos personales sobre terceros, 
            usted certifica que tiene permiso para proporcionar esa información a Airbnb para los fines 
            descritos en esta Política de Privacidad, y que compartió la Política de Privacidad de Airbnb 
            con ellos.
            Otra información. Por ejemplo, cuando llene un formulario, agregue información a su cuenta, 
            responda a encuestas, publique en foros comunitarios, participe en promociones, se comunique con 
            nuestro equipo de atención al cliente y otros Miembros, importe o escriba manualmente contactos 
            en su libreta de direcciones, facilite su dirección y/o geolocalización o comparta su experiencia 
            con nosotros. Esto puede incluir información de salud, 
            si decide compartirla con nosotros.</p>

            <div>
                <ScrollToTopButton />
            </div>
        </div>
    )
}
export default Privacidad;