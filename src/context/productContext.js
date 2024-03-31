import  {createContext , useContext, useEffect, useReducer} from "react"
import axios from "axios"
import reducer from '../reducer/productReducer'

const AppContext= createContext();

const API = "https://api.pujakaitem.com/api/products";

console.log(API)

const initialState = {
    isLoading : false, 
    isError:false,
    products: [], 
    featureProducts :[],
    isSingleLoading:false, 
    singleProduct:{},
 }

const AppProvider = ({children}) => {
    const [state, dispatch]= useReducer(reducer, initialState)

    const getProducts = async (url)=>{

        dispatch({type:"SET_LOADING"})
        try {
            const res= await axios.get(url)
            const products = await res.data;
            console.log(products)
            dispatch({type:"SET_API_DATA", payload:products })
        } catch (error) {
            console.log(error)
            dispatch({type:"API_ERROR"})
            }     
        };
        const getAllProducts = async(url)=>{

            try{
                const response = await axios.get(url)
                const allProduct = await response.data;
                console.log(allProduct)
            }catch(error){


             }

         }

        const getSingleProduct = async(url)=>{

            dispatch({type:"SET_SINGLE_LOADING"})
            try{
                const res= await axios.get(url)
                const singleProduct = await res.data;
                // console.log("fn call for single product"+ singleProduct);
                dispatch({type:"SET_SINGLE_PRODUCT", payload:singleProduct});
            }catch(error){
                // console.log("Single Page Error" +  error);
                dispatch({type:"SET_SINGLE_ERROR"})
            }
         }
    useEffect(()=> {
        getProducts(API);
       
    }, []);

    return (
    <AppContext.Provider 
    value={{...state, getSingleProduct}}> 
        {children}
    </AppContext.Provider>
    )
}

const useProductContext = () => {
    return useContext(AppContext)
};

export { AppProvider,
         AppContext,
         useProductContext
    };











// import { createContext, useContext, useEffect, useReducer } from "react";
// import axios from "axios";
// import reducer from "../reducer/productReducer";

// const AppContext = createContext();

// const API = "https://api.pujakaitem.com/api/products";

// const initialState = {
//   isLoading: false,
//   isError: false,
//   products: [],
//   featureProducts: [],
//   isSingleLoading: false,
//   singleProduct: {},
// };

// const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const getProducts = async (url) => {
//     dispatch({ type: "SET_LOADING" });
//     try {
//       const res = await axios.get(url);
//       const products = await res.data;
//       dispatch({ type: "SET_API_DATA", payload: products });
//     } catch (error) {
//       dispatch({ type: "API_ERROR" });
//     }
//   };

//   // my 2nd api call for single product

//   const getSingleProduct = async (url) => {
//     dispatch({ type: "SET_SINGLE_LOADING" });
//     try {
//       const res = await axios.get(url);
//       const singleProduct = await res.data;
//       dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
//     } catch (error) {
//       dispatch({ type: "SET_SINGLE_ERROR" });
//     }
//   };

//   useEffect(() => {
//     getProducts(API);
//   }, []);

//   return (
//     <AppContext.Provider value={{ ...state, getSingleProduct }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// // custom hooks
// const useProductContext = () => {
//   return useContext(AppContext);
// };

// export { AppProvider, AppContext, useProductContext };





