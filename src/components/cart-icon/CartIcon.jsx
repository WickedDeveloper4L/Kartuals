import './cartIcon.scss'
import {ReactComponent as Cart} from '../../assets/shopping-bag.svg'
import {useSelector, useDispatch} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

const CartIcon = ()=>{

    const itemCount = useSelector(selectCartItemsCount)

    const dispatch = useDispatch()

    return(
        <div className="cart-icon" onClick={()=> dispatch(toggleCartHidden())}>
            <Cart className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
        
    )
}


export default CartIcon