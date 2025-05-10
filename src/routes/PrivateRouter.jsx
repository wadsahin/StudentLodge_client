import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/spinner/Loading";
import useAuth from "../hooks/useAuth";

const PrivateRouter = ({children}) => {
    const {user, loading} = useAuth();
    const {pathname} = useLocation();
    // console.log(pathname)

    if(loading){
        return <Loading />
    }

    if(user){
        return children;
    }
    return (
        <Navigate to="/auth/login" state={{from: pathname}}></Navigate>
    );
};

export default PrivateRouter;