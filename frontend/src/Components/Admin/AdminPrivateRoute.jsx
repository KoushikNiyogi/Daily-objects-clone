import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

// export const AdminPrivateRoute = ({ children }) => {
//   const isAuthadmin = useSelector((store) => store.adminloginReducer.isAuth);
//   const location = useLocation();
//   // const token = localStorage.getItem("adminToken");
//   // console.log(isAuthadmin, typeof token);
//   return isAuthadmin ? (
//     <Navigate to={"/adminlogin"} state={location.pathname} replace />
//   ) : (
//     children
//   );
// };

export const AdminPrivateRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.adminloginReducer.isAuth);
  const location = useLocation();
  return !isAuth ? (
    <Navigate to={"/adminlogin"} state={location.pathname} replace />
  ) : (
    children
  );
};
