const initialState = {
    state: 0,
    basket: [],
    user : null
  };
  
  const addProduct = (state = initialState, action) => {
    console.log('inside add product', action,state);
    switch (action.type) {
      case 'ADD':
        return {
          ...state,
          state: state.state + 1,
          basket: [...state.basket, action.basketProduct],
        };
      case 'REMOVE' :   
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.basketProduct.id);
      console.log(index);
      let newBasket = [...state.basket];
      if(index >= 0){
        newBasket.splice(index, 1);
      }
      return{
        ...state,
        state: state.state - 1,
        basket: newBasket,
      };
      case 'ADDUSER' : 
      return { 
        user : action,
      }
      default:
        return {
          ...state,
          state : state.state,

        }


    }
  };

  export default addProduct;
  