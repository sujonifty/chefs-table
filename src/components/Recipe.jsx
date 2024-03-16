import PropTypes from 'prop-types';
import { LuClock3 } from "react-icons/lu";
import { BsFire } from "react-icons/bs";
const Recipe = ({ recipe, handleRecipeCart }) => {
    const { recipe_name, short_description, ingredients, preparing_time, calories, recipe_image } = recipe;
    return (
        <div>

            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 h-52">
                    <img src={recipe_image}alt="Recipe-img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <div className='border-t-2 border-dotted '>
                        <h3 className='text-xl text-start font-medium'>Ingredients: {ingredients.length}</h3>
                        <ul>
                            {
                                recipe.ingredients.map(item=><li>{item}</li>)
                            }
                        </ul>
                    </div>
                    <div className=' gap-10 py-5 border-t-2 border-dotted flex justify-between items-center '>
                        <div className='flex flex-col lg:flex-row justify-center items-center gap-2'>
                            <div className='flex justify-center items-center'><LuClock3 /></div>
                            <p>{preparing_time} <span>minutes</span></p>
                        </div>

                        <div className='flex flex-col lg:flex-row justify-center items-center gap-2'>
                            <div className='flex justify-center items-center'><BsFire /></div>
                            <p>{calories} <span>calories</span></p>
                        </div>
                    </div>
                    <div className="card-actions">
                    <button onClick={() => handleRecipeCart(recipe)} className="btn bg-green-400">Buy Now</button>
                    </div>
                </div>
            </div>


           
        </div>
    );
};
Recipe.propTypes = {
    recipe: PropTypes.object,
    handleRecipeCart: PropTypes.func
}
export default Recipe;