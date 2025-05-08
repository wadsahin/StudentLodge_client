import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import MealsCategories from "../components/MealsCategories";
import Membership from "../components/Membership";
import Feedback from "../components/additional/Feedback";
import Faq from "../components/additional/Faq";

const Home = () => {
    const loadedMeals = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <MealsCategories loadedMeals={loadedMeals} />
            <Membership />
            {/* <Feedback /> */}
            <Faq></Faq>
            
        </div>
    );
};

export default Home;