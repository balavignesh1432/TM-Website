import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from './../Assets/Images/slider1.jpg';
import image2 from './../Assets/Images/slider2.jpg';
import image3 from './../Assets/Images/slider3.jpg';



const SlidingImages = () => {
    return(
        <Carousel >
            <Carousel.Item> 
                <img src={image1} ></img>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src={image2} ></img>
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src={image3} ></img>
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    )
}

export default SlidingImages;