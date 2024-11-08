import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {

    const location=useLocation();


    const{user}=useContext(AuthContext);

    if(user){
        return children;
    }

    return <Navigate state={ location.pathname } to="/login"/>;
};

export default PrivateRoute;

PrivateRoute.propTypes={
    children:PropTypes.element
}