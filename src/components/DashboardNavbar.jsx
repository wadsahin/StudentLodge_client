import { MdDashboard, MdLogout, MdOutlineDarkMode } from "react-icons/md";
import useAuth from "../hooks/useAuth";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoHomeOutline, IoMailUnreadOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
    const { user, Logout } = useAuth();
    const userRole = "admin";
    return (
        <div className="navbar bg-base-100 border-b justify-between">
            <div className=" gap-1">
                <MdDashboard size={26} />
                <span className="text-3xl font-bold">
                    {
                        userRole === 'admin' ? "Admin Panel" : "User Panel"
                    }
                </span>
            </div>
            <div className="form-control w-1/3">
                <input type="text" placeholder="Search" className="input input-bordered w-full rounded-full h-10" />
            </div>
            <div className="gap-2">
                    <MdOutlineDarkMode size={26} />
                    <IoMailUnreadOutline size={26} />
                    <IoMdNotificationsOutline size={26} />
                    {/* <HiOutlineBars3 size={30} /> */}
                    <Link to="/"><IoHomeOutline size={22} /></Link>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user && user?.photoURL}
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to="/dashboard" className="justify-between">
                                Profile
                                {/* <span className="badge">New</span> */}
                            </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a className="text-base font-semibold" style={{color: "red"}} onClick={() => Logout()}><MdLogout size={18} />Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;