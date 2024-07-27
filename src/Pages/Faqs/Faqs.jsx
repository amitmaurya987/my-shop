import './Faqs.css';





import { lazy } from 'react';
import React, { Suspense } from "react";

const LoadablePage = lazy((props) =>{
    console.log(props);
   return import('../../Componants/Pagination/Pagination');
});



export default function Faqs(){
    return(
        <div>
        
        <h1>dfghjkl</h1>
        <Suspense fallback={<div>loading</div>} cacheKey='njnj'>
            <LoadablePage />
        </Suspense>
        </div>
    )
}