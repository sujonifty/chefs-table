import { useState } from 'react'
import { LuClock3  } from "react-icons/lu";
import { BsFire } from "react-icons/bs";

import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <section>
        <div>
          <div >
            <h1 className='text-3xl'>Our Recipes</h1>
            <p className='w-2/3 mx-auto text-balance'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo in, atque laboriosam fugiat laudantium tenetur quo a quas error earum. Corporis, voluptates. Tempora, eius alias illo commodi consequuntur enim id.</p>
          </div>
          <div className='flex justify-between items-start gap-10'>
            <div className='bg-red-200 w-3/5 gap-7 grid grid-cols-2'>
              {/* Recipes cards */}
              <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className='border-t-2 border-dotted '>
                    <h3 className='text-xl text-start font-medium'>Ingredients: 6</h3>
                    <ul>
                      <li>500g ground beef</li>
                      <li>1 onion, chopped</li>
                      <li>2 cloves garlic, minced</li>
                    </ul>
                  </div>
                  <div className=' gap-10 py-5 border-t-2 border-dotted flex justify-between items-center '>
                    <div className='flex justify-center items-center gap-2'>
                      <div className='flex justify-center items-center'><LuClock3 /></div>
                      <p>30 <span>minutes</span></p>
                    </div>

                    <div className='flex justify-center items-center gap-2'>
                      <div className='flex justify-center items-center'><BsFire /></div>
                      <p>30 <span>minutes</span></p>
                    </div>
                  </div>
                  <div className="card-actions ">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

            </div>

            <div className='bg-blue-200 w-2/5 min-h-40'>
              <h3>Want to cook: 0</h3>
            </div>
          </div>
        </div>
      </section>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>

    </>
  )
}

export default App
