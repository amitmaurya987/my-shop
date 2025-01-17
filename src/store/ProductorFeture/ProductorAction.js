import { getProduct, getSingaleProduct } from '../../utils/api';
import { PRODUCTOR_FETCHING, PRODUCTOR_SSUCCESS, PRODUCTOR_FAILED, PRODUCTOR_SINGAL_FETCHING, PRODUCTOR_SINGAL_SSUCCESS, PRODUCTOR_SINGAL_FAILED } from './constant';

export const fetchProducts = () => ({
  type: PRODUCTOR_FETCHING,
});


export const fetchProductsSuccess = (products) => ({
  type: PRODUCTOR_SSUCCESS,
  payload: products,
});


export const fetchProductsFailed = () => ({
  type: PRODUCTOR_FAILED,
});

export const fetchSingalProducts = () => ({
  type: PRODUCTOR_SINGAL_FETCHING,
});


export const fetchSingalProductsSuccess = (products) => ({
  type: PRODUCTOR_SINGAL_SSUCCESS,
  payload: products,
});


export const fetchSingalProductsFailed = () => ({
  type: PRODUCTOR_SINGAL_FAILED,
});


export const fetchProductList = () => {
    return async (dispatch) => {
      dispatch(fetchProducts());
             getProduct().then((resp) =>{
                 dispatch(fetchProductsSuccess(resp.data))
             }).catch((err) =>{
                 dispatch(fetchProductsFailed());
             })
    };
  };
export const fetchSingalProduct = (id) => {
    return async (dispatch) => {
      dispatch(fetchSingalProducts());
      getSingaleProduct(id).then((resp) =>{
                 dispatch(fetchSingalProductsSuccess(resp.data))
             }).catch((err) =>{
                 dispatch(fetchSingalProductsFailed());
             })
    };
  };