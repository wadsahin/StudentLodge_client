import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
    const { loginWithEmailPassword } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.state?.from || "/";
    // console.log("login",location, from);
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        const email = data?.email;
        const password = data?.password;
        // console.log({ email, password })
        loginWithEmailPassword(email, password)
            .then(result => {
                if (result.user) {
                    Swal.fire({
                        title: "Login successfull!",
                        text: "Successfully logged In",
                        icon: "success"
                    });
                    navigate(path);
                }
            })
            .catch(err => {
                console.log(err.message);
            })

    }

    return (
        <div className="bg-base-200 min-h-screen">
            <h2 className="text-3xl font-bold text-center pt-5 border-b-2 border-warning rounded-lg pb-3 w-fit mx-auto mb-5">Please Login & Enjoy Healthy Meals</h2>
            <div className="hero-content flex-col items-start md:flex-row-reverse">
                <div className="text-center lg:text-left md:w-1/2 lg:1/3 mt-6">
                    <SocialLogin></SocialLogin>
                </div>
                <div className="card w-full max-w-2xl md:w-1/2 lg:1/3">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: "This is required!",
                                    minLength: {
                                        value: 4,
                                        message: "Min len is 4"
                                    }
                                })}
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>
                        <p className="text-error">{errors.email?.message}</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: "This is required!",
                                    minLength: {
                                        value: 6,
                                        message: "Min 6 characters"
                                    }
                                })}
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p className="text-error">{errors.password?.message}</p>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Login</button>
                        </div>
                    </form>
                    <p className="text-center -mt-5">Don't have any account? Please <Link to="/auth/signup" className="text-orange-500 font-semibold">Signup</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;