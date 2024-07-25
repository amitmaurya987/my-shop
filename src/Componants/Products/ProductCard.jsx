
import './Products.css';
import { Link } from 'react-router-dom';
import P1 from '../../images/01.jpg';
export default function ProductCard(){

    function abc(){
        const Anc =  require('../Pagination/Pagination');
        return <Anc />
    }
    return(
        <div className='product-card'>
            <Link to='/productdetail' className="Product-img">
                <img src={P1} alt='product-1' />
            </Link>
            <Link to='/productdetail' className="Product-name">Pomegranate</Link>
            <span className="prize">Rs. 80</span>
         {
            //abc()
         }

        </div>
    )
}