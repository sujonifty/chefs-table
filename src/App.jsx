import { useEffect, useState } from 'react'


import './App.css'
import Header from './components/Header'
import Recipe from './components/Recipe';

function App() {
  const [count, setCount] = useState(0)
  const [recipes, setRecipes]=useState([]);
  useEffect(()=>{
    fetch('./recipes.json')
    .then(res=>res.json())
    .then(data=>setRecipes(data));
  },[])

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
              {
                recipes.map(recipe=><Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
              }
              
             
              

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
