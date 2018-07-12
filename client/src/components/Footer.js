import React from 'react';

const Footer = () => {
    const inlineStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%'
    };

    return (
        <div className="container-fluid position-relative container-footer px-0">
            <div id="greyline" />

            <div className="row row-footer">
                <div className="col-3 d-flex justify-content-end align-items-end">
                    <img src="images/4_1.png" className="img-fluid footer-1" />
                </div>

                <div className="col-6 d-flex justify-content-center align-items-end">
                    <a href="https://ecceconference.com/" style={inlineStyle} />

                    <img src="images/4_2_2.svg" className="img-fluid footer-2" />
                </div>

                <div className="col-3" />
            </div>
        </div>
    );
};

export default Footer;