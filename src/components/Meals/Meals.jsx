/* eslint-disable */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Meals = () => {
    const meals = useLoaderData();
    // console.log(meals.meals);
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-12'>
            {
                meals.meals.map(meal => <Meal
                    key={meal.idMeal}
                    meal={meal}
                ></Meal>)
            }
        </div>
    );
};

export default Meals;