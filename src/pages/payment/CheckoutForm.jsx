import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = ({ totalPrice }) => {
    const [error, setError] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useAuth();

    useEffect(() => {
        axios.post("http://localhost:5000/create-payment-intent", { price: totalPrice })
            .then(res => {
                console.log(res.data?.clientSecret);
                setClientSecret(res.data?.clientSecret);
            });

    }, [totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError("");
        }

        // Finishing step: Confirm_Card_Payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || "anonymuse",
                        email: user?.email || "anonymuse",
                    },
                },
            },
        );

        if (confirmError) {
            console.log("Confirm Error");
        } else {
            console.log("paymentIntent", paymentIntent);
            if (paymentIntent.status === "succeeded") {
                setTransactionId(paymentIntent?.id);
            }

        }
    };



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn bg-warning mt-5 px-10" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red-600 mt-2">{error}</p>
                {
                    transactionId &&
                    <p className="text-green-600 mt-2">Your Transaction Id is: {transactionId}</p>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;