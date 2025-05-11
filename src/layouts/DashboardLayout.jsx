import { Link, NavLink, Outlet } from "react-router-dom";
import { MdDashboard, MdOutlineRamenDining, MdOutlineRateReview } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaMoneyCheckDollar, FaUsersGear } from "react-icons/fa6";
import { GiMeal } from "react-icons/gi";
import { IoIosRestaurant } from "react-icons/io";
import DashboardNavbar from "../components/DashboardNavbar";
import { IoHomeOutline } from "react-icons/io5";
// import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";

const DashboardLayout = () => {
    const [user] = useUser();
    // const profileAvatar = "https://img.icons8.com/?size=100&id=SZm6AjmdRxl4&format=png&color=000000";    
    // console.log("DashboardLayout", user?.role);

    return (
        <div>
            <div className='flex min-h-screen'>
                <div className="w-[300px] border-r-2 ">
                    <div>
                        <div className="py-[17px] pl-5 border-b">
                            <a className="text-2xl font-bold">STUDENT <span className="text-warning">LODGE</span></a>
                        </div>
                    </div>
                    <div className="my-2 pl-3">
                        <ul>
                            {
                                user?.role === 'admin' && <>
                                    <h4 className="text-xl font-bold mb-3">User</h4>
                                    <li><NavLink to="/dashboard" className="font-medium flex items-center gap-2 mb-4"> <CgProfile size={22} /><span className="text-gray-700">Admin Profile</span></NavLink></li>
                                    <li><NavLink to="/dashboard/manage-users" className="font-medium flex items-center gap-2 mb-4"> <FaUsersGear size={22} /><span className="text-gray-700">Manage Users</span></NavLink></li>
                                    <h4 className="text-xl font-bold mb-3">Meals</h4>
                                    <li><NavLink to="/dashboard/all-meals" className="font-medium flex items-center gap-2 mb-4"> <GiMeal size={22} /><span className="text-gray-700">All Meals</span></NavLink></li>
                                    <li><NavLink to="/dashboard/serve-meals" className="font-medium flex items-center gap-2 mb-4"> <MdOutlineRamenDining size={22} /><span className="text-gray-700">Serve Meals</span></NavLink></li>
                                    <li><NavLink to="/dashboard/upcoming-meals" className="font-medium flex items-center gap-2 mb-4"> <IoIosRestaurant size={22} /><span className="text-gray-700">Upcoming Meals</span></NavLink></li>
                                    <h4 className="text-xl font-bold mb-3">Reviews</h4>
                                    <li><NavLink to="/dashboard/all-reviews" className="font-medium flex items-center gap-2 mb-4"> <MdOutlineRateReview size={22} /><span className="text-gray-700">All Reviews</span></NavLink></li>

                                </>
                            }
                            {
                                user?.role === "user" && <>
                                    <h4 className="text-xl font-bold mb-3">Profile</h4>
                                    <li><NavLink to="/dashboard" className="font-medium flex items-center gap-2 mb-4"> <CgProfile size={22} /><span className="text-gray-700">My Profile</span></NavLink></li>
                                    <h4 className="text-xl font-bold mb-3">Reviews</h4>
                                    <li><NavLink to="/dashboard/my-reviews" className="font-medium flex items-center gap-2 mb-4"> <MdOutlineRateReview size={22} /><span className="text-gray-700">My Reviews</span></NavLink></li>
                                    <h4 className="text-xl font-bold mb-3">Meals</h4>
                                    <li><NavLink to="/dashboard/requested-meals" className="font-medium flex items-center gap-2 mb-4"> <GiMeal size={22} /><span className="text-gray-700">Requested Meals</span></NavLink></li>
                                    <h4 className="text-xl font-bold mb-3">Payment</h4>
                                    <li><NavLink to="/dashboard/payment-history" className="font-medium flex items-center gap-2 mb-4"> <FaMoneyCheckDollar size={22} /><span className="text-gray-700">Payment History</span></NavLink></li>
                                </>
                            }
                            {/* Go to home */}
                            <li className="flex items-center gap-1 text-lg font-semibold">
                                <IoHomeOutline />
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex-grow">
                    <DashboardNavbar />
                    <div className="p-3 bg-gray-100 min-h-screen">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default DashboardLayout;