import {useSelector ,useDispatch} from "react-redux"
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({children}) => {
  const {token} = useSelector((store)=>store.Loginreducer);
  const location = useLocation();

  if(token == null){
    return <Navigate to={"/login"} state ={location.pathname} replace={true}/>
  }

  return children;
};
