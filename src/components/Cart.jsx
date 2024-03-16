
import PropTypes from 'prop-types';
const Cart = ({ item }) => {
    return (
        <div>
            < div className='flex justify-between p-2' >
                <p>{item.recipe_name}</p>
                <p>{item.preparing_time}</p>
                <p>{item.calories}</p>
            </div>
        </div>
    );
};

Cart.propTypes = {
    item: PropTypes.object,
    handleRecipeCart: PropTypes.func
}
export default Cart;