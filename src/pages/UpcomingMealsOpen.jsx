import DashboardHeading from "../components/dashboardHeading";
import UpcomingMealCard from "../components/UpcomingMealCard";
import useUpcomingMeals from "../hooks/useUpcomingMeals";

const UpcomingMealsOpen = () => {
    const [data, refetch] = useUpcomingMeals();
    return (
        <div className="mx-5 sm:mx-10 md:mx-20">
            <DashboardHeading title="Upcoming Meals" />
            <div className="grid grid-cols-3 gap-5 my-6">
                { data &&
                    data.map(meal => <UpcomingMealCard key={meal._id} meal={meal} refetch={refetch} />)
                }
            </div>
        </div>
    );
};

export default UpcomingMealsOpen;