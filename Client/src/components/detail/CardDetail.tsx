import { useSelector } from "react-redux"

const t = [
    {
        "id_property": 2,
        "id_user": "123123-4444324224-232333",
        "title": "Hermoso Apartamento nuevo",
        "province": "Buenos Aires",
        "location": "Balcarce",
        "address": "Calle Principal 123",
        "zip_code": "12345",
        "property_type": "Apartamento",
        "description": "Una casa hermosa cerca de la playa",
        "price_per_night": 300,
        "images": [],
        "rating": 3.5,
        "ratings_amount": 0,
        "start_date": "2023-07-01",
        "end_date": "2023-07-10",
        "is_active": true,
        "rooms_number": 3,
        "bathrooms_number": 2,
        "beds_number": 4,
        "max_guests": 5,
        "allow_pets": true,
        "weekly_discount": false,
        "monthly_discount": false,
        "min_nights": 1,
        "createdAt": "2023-06-15T20:52:49.092Z",
        "updatedAt": "2023-06-15T20:52:49.093Z",
        "Services": [
            {
                "name": "Wifi",
                "icon": "fa-solid fa-wifi"
            },
            {
                "name": "Televisor",
                "icon": "fa-solid fa-tv"
            },
            {
                "name": "Cocina",
                "icon": "fa-solid fa-kitchen-set"
            }
        ]
    }
]







const CardDetails = () => {
    // const properties = useSelector((state: any) => state.detail);
    //console.log(properties);
    return <>
        {
            t.map(p => {
                return (
                    <main>
                        <h1 className="bg-blue-500 p-5" >{p.title} </h1>
                        <h2 >{p.province}  {p.location}</h2>
                        <p>X {p.rating}</p>
                        <div >
                            <h2>Imageeeee</h2>
                        </div>
                        <div>
                            <section>
                                <article>
                                    <h3 >
                                        tipo - {p.property_type}
                                    </h3>
                                    <div>
                                        <span>{p.max_guests} Huespedes -</span>
                                        <span> {p.rooms_number} Dormitorio -</span>
                                        <span> {p.beds_number} Camas -</span>
                                        <span> {p.bathrooms_number} Baños </span>
                                    </div>
                                </article>
                                <article>
                                    <h2 >Descripcion</h2>
                                    <p>{p.description}</p>
                                </article>
                                <article>
                                    <h2 >Que ofrece este lugar</h2>
                                    <div >
                                        {
                                            p.Services.map(s => <i className={s.icon}> {s.name}</i>)
                                        }
                                    </div>
                                </article>
                            </section>
                            <aside>
                                <article>
                                    <h2>Noche ${p.price_per_night} USD</h2>
                                    <p>X {p.rating}</p>
                                    <div>
                                        <p>Mascotas - {p.allow_pets ? "Si" : "No"}</p>
                                        <p>Descuento Semanal - {p.weekly_discount ? "Si" : "No"}</p>
                                        <p>Descuento Mnsual- {p.monthly_discount ? "Si" : "No"}</p>
                                        <div>
                                            <h3>Check In</h3>
                                            {p.start_date}
                                        </div>
                                        <div>
                                            <h3>Check Out</h3>
                                            {p.end_date}
                                        </div>
                                    </div>
                                    <button onClick={() => alert("Haciendo Reserva")}>Reservar</button>
                                </article>
                            </aside>
                        </div>
                    </main>
                )
            })
        }
    </>


}



export default CardDetails