import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Signup = () => {
    return (
        <div className="bg-base-200 min-h-screen">
            <h2 className="text-3xl font-bold text-center pt-5 border-b-2 border-warning rounded-lg pb-3 w-fit mx-auto mb-5">Join Us Now</h2>
            <div className="hero-content flex-col items-start md:flex-row-reverse">
                <div className="text-center lg:text-left md:w-1/2 lg:1/3 mt-6">
                    <SocialLogin></SocialLogin>
                </div>
                <div className="card w-full max-w-2xl md:w-1/2 lg:1/3">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Signup</button>
                        </div>
                    </form>
                    <p className="text-center -mt-5">Already have an account? Please <Link to="/auth/login" className="text-orange-500 font-semibold">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;