import { useLoaderData } from "react-router-dom";
import DashboardHeading from "../../../components/dashboardHeading";
import useAuth from "../../../hooks/useAuth";

const AdminProifile = () => {
    const { user } = useAuth();
    const meals = useLoaderData();
    
    return (
        <div>
            <DashboardHeading title="Admin Profile" />

            <div className="flex gap-5">
                <div className="card card-compact w-2/3 mx-auto shadow bg-orange-100 p-5">
                    <figure className="relative w-44 mx-auto">
                        <img
                            src={user?.photoURL}
                            className="rounded-full"
                            alt="Shoes" />
                        <span className="badge badge-warning absolute bottom-0 right-5 font-medium">{`Admin`}</span>
                    </figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-semibold text-center">{user?.displayName}</h2>
                        <p className="text-center font-semibold text-lg">{user?.email}</p>

                    </div>
                </div>
                {/* all meals */}
                <div className="bg-gradient-to-tl from-red-300 to-red-100 w-1/3 rounded-box flex flex-col items-center justify-center gap-2">
                    <h3 className="text-4xl font-bold">
                        Total Meals
                    </h3>
                    <h4 className="text-4xl font-bold">
                        {meals && meals?.length}
                    </h4>
                </div>
            </div>

        </div>
    );
};

export default AdminProifile;