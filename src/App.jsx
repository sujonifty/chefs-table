import { useEffect, useState } from 'react'


import './App.css'
import Header from './components/Header'
import Recipe from './components/Recipe';

function App() {
  const [count, setCount] = useState(0)
  const [recipes, setRecipes] = useState([]);
  const [menus, setMenus] = useState([])

  useEffect(() => {
    fetch('./recipes.json')
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, [])

  const handleRecipeCart = (menu) => {
    const isExist = menus.find(item=>console.log(item.recipe_id));
    if(!isExist){
      setMenus([...menus,menu]);
    }
    else{
      alert('already exist');
    }
    
  }
  return (
    <>
      <Header></Header>
      <section>
        <div>
          <div >
            <h1 className='text-3xl'>Our Recipes</h1>
            <p className='w-2/3 mx-auto text-balance'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo in, atque laboriosam fugiat laudantium tenetur quo a quas error earum. Corporis, voluptates. Tempora, eius alias illo commodi consequuntur enim id.</p>
          </div>

          <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
            <div className='bg-red-200  lg:w-3/5 gap-7 grid grid-cols-1 lg:grid-cols-2'>
              {
                recipes.map(recipe => <Recipe key={recipe.recipe_id} handleRecipeCart={handleRecipeCart} recipe={recipe}></Recipe>)
              }

            </div>

            <div className='bg-blue-200 w-2/5 min-h-40'>
              <h3>Want to cook: 0</h3>
              <div className='flex justify-between p-2'>
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
              </div>
              <div>
             
                {
                  menus.map(item => (
                    < div className='flex justify-between p-2'key={item.recipe_id} >
                      <p>{item.recipe_name.slice(0,10)}</p>
                      <p>{item.preparing_time}</p>
                      <p>{item.calories}</p>
                  </div>
                  ))
                }

              </div>
            </div>
          </div>
        </div>
      </section >
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>

    </>
  )
}

export default App
