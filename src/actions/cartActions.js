import { ADD_TO_CART, POP_FROM_CART, REMOVE_FROM_CART } from './actionTypes';

export const pushToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: {
            product: product,
            type: 'push'
        }
    }
}

export const changeQuantityToCart = (product, quantity) => {
    return {
        type: ADD_TO_CART,
        payload: {
            product: product,
            quantity: quantity,
            type: 'quantity'
        }
    }
}

export const popFromCart = (product) => {
    return {
        type: POP_FROM_CART,
        payload: {
            product: product,
            type: 'quantity'
        }
    }
}

export const removeFromCart = (product) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            product: product
        }
    }
}