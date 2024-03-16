import { useEffect, useState } from 'react'


import './App.css'
import Header from './components/Header'
import Recipe from './components/Recipe';
import { toast } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)
  const [recipes, setRecipes] = useState([]);
  const [menus, setMenus] = useState([])
  const [cooking, setCooking] = useState([])
  const [itemCount,setItemCount] = useState(0)

  useEffect(() => {
    fetch('./recipes.json')
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, [])


  const handleRecipeCart = (menu) => {
    const isExist = menus.find(item => item.recipe_id == menu.recipe_id);
    if (!isExist) {
      setMenus([...menus, menu]);
      setCount(count + 1);
    }
    else {
      toast('Already exist');
    }
  }

  const handleCook = (click) => {
    const newMenu = menus.filter(item => item.recipe_id != click.recipe_id)
    setMenus(newMenu);
    setCount(count -1);
    setItemCount(itemCount + 1);
    setCooking([...cooking, click]);
   

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
            <div className='lg:w-3/5 gap-7 grid grid-cols-1 lg:grid-cols-2'>
              {
                recipes.map(recipe => <Recipe key={recipe.recipe_id} handleRecipeCart={handleRecipeCart} recipe={recipe}></Recipe>)
              }

            </div>

            <div className=' w-full lg:w-2/5 min-h-40'>
              <h3 className='text-2xl font-medium'>Want to cook: {count}</h3>
              <div >
                <table className=' w-full'>
                  <thead className='flex lg:w-full  justify-between items-center  p-2'>
                    <th>Name</th>
                    <th>Time</th>
                    <th className=' mr-16'>Calories</th>
                    <th> </th>
                  </thead>

                  {
                    menus.map((item, index) => (
                      < div className='flex justify-between p-2' key={item.recipe_id} >
                        <tr className='flex lg:w-full space-x-2 lg:space-x-24 justify-start items-center  p-2'>
                          <td> <span className='pr-[4px]'>{index + 1}.</span>{item.recipe_name.slice(0, 8)}</td>
                          <td>{item.preparing_time}</td>
                          <td>{item.calories}</td>
                          <td><button onClick={() => handleCook(item)} className='btn bg-green-400   rounded-3xl'>Preparing</button></td>
                        </tr>
                      </div>
                    ))} 
                </table>
              </div>




              <div >
                <table className=' w-full'>
                  <h3 className='text-2xl font-medium'>Currently cooking: {itemCount}</h3>
                  <tr className='flex lg:w-full  justify-between items-center  p-2'>
                    <th>Name</th>
                    <th>Time</th>
                    <th className=' mr-16'>Calories</th>
                  </tr>

                  {
                    cooking.map((item, index) => (
                      < div className='flex justify-between p-2' key={item.recipe_id} >
                        <tr className='flex lg:w-full space-x-2 lg:space-x-24 justify-start items-center  p-2'>
                          <td> <span className='pr-[4px]'>{index + 1}.</span>{item.recipe_name.slice(0, 8)}</td>
                          <td>{item.preparing_time}</td>
                          <td>{item.calories}</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td>Total time:</td>
                          <td>Total calories:</td>
                        </tr>
                      </div>
                    ))}
                </table>
              </div>

            </div>
          </div>
        </div>
      </section >


    </>
  )
}

export default App
