import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const Signup = () => {
    const { createUser, profileUpdate, setLoading, } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        // console.log(data)
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const photo = data.photo;
        const role = "user";
        const badge = "bronze";
        // console.log(newUser);
        createUser(email, password)
            .then(result => {
                if (result?.user) {
                    const createdAt = result.user?.metadata.createdAt;
                    // console.log(createdAt)
                    // update profile now
                    profileUpdate({ displayName: name, photoURL: photo })
                        .then(async () => {
                            // Save user in database
                            const newUser = { name, email, password, photo, role, badge, createdAt };
                            const res = await axios.post("http://localhost:5000/users", newUser);
                            if (res.data?.insertedId) {
                                // setUser(result?.user);
                                setLoading(false);
                                Swal.fire({
                                    title: "Signup successfull!",
                                    text: "Successfully created an account",
                                    icon: "success"
                                });
                                navigate("/");
                            }

                        })
                        .catch(err => {
                            console.log("profile update error:", err.message);
                        })


                }
            })
            .catch(err => {
                console.log(err.message);
                setLoading(false);
                Swal.fire({
                    title: "Oops!",
                    text: `${err.message}`,
                    icon: "error"
                });
            })

    }
    return (
        <div className="bg-base-200 min-h-screen">
            <h2 className="text-3xl font-bold text-center pt-5 border-b-2 border-warning rounded-lg pb-3 w-fit mx-auto mb-5">Join Us Now</h2>
            <div className="hero-content flex-col items-start md:flex-row-reverse">
                <div className="text-center lg:text-left md:w-1/2 lg:1/3 mt-6">
                    <SocialLogin></SocialLogin>
                </div>
                <div className="card w-full max-w-2xl md:w-1/2 lg:1/3">
                    <form onSubmit={handleSubmit(onSubmit)} noValidate className="card-body">
                        <div className="form-control">
                            <input
                                {...register("name", {
                                    required: "Required!",
                                    minLength: {
                                        value: 6,
                                        message: "Name should at least 6 characters"
                                    }
                                })}
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered"
                            />
                        </div>
                        <p className="text-error">{errors.name?.message}</p>
                        <div className="form-control">
                            <input
                                {...register("email", {
                                    required: "Required!",
                                })}
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered"
                            />
                        </div>
                        <p className="text-error">{errors.email?.message}</p>
                        <div className="form-control">
                            <input
                                {...register("password", {
                                    required: "Required!",
                                    minLength: {
                                        value: 6,
                                        message: "Password should at least 6 characters"
                                    }
                                })}
                                type="password"
                                placeholder="Password"
                                className="input input-bordered"
                            />
                        </div>
                        <p className="text-error">{errors.password?.message}</p>
                        <div className="form-control">
                            <input
                                {...register("photo", {
                                    required: "Required!",
                                })}
                                type="text"
                                placeholder="Photo URL"
                                className="input input-bordered"
                            />
                        </div>
                        <p className="text-error">{errors.photo?.message}</p>
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