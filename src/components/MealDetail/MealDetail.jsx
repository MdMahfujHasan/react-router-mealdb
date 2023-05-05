/* eslint-disable */
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const MealDetail = () => {
    const meal = useLoaderData();
    // console.log(meal.meals[0]);
    const navigate = useNavigate();
    const handleBtnGoBack = () => {
        navigate(-1);
    }
    const { idMeal, strMeal, strMealThumb, strInstructions, strArea, strCategory, strSource, strYoutube } = meal.meals[0]
    return (
        <div>
            <p><small>Meal ID: {idMeal}</small></p>
            <img src={strMealThumb} alt="Meal image" />
            <h3>{strMeal}</h3>
            <p>Instruction: {strInstructions}</p>
            <p>
                <a target='_blank' href={strYoutube}>YouTube</a>
                <a target='_blank' href={strSource}>Source</a>
            </p>
            <p>#{strArea} #{strCategory}</p>
            <button className='p-2 rounded bg-yellow-500 text-white font-medium' onClick={handleBtnGoBack}>Go Back</button>
        </div>
    );
};

export default MealDetail;