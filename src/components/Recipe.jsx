import PropTypes from 'prop-types';
import { LuClock3  } from "react-icons/lu";
import { BsFire } from "react-icons/bs";
const Recipe = ({recipe}) => {
    const {recipe_name, short_description, ingredients, preparing_time, calories, recipe_image}=recipe;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"} alt="recipe" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{recipe_name}</h2>
                  <p>{short_description}</p>
                  <div className='border-t-2 border-dotted '>
                    <h3 className='text-xl text-start font-medium'>Ingredients: {ingredients.length}</h3>
                    <ul>
                      <li>500g ground beef</li>
                      <li>1 onion, chopped</li>
                      <li>2 cloves garlic, minced</li>
                    </ul>
                  </div>
                  <div className=' gap-10 py-5 border-t-2 border-dotted flex justify-between items-center '>
                    <div className='flex justify-center items-center gap-2'>
                      <div className='flex justify-center items-center'><LuClock3 /></div>
                      <p>{preparing_time} <span>minutes</span></p>
                    </div>

                    <div className='flex justify-center items-center gap-2'>
                      <div className='flex justify-center items-center'><BsFire /></div>
                      <p>{calories} <span>calories</span></p>
                    </div>
                  </div>
                  <div className="card-actions ">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
        </div>
    );
};
Recipe.propTypes ={
    recipe: PropTypes.object
}
export default Recipe;