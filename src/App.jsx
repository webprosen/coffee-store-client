import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './components/CoffeeCard';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)
  
  return (
    <div className='max-w-7xl mx-auto px-8 pb-20'>
      <h2 className='text-center text-3xl font-bold mt-5 mb-5'>Our Coffees</h2>
      <div className='grid grid-cols-2 gap-14'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
