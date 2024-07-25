import './Header.css';

import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Header(){

    const [toggleMenu,setToggleMenu] =useState(null);
    const [toggleSearch,setTogglSearch] =useState(null);

    function dropdownMenu(){
        if(toggleMenu == null){
            setToggleMenu("showMenu");
        }else{
            setToggleMenu(null);
        }
    }

    function search(){
       if(toggleSearch === null){
        setTogglSearch("showSearch");
       }else{
        setTogglSearch(null)
       }
    }

    return(
        <div className="template-twader jcc">
            <header>
                <div className="header-top df">
                    <div className="logo">
                        <p>E-Fruits</p>
                    </div>
                   
                    <nav className='navbar df'>
                    <div className="dropdown-icon" onClick={dropdownMenu} >
                        <div className="toggle-menu">
                            <div className="spinner spinner-top"></div>
                            <div className="spinner spinner-middle"></div>
                            <div className="spinner spinner-bottom"></div>
                        </div>
                    </div>
                        <ul className={`df ${toggleMenu}`}>
                            <li> <NavLink to=''>Home</NavLink></li>
                            <li> <NavLink to='/products'>Products</NavLink>
                             <ul className='dropdown-menu'>
                                <li><Link to=''>Product-1</Link></li>
                                <li><Link to=''>Product-2</Link></li>
                                <li><Link to=''>Product-3</Link></li>
                                <li><Link to=''>Product-4</Link></li>
                                <li><Link to=''>Product-5</Link></li>
                             </ul>
                            </li>
                            <li> <NavLink to='/about'>About</NavLink></li>
                            <li> <NavLink to='/faqs'>FAQs</NavLink></li>
                            <li> <NavLink to='/contact'>Contact</NavLink></li>
                        </ul>
                    </nav>

                </div>
                <div className="header-bottom df">
                    <div className='header-bottom-left'></div>
                    <div className='header-bottom-middle jsb'>
                        <div className="cart-box">
                           <p> <NavLink to='/cart'>My Cart (2)</NavLink>|<NavLink to='/ckeckout'>Check Out</NavLink></p>
                        </div>
                        <div className="search-icon" onClick={search} ><i className="fa-solid fa-magnifying-glass"></i></div>
                        <div className={`search ${toggleSearch}`}>
                            <input type="text" placeholder='Seacrh' /><button>Search</button>
                        </div>
                           
                        


                    </div>
                    <div className='header-bottom-right'></div>

                </div>

            </header>
        </div>
    );
}
