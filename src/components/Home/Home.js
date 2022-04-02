import React, { useState } from 'react';
import usePlants from '../../hooks/usePlants';
import Cart from '../Cart/Cart';
import Plant from '../Plant/Plant';

const Home = () => {
    const [plants, setPlants] = usePlants();
    const [cart, setCart] = useState([]);
    const handleAddToCart = selectedItem =>{
        const exist = cart.find(item => item.id === selectedItem.id);
        if(!exist){
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else{
            alert("You can't Select more than 1 from a Plant")
        }
    };
    const handleRemoveFromCart = selectedItem =>{
        const rest = cart.filter(item => item.id !== selectedItem.id);
        setCart(rest);
    }
    return (
        <div className='grid grid-cols-4'>
            <div className='grid grid-cols-3 gap-6 p-4 col-span-3'>
                {
                    plants.map(plant => <Plant 
                        key={plant.id}
                        plant={plant}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
            <div className='col-span-1'>
                <Cart
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>

        </div>
    );
};

export default Home;