import './cartIcon.scss'
import {ReactComponent as Cart} from '../../assets/shopping-bag.svg'
import {connect} from 'react-redux'
import toggleCartHidden from '../../redux/cart/cart.actions'

const CartIcon = ({toggleCartHidden})=>{
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <Cart className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
        
    )
}
const mapDispatchToProp = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default connect(null, mapDispatchToProp)(CartIcon)