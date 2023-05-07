import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const AdminPrivateRoute = ({ children }) => {
  const isAuthadmin = useSelector((store) => store.adminloginReducer.isAuth);
  const location = useLocation();

  return !isAuthadmin ? (
    <Navigate to={"/adminlogin"} state={location.pathname} replace />
  ) : (
    children
  );
};
