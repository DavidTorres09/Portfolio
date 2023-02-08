import React from 'react'
import Mouse from '../../../icons/Mouse.png';
import Arrow from '../../../icons/ArrowDown.png';

const ScrollDown = () => {
    return (
        <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
                <img src={Mouse} alt="Mouse" className="mouse-img" />
                <span className="home__scroll-name">Scroll Down</span>
                <img src={Arrow} alt="Mouse" className="arrow-img" />
            </a>
        </div>
    )
}

export default ScrollDown;


