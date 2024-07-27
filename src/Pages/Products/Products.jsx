import './Products.css';
import ProductCard from './ProductCard';
import Pagination from '../../Componants/Pagination/Pagination';


export default function Products(){
    return(
   
         <>
            <h1>Product</h1>
                <div className='pd-conainer product-list df'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <div className='border-botton'><div></div></div>
                <div className='pd-conainer' >
                    <Pagination />
                </div>
         </>
    )
}