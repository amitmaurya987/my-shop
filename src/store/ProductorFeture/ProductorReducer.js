import { PRODUCTOR_FAILED, PRODUCTOR_FETCHING, PRODUCTOR_SINGAL_FAILED, PRODUCTOR_SINGAL_FETCHING, PRODUCTOR_SINGAL_SSUCCESS, PRODUCTOR_SSUCCESS } from "./constant";

const initialState = {
    products: [],
    productSingal: {},
    selectedProduct: null,
    loading: false,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case  PRODUCTOR_FETCHING:
        return {
          ...state,
          loading: true,
          products: action.payload,
        };
      case PRODUCTOR_SSUCCESS: 
        return {
          ...state,
          loading: false,
          products: action.payload,
        };
      case PRODUCTOR_FAILED:
        return {
          ...state,
          loading: false,
          products: [],
        };
      case PRODUCTOR_SINGAL_FETCHING:
        return {
          ...state,
          loading: true,
          productSingal: {},
        };
      case PRODUCTOR_SINGAL_SSUCCESS:
        return {
          ...state,
          loading: false,
          productSingal: action.payload,
        };
      case PRODUCTOR_SINGAL_FAILED:
        return {
          ...state,
          loading: false,
          productSingal: {},
        };
      
      default:
        return state;
    }
  };
  
  export default productReducer;
  