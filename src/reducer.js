
export const initialState = {
    basket: [],
    user: null,
};

function reducer(state, action) {
    console.log(action);
    switch (action.type) { 
        case 'ADD TO BASKET':
            //logic
            return { 
            ...state,
            basket: [...state.basket, action.item]
         };
        case 'REMOVE_FROM_BASKET':
        //logic
        return{...state };
        default:
            return state;
    }
}
export default reducer;