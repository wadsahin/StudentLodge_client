// import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import MealCard from "./MealCard";
import MealTab from "./MealTab";

const MealsCategories = ({ loadedMeals: meals }) => {
    const all_meals = meals;
    const breakfast = meals?.filter(meal => meal.category === "breakfast");
    const lunch = meals?.filter(meal => meal.category === "lunch");
    const dinner = meals?.filter(meal => meal.category === "dinner");

    return (
        <div className="md:mx-20 my-10">
            <Tabs className="text-center">
                <TabList>
                    <Tab><span className="font-semibold">All Meals</span></Tab>
                    <Tab><span className="font-semibold">Breakfast</span></Tab>
                    <Tab><span className="font-semibold">Lunch</span></Tab>
                    <Tab><span className="font-semibold">Dinner</span></Tab>
                </TabList>

                <TabPanel>
                    <MealTab category={all_meals} />
                </TabPanel>
                <TabPanel>
                    <MealTab category={breakfast} />
                </TabPanel>
                <TabPanel>
                    <MealTab category={lunch} />
                </TabPanel>
                <TabPanel>
                    <MealTab category={dinner} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default MealsCategories;