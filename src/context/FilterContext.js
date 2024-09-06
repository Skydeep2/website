import { createContext, useContext, useEffect, useReducer } from "react";
import { useProducts } from "./ProductContext";
import reducer from '../reducer/filterReducer'

const FilterContext=createContext();

const initialState={
    filter_products:[],
    all_products:[],
    grid_view:true,
};

const FilterContextProduct=({children})=>{

    const {products}=useProducts()
    console.log(products);
    
    const[state,dispatch]=useReducer(reducer,initialState)

    const setGridView=()=>{
        return dispatch({type:"SET_GRIDVIEW"})
    }

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})
    },[products])

    return(
        <FilterContext.Provider value={{...state,setGridView}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter=()=>{
    return useContext(FilterContext)
}

export {useFilter ,FilterContextProduct}