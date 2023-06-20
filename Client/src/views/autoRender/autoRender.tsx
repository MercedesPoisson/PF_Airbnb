import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import  getServices  from "../../redux/actions/getServices";
import { AnyAction } from "redux";
import getProvinces from "../../redux/actions/getProvinces";
import { useAuth0 } from "@auth0/auth0-react";
import getUser from "../../redux/actions/getUser";
import createUser from "../../redux/actions/createUser";


function AutoRender(){
    const dispatch = useDispatch()
    const { user, isAuthenticated } = useAuth0();
    const userId = useSelector((state: any) => state.user.id_user)
    console.log(user)

    useEffect(() => {
        if(isAuthenticated) {
            let id: any = (user?.sub?.split('|')[1]);
            dispatch(getUser(id) as unknown as AnyAction)
            if(!userId){
                dispatch(createUser({
                    id_user: user?.sub?.split('|')[1],
                    name: user?.name,
                    surname: user?.family_name,
                    email: user?.email,
                    address: user?.address,
                    number: 1128018970,
                    image: user?.picture,
                    gender: 'Male',
                    user_type: 'User',
                    is_active: true
                }) as unknown as AnyAction)
            }
        }
        const fetchData = async () => {
            await dispatch(getServices() as unknown as AnyAction);
            await dispatch(getProvinces() as unknown as AnyAction);
        };
        fetchData();
    }, [dispatch, isAuthenticated]);

    
    return(
        <>
        </>
        )
}

export default AutoRender