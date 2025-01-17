import './Products.css';
import ProductCard from './ProductCard';
import Pagination from '../../Componants/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { getProduct } from '../../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList, fetchProducts, fetchProductsFailed, fetchProductsSuccess } from '../../store/ProductorFeture/ProductorAction';


export default function Products(){

    const [data, setData] = useState([])

    const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.product);


    // useEffect(() =>{
    //     dispatch(fetchProducts());
    //     getProduct().then((resp) =>{
    //         dispatch(fetchProductsSuccess(resp.data))
    //     }).catch((err) =>{
    //         dispatch(fetchProductsFailed());
    //     })
    // },[]);

    useEffect(() => {
        dispatch(fetchProductList()); 
      }, [dispatch]);
    
    if(loading) return(<h1>loading</h1>);
    return(
   
         <>
            <h1>Product</h1>
                <div className='pd-conainer product-list df'>
                    {
                        products && products.map((val) =>{
                            return(<ProductCard item={val} />)
                        })
                    }
                    
                   
                </div>
                <div className='border-botton'><div></div></div>
                <div className='pd-conainer' >
                    {/* <Pagination /> */}
                </div>
         </>
    )
}