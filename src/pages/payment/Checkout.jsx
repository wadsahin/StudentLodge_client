import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
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
    }, [pkgname])

    return (
        <div className="w-8/12 mx-auto my-5 bg-orange-100 h-96">
            <h3 className="text-2xl font-semibold pt-5 border-b-2 border-warning rounded-xl w-fit mx-auto p-2 ">Your payable amount is: {amount}</h3>
        </div>
    );
};

export default Checkout;