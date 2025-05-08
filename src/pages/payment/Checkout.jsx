import { useParams } from "react-router-dom";

const Checkout = () => {
    const {pkgname} = useParams();
    console.log(pkgname)
    return (
        <div>
            checkout
        </div>
    );
};

export default Checkout;