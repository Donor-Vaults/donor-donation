import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports"
import { Navigate } from "react-router-dom";
const InverseProtected = ({children }) => {
   

  const authData = useSelector((state) => {
   return state.user
  });

  useEffect(() => {
    console.log({authData})
  },[authData])
  if (authData.loading) {
    return null;
  }
  if (authData.isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default InverseProtected;
