import React, { createContext,useContext, useReducer } from "react";

//This IS THE DATA LAYER - global kinda layer that can be passed around in a react app
export const StateContext = createContext();

//BUILD A PROVIDER - to wrap the entire app inside of it
export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children} {/*children is refering to the App atm coz its the child */}
    </StateContext.Provider>
);

//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);

export default StateProvider
