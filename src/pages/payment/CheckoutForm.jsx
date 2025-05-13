import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";

const CheckoutForm = () => {
    const [error, setError] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    // const [clientSecret, setClientSecret] = useState("");

    console.log("from checkout form");

    useEffect(() => {
        axios.post("/create-payment-intent", { price: 500 })
            .then(res => {
                console.log("from create-payment-intent", res.data?.clientSecret);
                // setClientSecret(res.data?.clientSecret);
            })

    }, []);

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
                <button className="btn bg-warning mt-5 px-10" type="submit" disabled={!stripe}>
                    Pay
                </button>
                <p className="text-red-600 mt-2">{error}</p>
            </form>
        </div>
    );
};

export default CheckoutForm;