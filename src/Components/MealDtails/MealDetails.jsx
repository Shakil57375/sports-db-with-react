import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleMeal from '../SingleMeal/SingleMeal'
const MealDetails = () => {
    const details = useLoaderData()
    // console.log(details.meals);
    return (
        <div>
            {
                details.meals.map(mealDetail => <SingleMeal mealDetail = {mealDetail} key = {mealDetail.idMeal} ></SingleMeal> )
            }
        </div>
    );
};

export default MealDetails;