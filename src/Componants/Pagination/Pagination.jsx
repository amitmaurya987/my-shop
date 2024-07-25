

import './Pagination.css';
import { Link } from 'react-router-dom';

export default function Pagination(){
    return(
        <ul className='pagination ocs-jcc'>
            <li><Link to=''><i className="fa-solid fa-angles-left"></i></Link></li>
            <li><Link to=''>1</Link></li>
            <li><Link to=''>2</Link></li>
            <li><Link to=''>3</Link></li>
            <li><Link to=''><i className="fa-solid fa-angles-right"></i></Link></li>
        </ul>
    )
}