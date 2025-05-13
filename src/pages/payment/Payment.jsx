import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
    const [amount, setAmount] = useState(0);
    const { pkgname } = useParams();
    console.log(pkgname, amount);

    useEffect(() => {
        if (pkgname == "silver") {
            setAmount(3000);
        } else if (pkgname == "gold") {
            setAmount(4500)
        } else {
            setAmount(5000);
        };
    }, [pkgname]);

    // Stripe payment gateway intregation start
    // TODO_1: collect pk(pulishable key) from stripe account
    const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_PK);

    return (
        <div className="bg-base-200 min-h-screen flex items-center justify-center">
            <div className="bg-white w-[600px] p-5 -mt-32">
                <div className="mb-10 border">
                    <h3 className="bg-warning text-center p-2 text-xl font-semibold mb-2">Order Summary</h3>
                    <p className="flex justify-between my-2 px-2">
                        <span className="font-medium">Package</span>
                        <span className="font-semibold">{pkgname.toUpperCase()}</span>
                    </p>
                    <p className="flex justify-between my-2 px-2">
                        <span className="font-medium">Subtotal</span>
                        <span>{amount}TK</span>
                    </p>
                    <p className="flex justify-between my-2 px-2">
                        <span className="font-medium">Extra Fee</span>
                        <span>--</span>
                    </p>
                    <p className="flex justify-between my-2 px-2 font-bold">
                        <span>Total</span>
                        <span>{amount}TK</span>
                    </p>
                </div>
                {/* <div className="divider"></div> */}
                <div className="">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>

            </div>
        </div>
    );
};

export default Payment;