const filterReducer = (state, action)=> { 
        switch(action.type){ 

            case "LOAD_FILTER_PRODUCTS": 
                return{
                    ...state, 
                    filter_products:[...action.payload],
                    all_products:[...action.payload],
                };

            case "SET_GRID_VIEW":
                return{ 
                    ...state, 
                    grid_view:true,
                };

            case "SET_LIST_VIEW":
                return{ 
                    ...state, 
                    grid_view:false,
                };


            case "GET_SORT_VALUE":
                let userSortValue = document.getElementById("sort")
                let sort_value= userSortValue.options[userSortValue.selectedIndex].value;              
                console.log(sort_value)    
                return{ 
                        ...state, 
                        sorting_value:sort_value,
                    }
            case "SORTING_PRODUCTS" :
                let newSortData;

                const { filter_products, sorting_value } = state;
                let tempSortProduct = [...filter_products];
          
                const sortingProducts = (a, b) => {
                  if (sorting_value === "lowest") {
                    return a.price - b.price;
                  }
          
                  if (sorting_value === "highest") {
                    return b.price - a.price;
                  }
          
                  if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name);
                  }
          
                  if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name);
                  }
                };
          
                // newSortData = tempSortProduct.sort(sortingProducts);

                // let newSortData;
                // let tempSortData = [...action.payload];
                
                // if(state.sorting_value === "a-z"){ 
                //     newSortData = tempSortData.sort((a,b)=>{ 
                //         return a.name.localeCompare(b.name)})
                // }
                return {
                        ...state,
                        filter_products:newSortData,
                    }

            default:
                return state;
        }
}

export default filterReducer;