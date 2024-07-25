
import './Footer.css';



import { Link } from 'react-router-dom';

export default function Footer(){
    return(
       <footer>
        
          <div className='jcc'>
          <div className="footer-wrapper jsb">
          <div>
                <h2>Pages</h2>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/cart'>cart</Link></li>
                    <li><Link to='/faqs'>FAQs</Link></li>
                    <li><Link to='/ckeckout'>Check Out</Link></li>
                    <li><Link to='/products'>Product</Link></li>
                </ul>
            </div>
            <div>
                <h2>Information</h2>
                <ul>
                    <li><Link to=''>Consectetur </Link></li>
                    <li><Link to=''>Consectetur </Link></li>
                    <li><Link to=''>Consectetur </Link></li>
                    <li><Link to=''>Consectetur </Link></li>
                    <li><Link to=''>Consectetur </Link></li>
                    <li><Link to=''>Consectetur </Link></li>
                </ul>
            </div>
            <div>
                <h2>Service & Support</h2>
                <ul>
                    <li><Link to=''>Consectetur adipiscing eli</Link></li>
                    <li><Link to=''>Consectetur adipiscing eli</Link></li>
                    <li><Link to=''>Consectetur adipiscing eli</Link></li>
                    <li><Link to=''>Consectetur adipiscing eli</Link></li>
                    <li><Link to=''>Consectetur adipiscing eli</Link></li>
                    <li><Link to=''>Consectetur adipiscing eli</Link></li>
                </ul>
            </div>
            
            <div className='newsletter'>
                <h2>Newsletter</h2>
                <p>Sign up for New Variety Of Fruts & Vegetables alerts</p>
                <div className="subscribe">
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='e-mail' />
                    <input type="button" value="Subscribe" />
                </div>
                  
            
            </div>

          </div>
          </div>
            <div className='footer-bottom-wrapper jcc'>
            <div className='footer-bottom jsb'>
               <div> copywright@2022</div>
               <div>
                  <Link to=''><i className="fa-brands fa-facebook"></i></Link>
                  <Link to=''><i className="fa-brands fa-instagram"></i></Link>
                  <Link to=''><i className="fa-brands fa-twitter"></i></Link>
                  <Link to=''><i className="fa-brands fa-youtube"></i></Link>
              </div>
            </div>
            </div>
       </footer>
    )
}