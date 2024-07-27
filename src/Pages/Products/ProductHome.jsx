

import './Products.css';
import ProductCard from './ProductCard';


export default function ProductHome(){
    return(
       
               <>
                  <h2>New Products</h2>
                <div className='pd-conainer product-list df'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <div className='border-botton'><div></div></div>

                <h2 className='Popular'>Popular Products</h2>
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