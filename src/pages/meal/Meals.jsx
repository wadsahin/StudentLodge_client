import { useEffect, useState } from "react";
import MealCard from "../../components/MealCard";

const Meals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/meals")
            .then(res => res.json())
            .then(data => {
                setMeals(data);
            })
    }, []);

    return (
        <div className="mx-5 md:mx-20 grid grid-cols-3 gap-5 my-6">
            {
                meals.map(meal => <MealCard key={meal._id} meal={meal} />)
            }
        </div>
    );
};

export default Meals;