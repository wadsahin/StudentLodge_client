import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import MealsCategories from "../components/MealsCategories";
import Membership from "../components/Membership";
import Feedback from "../components/additional/Feedback";
import Faq from "../components/additional/Faq";
import AdminRoutes from "../routes/AdminRoutes";

const Home = () => {
    const loadedMeals = useLoaderData();
    return (
        <div className="bg-slate-100">
            <Banner></Banner>
            <MealsCategories loadedMeals={loadedMeals} />
            <Membership />
            {/* <Feedback /> */}
            <Faq></Faq>
            
        </div>
    );
};

export default Home;