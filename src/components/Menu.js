import React from 'react';
import './style.css';

function Menu() {
    return(
        <div className="nav">
            <a href="#shop">OUR SHOP</a>
            <a href="/">
                <p>your </p>
                <span> SNEAKERS</span>
            </a>
            <a href="/bin">
                <img src="img/bin.png" alt="" />
            </a>
        </div>
    )
}

export default Menu