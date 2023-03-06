import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import cartItems from '../utils/cartItems';

function Items() {
  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    setAllItems(cartItems);
  }, []);
  const items = allItems.map((item) => (
    <ItemCard
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      img={item.img}
    />
  ));
  return (
    <div className='flex flex-col max-w-screen min-h-[90%] p-5'>
      <h1>Items</h1>
      <div className='grid grid-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2'>
        {items}
      </div>
    </div>
  );
}

export default Items;
