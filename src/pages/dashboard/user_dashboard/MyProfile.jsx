import DashboardHeading from "../../../components/dashboardHeading";
import useAuth from "../../../hooks/useAuth";

const MyProfile = () => {
    const { user } = useAuth();
    return (
        <div className="w-full">
            <DashboardHeading title="My Profile" />
            <div className="card card-compact w-2/3 mx-auto shadow bg-orange-100 p-5">
                <figure className="relative w-44 mx-auto">
                    <img
                        src={user?.photoURL}
                        className="rounded-full"
                        alt="Shoes" />
                        <span className="badge badge-warning absolute bottom-0 right-5 font-medium">{`Bronze`}</span>
                </figure>
                <div className="card-body">
                    <h2 className="text-3xl font-semibold text-center">{user?.displayName}</h2>
                    <p className="text-center font-semibold text-lg">{user?.email}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default MyProfile;