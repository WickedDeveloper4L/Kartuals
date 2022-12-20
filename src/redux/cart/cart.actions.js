import { cartActionTypes } from "./cart.types";

export const toggleCartHidden = ()=>({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
})
 
export const addItem = item =>({
    type: cartActionTypes.ADD_CART_ITEM,
    payload: item
})

export const removeCartItem = item =>({
    type: cartActionTypes.REMOVE_CART_ITEM,
    payload: item
})

export const clearItemFromCart = item =>({
    type: cartActionTypes.CLEAR_CART_ITEM,
    payload: item
})

export const clearCart =()=>({
    type: cartActionTypes.CLEAR_CART,
})
