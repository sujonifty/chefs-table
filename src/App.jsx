import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Recipe from './components/Recipe';
import { toast } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)
  const [recipes, setRecipes] = useState([]);
  const [menus, setMenus] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [itemCount,setItemCount] = useState(0);
  const [time,setTime] = useState(0);
  const [calory,setCalory] = useState(0);

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
    setTime(time+parseInt(click.preparing_time));
    setCalory(calory+parseInt(click.calories));
   
  }

  return (
    <>
      <Header></Header>
      <section className='mt-20 w-full lg:w-11/12 mx-auto lexend'>
        <div>
          <div className='mb-16 space-y-5'>
            <h1 className='text-3xl'>Our Recipes</h1>
            <p className='w-full lg:w-2/3 mx-auto text-justify fira-sans'>
            Explore a variety of delicious dishes that are easy to make and bursting with flavor. Whether you're cooking for yourself or sharing a meal with loved ones, our recipes will inspire you to get creative in the kitchen.With straightforward instructions and common ingredients, you'll find our recipes perfect for cooks of all skill levels. So, roll up your sleeves and let's get cooking!
            </p>
          </div>

          <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
            <div className='lg:w-3/5 gap-7 grid grid-cols-1 lg:grid-cols-2'>
              {
                recipes.map(recipe => <Recipe key={recipe.recipe_id} handleRecipeCart={handleRecipeCart} recipe={recipe}></Recipe>)
              }

            </div>

            <div className='card shadow-xl w-full lg:w-2/5 min-h-60 border-2'>
              <h3 className='text-2xl font-medium'>Want to cook: {count}</h3>
              <div >
                <table className=' w-full'>
                  <thead className='flex lg:w-full fira-sans justify-between items-center  p-2'>
                    <th>Name</th>
                    <th className=' ml-10'>Time</th>
                    <th className=' mr-4'>Calories</th>
                    <th> </th>
                    <th> </th>
                  </thead>

                  {
                    menus.map((item, index) => (
                      < div className='flex justify-between p-2 ' key={item.recipe_id} >
                        <tr className='bg-gray-200 fira-sans flex lg:w-full space-x-2 lg:space-x-16 justify-start items-center  p-2'>
                          <td> <span className='pr-[4px]'>{index + 1}.</span>{item.recipe_name.slice(0, 11)}...</td>
                          <td className=' ml-10'>{item.preparing_time}</td>
                          <td>{item.calories}</td>
                          <td><button onClick={() => handleCook(item)} className='btn bg-green-400  rounded-8 lg:rounded-3xl'>Preparing</button></td>
                        </tr>
                      </div>
                    ))} 
                </table>
              </div>

              <div >
                <table className=' w-full border-t-2'>
                  <h3 className='text-2xl font-medium'>Currently cooking: {itemCount}</h3>
                  <tr className='flex lg:w-full text-end fira-sans justify-between items-center  p-2'>
                    <th>Name</th>
                    <th className='lg:ml-24'>Time</th>
                    <th className='lg:mr-20'>Calories</th>
                  </tr>

                  {
                    cooking.map((item, index) => (
                      < div className='flex justify-between p-2' key={item.recipe_id} >
                        <tr className='border-2 fira-sans bg-gray-200 flex text-end w-full space-x-2 lg:space-x-24 justify-start items-center  p-2'>
                          <td> <span className='lg:pr-[4px]'>{index + 1}.</span>{item.recipe_name.slice(0,17)}...</td>
                          <td>{item.preparing_time}</td>
                          <td>{item.calories}</td>
                        </tr>
                       
                      </div>
                    ))}
                    <div className='lg:my-5 border-t-2 lg:mr-16 flex justify-center lg:justify-end item-center lg:gap-5 '>
                    <div>
                    <p>Total time={time}</p>
                    <p>minutes</p>
                    </div>
                    <div>
                    <p>Total calories={calory}</p>
                    <p>calories</p>
                    </div>
                    </div>
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
