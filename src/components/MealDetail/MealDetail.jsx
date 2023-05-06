/* eslint-disable */
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ArrowTopRightOnSquareIcon, VideoCameraIcon } from '@heroicons/react/24/solid';

const MealDetail = () => {
    const meal = useLoaderData();
    // console.log(meal.meals[0]);
    const navigate = useNavigate();
    const handleBtnGoBack = () => {
        navigate(-1);
    }
    const { idMeal, strMeal, strMealThumb, strInstructions, strArea, strCategory, strSource, strYoutube } = meal.meals[0]
    return (
        <div className='mx-auto'>
            <img className='w-1/3 mx-auto rounded-md border-2 p-1' src={strMealThumb} alt="Meal image" />
            <div className='p-8'>
                <p><small>Meal ID: {idMeal}</small></p>
                <h3 className='text-2xl font-semibold'>{strMeal}</h3>
                <p><b>Instruction:</b> {strInstructions}</p>
                <p className='flex'>
                    <a className='flex mr-2' target='_blank' href={strYoutube}>
                        <VideoCameraIcon className="h-6 w-6 text-rose-500" />
                        <span className='text-rose-500 underline'>YouTube</span>
                    </a>
                    <a className='flex' target='_blank' href={strSource}>
                        <ArrowTopRightOnSquareIcon className="h-6 w-6 text-sky-500" />
                        <span className='text-sky-500 underline'>Source</span>
                    </a>
                </p>
                <p>#{strArea} #{strCategory}</p>
                <button className='p-2 rounded bg-yellow-500 text-white font-medium' onClick={handleBtnGoBack}>Go Back</button>
            </div>
        </div>
    );
};

export default MealDetail;