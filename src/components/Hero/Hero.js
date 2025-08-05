import React, { useState, useEffect } from 'react'
import './Hero.css';
import hero1 from '../images/hero-image1.jpg';
import hero2 from '../images/hero-image2.jpg';
import hero3 from '../images/hero-image3.jpg';

const images = [hero1, hero2, hero3];

export default function Hero() {
    const [image, setImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImage((prev) => (prev + 1) % images.length)
        }, 3000); // 3 seconds per slide
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="hero">
            {images.map((img, index) => (
                <div
                    key={index}
                    className="hero-image"
                    style={{
                        backgroundImage: `url(${img})`,
                        opacity: image === index ? 1 : 0,
                        zIndex: image === index ? 1 : 0,
                    }}
                />
            ))}
            <div className="hero-text">
                <p>Welcome to <span id="solid">FIND</span><span id="thin">MYGYM</span></p>
            </div>
        </div>
    )
}

