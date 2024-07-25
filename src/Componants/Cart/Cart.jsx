import './Cart.css';
import ProductCard from '../Products/ProductCard';
import remove from '../../images/remove.png';
import RecentProducts from '../Products/RecentProducts';
import { Link } from 'react-router-dom';


export default function Cart(){
    return(
        <>
        <div className="df cart-item-wrapper">
          <div className='cart-items'>
          <div className="df  cart-itemsList card-item-heading">
                <div className='card-item-img'>Items</div>
                <div className='quentity'>Quentity</div>
                <div className='prize'>Total</div>
           </div>
           <div className="df cart-itemsList">
                <div className='card-item-img'>
                    <ProductCard /> 
                    <span className='remove'>
                        <img src={remove} alt="remove" />
                    </span>
                </div>
                <div className='quentity'><input type="text" /></div>
                <div className='prize'>Rs.160</div>
           </div>
           <div className="df cart-itemsList">
                <div className='card-item-img'>
                    <ProductCard /> 
                    <span className='remove'>
                        <img src={remove} alt="remove" />
                    </span>
                </div>
                <div className='quentity'><input type="text" /></div>
                <div className='prize'>Rs.160</div>
           </div>
           <div className="df cart-itemsList">
                <div className='card-item-img'>
                    <ProductCard /> 
                    <span className='remove'>
                        <img src={remove} alt="remove" />
                    </span>
                </div>
                <div className='quentity'><input type="text" /></div>
                <div className='prize'>Rs.160</div>
           </div>
           <div className="df  cart-itemsList card-item-bottom">
                <div className='card-item-img'>Total Amount</div>
                
                <div className='prize'>Rs. 500</div>
           </div>
           <div className="df ckeckout">
                <div className='product-Daital'><Link to='/ckeckout' className='btn-checkout'>Checkout</Link></div>
           </div>
          </div>
         <div className='recent'>
         <h2>Tranding Product</h2>
         <RecentProducts />
         </div>
          
        </div>
        </>
    )
}