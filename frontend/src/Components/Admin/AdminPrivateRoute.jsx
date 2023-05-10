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
  const {isAuth,token} = useSelector((store) => store.adminloginReducer);
  const location = useLocation();
  console.log("admin private route called",location.pathname,token);
  if(token==""){
    return <Navigate to={"/adminlogin"} state={location.pathname} replace />
  }
  return children
  
};
