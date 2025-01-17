import '../Products/Products.css';
import './Productdetail.css';

import { Link, useLocation } from 'react-router-dom';
import ProductCard from '../Products/ProductCard';
import P7 from '../../images/07.jpg';
import { fetchSingalProduct } from '../../store/ProductorFeture/ProductorAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Productdetail(){
    const dispatch = useDispatch();
    const { productSingal, loading } = useSelector((state) => state.product);
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
  
    const searchQuery = queryParams.get('id')

    
    useEffect(() => {

        dispatch(fetchSingalProduct(searchQuery)); 
      }, [dispatch]);

      if(loading) return(<h1>loading</h1>);
    return(
       
            <>
            <div className='pd-conainer productocDaital-wrapper df'>
                <div className='product-images df'>
                    <div className="Pd-main-img">
                        <img src={productSingal?.image} alt="product-img" />
                    </div>
                    {/* <div className="pd-other-imgs">
                        <div ><img src={P7} alt="product-img" /></div>
                        <div ><img src={P7} alt="product-img" /></div>
                    </div> */}
                    
                </div>
                <div className="product-Daital">
                    <h1>{productSingal?.title}</h1>
                    <p className='short-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt massa odio.</p>
                    <p className="full-desc">
                        {productSingal?.description}
                    </p>
                    <div className='product-status'>
                        <span className="prize">Rs {productSingal?.price}</span><span className='Avaliability'>Avaliability:-</span><span className='Avaliability-status'> In stock</span>
                    </div>
                    <div>
                        <label htmlFor="itemQ" className='Avaliability'> Quantity </label>
                            <input type="text" id='itemQ'/> <Link to='/cart'>Add To Cart</Link>
                      
                    </div>
                </div>
            </div>
            <div className='border-botton'><div></div></div>

            <h2 className='Popular'>Recommended Products</h2>
            <div className='pd-conainer product-list df'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className='border-botton'><div></div></div>
            </>
 
    )
}