import React from 'react';
import PropTypes from 'prop-types';
import { addToCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
function ItemCard({ id, title, price, img }) {
  const dispatch = useDispatch();
  return (
    <div className='bg-slate-100 p-2 rounded-md justify-center  hover:p-[0.4rem] cursor-pointer ease-in-out hover:bg-white'>
      <img
        className='w-[250px] h-[200px] object-contain ml-4'
        src={img}
        alt={title}
      />
      <div className='text-center mt-3'>
        <p>{title}</p>
        <p>{price}</p>
        <button
          className='bg-blue-400 text-white text-sm p-2 rounded-sm my-2 hover:bg-blue-500'
          onClick={() => {
            dispatch(addToCart({ id, title, price, img }));
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  img: PropTypes.string,
};

export default ItemCard;
