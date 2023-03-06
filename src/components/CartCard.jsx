import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeItem, addToCart } from '../features/cart/cartSlice';

function CartCard({ id, img, title, price, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className='flex flex-col justify-center bg-slate-100 hover:bg-slate-50'>
      <div className='flex flex-row justify-center p-2 rounded-md  '>
        <img
          className='w-[70px] h-[80px] rounded-md flex'
          src={img}
          alt={title}
        />
        <div className='mx-2'>
          <p>{title}</p>
          <div className='mx-2 font-semibold'>
            {price} {' $'}
            <p className='font-light text-sm '>Qty:{quantity} </p>
          </div>
        </div>
      </div>
      <div className='mx-2 flex p-2'>
        <button
          className='p-1 bg-red-500 cursor-pointer rounded-md text-bold text-white mx-2'
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          Remove{' '}
        </button>
        <button
          className='p-1 bg-blue-500 cursor-pointer rounded-md text-bold text-white'
          onClick={() => {
            addToCart({ id, title, price, img });
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

CartCard.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  proce: PropTypes.string,
  quantity: PropTypes.number,
};

export default CartCard;
