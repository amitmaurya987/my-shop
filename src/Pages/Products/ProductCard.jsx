
import './Products.css';
import { Link } from 'react-router-dom';

export default function ProductCard({item}){

    return(
        <div className='product-card'>
            <Link to={`/productdetail?id=${item?.id}`}className="Product-img">
                <img src={item?.image} alt='product-1' />
            </Link>
            <Link to='/productdetail' className="Product-name">{item?.category}</Link>
            <span className="prize">Rs.{item?.price}</span>
         {
            //abc()
         }

        </div>
    )
}