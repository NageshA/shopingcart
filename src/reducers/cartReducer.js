import { ADD_TO_CART, POP_FROM_CART, REMOVE_FROM_CART } from './../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            //check if the item is already there in the cart   
            let exist = state.filter((st) => {
                return st.id === action.payload.product.id
            })
            if (exist.length > 0) {
                let tempState = state;
                let objIndex = tempState.findIndex((obj => obj.id === action.payload.product.id));
                if (action.payload.type === 'push') {
                    tempState[objIndex]['quantity']++;
                }
                else {
                    tempState[objIndex]['quantity'] = Number(action.payload.quantity);
                }
                state = tempState;
                return [
                    ...state
                ]
            }
            else {
                action.payload.product.quantity++;
                return [
                    ...state,
                    Object.assign({}, action.payload.product)
                ];
            }
        case POP_FROM_CART:
            let productExist = state.filter((st) => {
                return st.id === action.payload.product.id
            })
            if (productExist.length > 0) {
                let tempState = state;
                let objIndex = tempState.findIndex((obj => obj.id === action.payload.product.id));
                tempState[objIndex]['quantity']--;
                state = tempState;
                return [
                    ...state
                ]
            }
            else {
                return [
                    ...state
                ]
            }
        case REMOVE_FROM_CART:
            return state.filter((item) => item.id !== action.payload.product.id);

        default:
            return state;
    }
}