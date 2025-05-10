import { Link, NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";
import { MdDashboard, MdOutlineRamenDining, MdOutlineRateReview } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaMoneyCheckDollar, FaUsersGear } from "react-icons/fa6";
import { GiMeal } from "react-icons/gi";
import { IoIosRestaurant } from "react-icons/io";

const DashboardLayout = () => {
    const { user } = useAuth();
    const profileAvatar = "https://img.icons8.com/?size=100&id=SZm6AjmdRxl4&format=png&color=000000";
    const userRole = "user";


    return (
        <div>
            <Navbar></Navbar>
            <div className='flex min-h-screen pt-20'>
                <div className="w-[300px] px-3 border bg-orange-100">
                    <div>
                        <h2 className="text-3xl font-semibold py-2 border-b-2 border-black rounded-lg mb-3 flex items-center justify-center gap-2">
                            <MdDashboard size={26} />
                            <span>
                                {
                                    userRole === 'admin' ? "Admin Panel" : "User Panel"
                                }
                            </span>
                        </h2>
                        <div className="my-3 flex items-center gap-3">
                            <span>
                                <img className="w-14 h-14 rounded-full" src={user?.photoURL ? user?.photoURL : profileAvatar} alt="" />
                            </span>
                            <span>
                                <p className="text-xl font-semibold">{user?.displayName}</p>
                                <span className="badge badge-outline">{userRole}</span>
                            </span>
                        </div>
                    </div>
                    <hr className="border border-black" />
                    <div className="my-2">
                        <ul>
                            {
                                userRole === 'admin' && <>
                                    <h4 className="text-xl font-bold mb-3">User</h4>
                                    <li><NavLink to="/dashboard/admin-profile" className="font-medium flex items-center gap-2 mb-4"> <CgProfile size={22} /><span className="text-gray-700">Admin Profile</span></NavLink></li>
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
                                userRole === "user" && <>
                                    <h4 className="text-xl font-bold mb-3">Profile</h4>
                                    <li><NavLink to="/dashboard/my-profile" className="font-medium flex items-center gap-2 mb-4"> <CgProfile size={22} /><span className="text-gray-700">My Profile</span></NavLink></li>
                                    <h4 className="text-xl font-bold mb-3">Reviews</h4>
                                    <li><NavLink to="/dashboard/my-reviews" className="font-medium flex items-center gap-2 mb-4"> <MdOutlineRateReview size={22} /><span className="text-gray-700">My Reviews</span></NavLink></li>
                                    <h4 className="text-xl font-bold mb-3">Meals</h4>
                                    <li><NavLink to="/dashboard/requested-meals" className="font-medium flex items-center gap-2 mb-4"> <GiMeal size={22} /><span className="text-gray-700">Requested Meals</span></NavLink></li>
                                    <h4 className="text-xl font-bold mb-3">Payment</h4>
                                    <li><NavLink to="/dashboard/payment-history" className="font-medium flex items-center gap-2 mb-4"> <FaMoneyCheckDollar size={22} /><span className="text-gray-700">Payment History</span></NavLink></li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
                <div className="flex-grow p-5">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;