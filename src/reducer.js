
export const initialState = {
    basket: [
        {
            id: "12377341",
            title: "Samsung 24 inch (60.4 cm) IPS, Bezel Less,75 Hz Flat, Flicker Free LED Monitor-LF24T350FHWXXL (Dark Blue Gray)",
            price: 9399.00,
            rating: 5,
            image: "https://m.media-amazon.com/images/I/61pI7loWpZS._AC_UY218_.jpg"
        },
        ],
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