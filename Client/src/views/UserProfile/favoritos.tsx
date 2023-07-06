import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getFavorites from "../../redux/actions/getFavorites";
import { useAuth0 } from "@auth0/auth0-react";
import { AnyAction } from "redux";
import Card from "../../components/card/card";

const Favoritos = () => {
  const { id_user } = useSelector((state: any) => state.user);
  const favorites = useSelector((state: any) => state.favorites);
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth0();

  console.log("Estoy en favorites");
  console.log(id_user);
  console.log(isAuthenticated);

  useEffect(() => {
    dispatch(getFavorites(id_user) as unknown as AnyAction);
  }, [dispatch]);

  return (
    isAuthenticated && (
      <div>
        <div className="mt-10 ml-10 font-cairo font-bold">MIS FAVORITOS</div>
        <div className="flex flex-wrap -mx-2">
          {favorites.map((favorite: any) => (
            <div className="mx-2" key={favorite.Property.id_property}>
              <Card
                id_property={favorite.Property.id_property}
                title={favorite.Property.title}
                location={favorite.Property.location}
                province={favorite.Property.province}
                price_per_night={favorite.Property.price_per_night}
                rating={favorite.Property.rating}
                images={favorite.Property.images}
              />
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Favoritos;