import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="text-2xl text-center font-semibold mb-5">Join us with Social</h2>
            <div className="">
                <button className="btn border shadow-none border-gray-300 text-lg w-full"><FcGoogle size={24} /><span>Login with Google</span></button>
            </div>
            <div className="divider mx-32">OR</div>
            <div className="mt-5">
                <button className="btn border shadow-none border-gray-300 text-lg w-full"><SiFacebook color="blue" size={24} /><span>Login via Facebook</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;