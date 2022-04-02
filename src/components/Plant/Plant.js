import React from 'react';

const Plant = ({plant, handleAddToCart}) => {
    const {name, picture, price} = plant;
    return (
        <div className='border border-green-400 rounded-xl p-2'>
            <img className='w-full rounded-t-xl mb-2' src={picture} alt="" />
            <p>{name}</p>
            <p>Price: TK {price}</p>
            <button onClick={()=>handleAddToCart(plant)} className='w-full bg-green-700 text-white p-2 rounded-xl mt-4'>Add to cart</button>
        </div>
    );
};

export default Plant;