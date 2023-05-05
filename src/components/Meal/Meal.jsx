/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => {
    console.log(meal);
    const { idMeal, strMeal, strMealThumb, strArea } = meal;
    return (
        <div className='border border-slate-300 p-6 rounded-lg'>
            <img src={strMealThumb} alt="Meal image" />
            <h3 className='text-center text-3xl font-semibold'>{strMeal}</h3>
            <p className='text-center'>Area: {strArea}</p>
            <Link className='p-2 rounded bg-sky-400 text-white font-medium hover:bg-sky-500' to={`/meal/${idMeal}`}><button>See Details</button></Link>
        </div>
    );
};

export default Meal;