import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import image1 from '../../../images/banner/3.jpg';
import image2 from '../../../images/banner/2.jpg';
import image3 from '../../../images/banner/4.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-10 image"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <p>Give your clients the earliest delivery<br /> consistent
                            with quality - whatever<br /> the inconvenience to us.<br />

                            Arthur C.Nielsen</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-10 image"
                        src={image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>

                        <p>A library is the delivery room for the birth of <br /> ideas, a place where history comes <br />to life.
                            <br />

                            Norman Cousins</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-10 image"
                        src={image3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>

                        <p>When you're writing, you are robbed of your delivery.<br />

                            Calvin Trillin</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;