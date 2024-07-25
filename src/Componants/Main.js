

import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Main(){
    return(
        <div className="App">
            <Header />
            <div className="jcc">
            <div className="middle-wrapper">
                <Outlet />
            </div>
               
            </div>
                
            <Footer />
        </div>
    );
}