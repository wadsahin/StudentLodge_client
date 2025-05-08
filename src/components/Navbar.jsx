import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Swal from "sweetalert2";

const Navbar = () => {

    const { user, Logout } = useAuth();

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to leave.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout"
        }).then((result) => {
            if (result.isConfirmed) {
                Logout()
                    .then(() => {
                        Swal.fire({
                            title: "Logout!",
                            text: "Logout successfully",
                            icon: "success"
                        });
                    })
                    .catch(err => {
                        console.log(err.code);
                    })
            }
        });
    }

    const navLinks = <div className="flex flex-col lg:flex-row gap-4 font-semibold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/meals">Meals</NavLink>
        <NavLink to="/upcoming-meals">Upcoming Meals</NavLink>
    </div>
    return (
        <div className="navbar bg-white text-black py-5 fixed top-0 z-30 border-b border-black h-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-violet-600 text-lg rounded-lg z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold">STUDENT <span className="text-warning">LODGE</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {/* Notification */}
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="badge badge-xs badge-warning indicator-item"></span>
                    </div>
                </button>

                {
                    user ? <>
                        {/* profile picture */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user?.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content rounded-lg z-[1] mt-4 w-64 p-2 bg-white text-lg font-medium space-y-1">
                                <li>
                                    <a>
                                        <FaRegUser size={20} />
                                        {user?.displayName}
                                    </a>
                                </li>
                                <li><Link to="/dashboard"><MdOutlineSpaceDashboard size={20} /> Dashboard</Link></li>
                                <li><a onClick={handleLogout} className="btn btn-error btn-sm text-white">Logout</a></li>
                            </ul>
                        </div>
                    </> : <>
                        <Link to="/auth/signup" className="btn btn-sm btn-warning">Join Us</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;