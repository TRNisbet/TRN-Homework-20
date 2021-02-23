import React from 'react'
import { FaAngleUp } from "react-icons/fa";
import { animateScroll as scroll } from 'react-scroll';
export default function footer() {
    const goHome = (e) => {
        e.preventDefault();
        scroll.scrollToTop();
    }
    return (
        <div className="footer-area">
            <br></br>
            <br></br>
            <div className="back-to-top">
                <a href="#" onClick={goHome}><i><FaAngleUp/></i></a>
            </div>
        </div>
    )
}
