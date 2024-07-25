import '../Products/Products.css';
import './Productdetail.css';

import { Link } from 'react-router-dom';
import ProductCard from '../Products/ProductCard';
import P7 from '../../images/07.jpg';

export default function Productdetail(){
    return(
       
            <>
            <div className='pd-conainer productocDaital-wrapper df'>
                <div className='product-images df'>
                    <div className="Pd-main-img">
                        <img src={P7} alt="product-img" />
                    </div>
                    <div className="pd-other-imgs">
                        <div ><img src={P7} alt="product-img" /></div>
                        <div ><img src={P7} alt="product-img" /></div>
                    </div>
                    
                </div>
                <div className="product-Daital">
                    <h1>Product Name</h1>
                    <p className='short-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt massa odio.</p>
                    <p className="full-desc">
                        Donec eget tincidunt felis. Pellentesque et mauris sed eros faucibus consequat et et ante.
                        Cras sed arcu ut nulla iaculis imperdiet. Donec in est erat, rutrum ullamcorper nisl. Fusce tortor mauris,
                        accumsan nec viverra nec, elementum et arcu. Vivamus quis sem nisi. Proin nunc mi, tempor ac dictum sit amet,
                        fermentum ac urna
                    </p>
                    <div className='product-status'>
                        <span className="prize">Rs 80</span><span className='Avaliability'>Avaliability:-</span><span className='Avaliability-status'> In stock</span>
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