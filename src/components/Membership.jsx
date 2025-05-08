import { Link } from "react-router-dom";
import Gold from "./premium-packages/Gold";
import Platinum from "./premium-packages/Platinum";
import Silver from "./premium-packages/Silver";

const Membership = () => {
    return (
        <div className="md:mx-20 my-10">
            <h2 className="text-3xl font-semibold border-b-2 border-warning rounded-lg pb-3 w-fit mx-auto">Book Your Membership Now</h2>
            <div className="mx-5 mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <Link to="/checkout/silver">
                    <Silver />
                </Link>
                <Link to="/checkout/gold">
                    <Gold />
                </Link>

                <Link to="/checkout/platinum">
                    <Platinum />
                </Link>

            </div>
        </div>
    );
};

export default Membership;