import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <div className='p-2 border border-lime-300 rounded-xl mt-4'>
                {
                    cart.map(item => <p className='mb-2'>
                        {item.name}
                        <button onClick={() => handleRemoveFromCart(item)} className='ml-4 bg-red-500 text-white rounded-xl px-2'>X</button>
                    </p>)
                }
            </div>
            <div className='p-2 mt-2'>
                {cart.length === 0 ? <div>
                    <h3>Please Add a Plant</h3>
                </div> : <div>
                    <h3 className='text-2xl'>Thanks For Adding</h3>
                </div>}
                {
                    cart.length > 1 && <div>
                        <p className='text-red-500'>You Can Add {6-cart.length > 0 ? 6-cart.length: <span>No</span>} more</p>
                    </div>
                }
                {
                    cart.length < 6 || <button className='bg-green-700 text-white p-2 rounded-xl'>Review Orders</button>
                }
            </div>
        </div>
    );
};

export default Cart;