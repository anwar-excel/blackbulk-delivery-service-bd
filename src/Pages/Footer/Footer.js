import React from 'react';
import './Footer.css';
// import background from '../../images/footer';
import image from '../../images/footer/images.png';
const Footer = () => {
    return (
        <div className="footer">
            <div className="image-text">

                <img src={image} alt="" />
                <h2>01788888888</h2>

            </div>
            <div>
                <h2>
                    Blackbulk Delivery Service
                </h2>
                <p>My delivery can be intense, but it's intense because  I need to be heard. I know that people <br /> don't usually  listen, as it relates to constructive criticism, without getting offended. So,<br /> I speak my mind with an attitude  that I don't care if you get offended; br
                    I just want you to get the message.

                    Damon Dash</p>
            </div>

            <p>Copyright©2021 Blackbulk-delivery-service-bd</p>
        </div>
    );
};

export default Footer;