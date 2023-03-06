import React from 'react';
import { useSelector } from 'react-redux';
import { CartIcon } from '../utils/icons/icons';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const { itemsInCart } = useSelector((store) => store.cart);
  const navigate = useNavigate();
  return (
    <div className='bg-blue-400 w-[100%] p-2 flex justify-around align-middle'>
      <h1
        className='text-white font-bold font-serif text-[20px] cursor-pointer'
        onClick={() => navigate('/')}
      >
        Dukaan
      </h1>
      <div
        className='text-white relative mt-1 hover:cursor-pointer hover:text-red-400'
        onClick={() => navigate('/cart')}
      >
        <CartIcon />
        <span className='p-1 absolute -top-3 -right-5 text-center justify-center font-bold'>
          {itemsInCart}
        </span>
      </div>
    </div>
  );
}

export default Navbar;
