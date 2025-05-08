import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const user = null;

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
                <a className="btn btn-ghost text-2xl font-bold">STUDENT <span className="text-orange-400">LODGE</span></a>
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
                        <span className="badge badge-xs badge-primary indicator-item"></span>
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
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-violet-600 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Username
                                    </a>
                                </li>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li><a>Logout</a></li>
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