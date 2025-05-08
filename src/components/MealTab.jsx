import MealCard from "./MealCard";

const MealTab = ({ category: meals }) => {
    return (
        <div className="grid grid-cols-3 gap-5 my-6">
            {
                meals.map(meal => <MealCard key={meal._id} meal={meal} />)
            }
        </div>
    );
};

export default MealTab;