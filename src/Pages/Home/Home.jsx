import './Home.css';

import banner1 from '../../images/b1.jpg';
import banner2 from '../../images/b2.jpg';
import banner3 from '../../images/b3.jpg';
import ProductHome from '../Products/ProductHome';



export default function Home(){
    return(
        <div className="home-wrapper">
            <div className="banner-wrapper">
                <div className="banner jcc">
                    <div className="item item-1">
                       <div className="img"></div>
                    </div>
                    
                </div>
                

            </div>
        <ProductHome />
        
        
        </div>
    )
}