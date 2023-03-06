import React from 'react';
import CartCard from './CartCard';
import { clearCart } from '../features/cart/cartSlice';
import { useSelector } from 'react-redux';
function Cart() {
  const { items, itemsInCart } = useSelector((store) => store.cart);
  return (
    <div className='w-screen min-h-screen justify-center text-center'>
      {items.map((item) => (
        <div className='p-2 flex flex-col m-1' key={item.id}>
          <CartCard
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        </div>
      ))}
      {itemsInCart ? (
        <button
          className='font-mono text-lg bg-red-500 hover:bg-red-600 rounded-md align-middle p-1 text-white font-bold text-md cursor-pointer'
          onClick={() => {
            clearCart();
          }}
        >
          Clear Cart
        </button>
      ) : (
        <p className='p-10 justify-center text-center font-mono text-lg font-bold '>
          Cart is empty!
        </p>
      )}
    </div>
  );
}

export default Cart;
