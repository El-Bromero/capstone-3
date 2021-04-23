export const initialState = {
    cart: []
};

export const getCartTotal = (cart) => 
    cart?.reduce((amount, item) => item.price + amount, 0);


function reducer(state, action) {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_CART':
            // Logic for adding item to cart
            return {
                ...state,
                cart: [...state.cart, action.item],
             }
        case 'REMOVE_FROM_CART':
            // Logic for removing item from cart
            let newCart = [...state.cart];
            
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);

            if(index >= 0) {
                // Item exists in cart so remove it
                newCart.splice(index, 1);
            }
            else {
                console.warn(
                    `Cannot remove product (id: ${action.id} as it is not in cart`
                )
            }

            return { 
                ...state, 
                cart: newCart
             };
        default:
            return state;
    }
}

export default reducer;