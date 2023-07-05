import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import getPropertyDetail from "../../redux/actions/getPropertyDetail";
import { AnyAction } from "redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Map from "./Map";
import UserMenu from "../searchBar/UserMenu";
import Reservas from "./Reservas";
import Images from "./Images";
import Review from "../Rating/Review";
import { useAuth0 } from "@auth0/auth0-react";
import Report from "./Report";
import getFavorites from "../../redux/actions/getFavorites";
import postFavorites from "../../redux/actions/postFavorites";
import deleteFavorites from "../../redux/actions/deleteFavorites";
// import Rating from "../Rating/Rating";

const CardDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const property = useSelector((state: any) => state.detail);
  const currentUser = useSelector((state: any) => state.user);
  const favorites = useSelector((state: any) => state.favorites);
  const { isAuthenticated } = useAuth0();
  const [isSaved, SetIsSaved] = useState(favorites?.some((favorite:any)=> favorite?.id_property === Number(id)));
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);
  console.log(id);
  console.log(favorites);
  
  

  function openModal(ratingId) {
    setSelectedRating(ratingId);
    setIsOpen(true);
  }

  function closeModal() {
    setSelectedRating(null);
    setIsOpen(false);
  }

  const handleNavigateToHome = () => {
    navigate("/");
  };

  
  
  const handleSaveClick = async() => {
    if(isAuthenticated){
      await SetIsSaved(!isSaved)
      if(!isSaved){
        await dispatch(postFavorites(currentUser.id_user,Number(id))as unknown as AnyAction)
        await dispatch(getFavorites(currentUser.id_user)as unknown as AnyAction)
      }
      else{
        await dispatch(deleteFavorites(currentUser.id_user,Number(id))as unknown as AnyAction)
        await dispatch(getFavorites(currentUser.id_user)as unknown as AnyAction)
      }
    }   
  };
  
  
  const chunk = (arr: any, size: any) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
  arr.slice(i * size, i * size + size)
  );

  useEffect(() => {
    dispatch(getPropertyDetail(id) as unknown as AnyAction);
    dispatch(getFavorites(currentUser.id_user) as unknown as AnyAction);
}, [dispatch, id, currentUser.id_user]);
  
      return (
        <div>
      <div className="sticky top-0">
        <div className="grid grid-cols-2 gap-3 h-16 mb-1 bg-white">
          <div className="col-span-1 flex items-center justify-start">
            <div
              className="flex items-center cursor-pointer"
              onClick={handleNavigateToHome}
            >
              <i className="fa fa-sun text-argentina ml-4 text-2xl"></i>
              <span className="ml-1 text-argentina font-comfortaa text-lg">
                airebnb
              </span>
            </div>
          </div>
          <div className="col-span-1 font-cairo-play flex items-center justify-end mr-10">
            <button className="mr-4">
              <UserMenu />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-between font-cairo ml-10 mr-20">
        <div className="w-full max-w-5xl mx-auto flex-grow">
          {property && (
            <div>
              <h1 className="text-2xl">{property.title}</h1>
              <div className="flex items-center">
                <div>
                  <i className="fa-regular fa-star text-argentina" />
                  {property.rating}
                </div>
                <div className="ml-4">
                  {property.property_type === "House"
                    ? "Casa"
                    : property.property_type === "Apartment"
                    ? "Departamento"
                    : property.property_type === "Room"
                    ? "Habitación"
                    : ""}
                  {" en"} {property.location}, {property.province}
                </div>
                <div>
                  <i
                    className={`ml-3 mr-1 cursor-pointer ${
                      isSaved ? "fa-solid fa-heart" : "fa-regular fa-heart"
                    } text-argentina`}
                    onClick={handleSaveClick}
                  ></i>
                  Guardar
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  {property.max_guests}{" "}
                  {property.max_guests === 1 ? "huésped" : "huéspedes"}
                </div>
                <div className="ml-2 mr-2">
                  <i
                    className="fa-solid fa-circle text-argentina"
                    style={{ fontSize: "0.3em" }}
                  />
                </div>
                <div>
                  {property.rooms_number}{" "}
                  {property.rooms_number === 1 ? "dormitorio" : "dormitorios"}
                </div>
                <div className="ml-2 mr-2">
                  <i
                    className="fa-solid fa-circle text-argentina"
                    style={{ fontSize: "0.3em" }}
                  />
                </div>
                <div>
                  {property.beds_number}{" "}
                  {property.beds_number === 1 ? "cama" : "camas"}
                </div>
                <div className="ml-2 mr-2">
                  <i
                    className="fa-solid fa-circle text-argentina"
                    style={{ fontSize: "0.3em" }}
                  />
                </div>
                <div>
                  {property.bathrooms_number}{" "}
                  {property.bathrooms_number === 1 ? "baño" : "baños"}
                </div>
              </div>
              <div>
                <Images />
              </div>
              <div>
                <p>{property.description}</p>
              </div>
              <div>
                <div className="mt-2">
                  {property.allow_pets && (
                    <h3 className="font-semibold">
                      Podes venir a disfrutar con tu mascota{" "}
                      <i className="fa-solid fa-paw ml-2 text-argentina"></i>
                    </h3>
                  )}
                </div>
                <div>
                  <i className="fa-solid fa-dollar-sign text-argentina mr-1"></i>
                  {property.price_per_night} {" noche"}
                </div>
                <div>
                  {property.monthly_discount || property.weekly_discount ? (
                    <h3 className="font-semibold">
                      Esta propiedad ofrece descuentos{" "}
                      {property.monthly_discount && property.weekly_discount
                        ? "en estadías semanales y mensuales"
                        : property.monthly_discount
                        ? "en estadías mensuales"
                        : "en estadías semanales"}
                      <i className="fa-light fa-tag text-argentina" />
                    </h3>
                  ) : null}
                </div>
                <div className="mt-3">Servicios incluidos:</div>
                <div className="grid grid-cols-3 gap-4 mb-2">
                  {property.Services &&
                    property.Services.map((service: any, index: any) => (
                      <div key={index} className="flex items-center">
                        <i className={`${service.icon} mr-2`}></i>
                        <span>{service.name}</span>
                      </div>
                    ))}
                </div>

                <div className="w-full max-w-5xl mx-auto flex-grow justify-center">
                  <div className="mt-4 flex justify-center flex-wrap">
                    {property && property.location && property.province && (
                      <div className="w-1/2">
                        <Map
                          location={property.location}
                          province={property.province}
                        />
                      </div>
                    )}
                    <div className="w-1/2">
                      <Reservas property={property} />
                    </div>
                    <div>
                      {property.Ratings &&
                        chunk(property.Ratings, 2).map((group, index) => (
                          <div
                            key={index}
                            className="flex justify-center mb-4 mt-5"
                          >
                            {group.map((rating: any, i: number) => {
                              const isReportable =
                                isAuthenticated &&
                                property.id_user === currentUser.id_user;

                              return (
                                <div key={i} className="relative">
                                  {isReportable && (
                                    <button
                                      onClick={() =>
                                        openModal(rating.rating_id)
                                      }
                                      className="text-argentina absolute -top-1 right-0"
                                    >
                                      Reportar
                                    </button>
                                  )}
                                  <Review rating={rating} />
                                </div>
                              );
                            })}
                          </div>
                        ))}
                    </div>
                    <Report
                      isOpen={isOpen && selectedRating !== null}
                      setIsOpen={closeModal}
                      SelectedRating={selectedRating}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
