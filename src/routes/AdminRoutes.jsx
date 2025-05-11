import Loading from "../components/spinner/Loading";
import { Navigate } from "react-router-dom";
import AdminProifile from "../pages/dashboard/admin_dashboard/AdminProifile";
import MyProfile from "../pages/dashboard/user_dashboard/MyProfile";
import useUser from "../hooks/useUser";

const AdminRoutes = () => {
    const [user] = useUser();
    console.log("from admin route", user);  
    // const user = "admin";

    if(!user?.role){
        return <Loading />
    }

    // const demo = "admin";

    if(user && user?.role === "admin"){
        return <AdminProifile />
    }else if(user && user?.role === "user"){
        return <MyProfile />;
    }


    return (
        <Navigate to="/auth/login"></Navigate>
    );
};

export default AdminRoutes;