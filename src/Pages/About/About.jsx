import './About.css';
 import { useState } from 'react';

import loadable from '@loadable/component';



// const LoadablePage = loadable((props) => import(`../${props.page}/${props.page}`), {
//     fallback: <div>Page is Loading...</div>,
//     cacheKey: (props) => props.page
//   });


 export default function About(){
    return(
        <>
        <h1>About</h1>
        {/* <LoadablePage page='Pagination' /> */}
        </>
    );
}