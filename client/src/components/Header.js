import React from 'react';

const Header = () => {
    return (
        <div className="row">
            <div className="col-2 toggle">
                <img className="img-fluid mt-5" src="images/book1.png"/>
            </div>

            <div className="col-8 toggle-show">
                <div className="row justify-content-center">
                    <img className="img-fluid" src="images/head1-01.png"/>
                </div>

                <div className="row position-relative justify-content-center">
                    <img className="img-fluid" src="images/head2-01.png"/>

                    <div className="contacts_caption">
                        <p className="h4">
                            info@infomir.ru
                            <br/><br/>+7 499 391 44 34
                            <br/><br/>+7 499 391 44 34
                            <br/><br/>
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-2 toggle">
                <img className="img-fluid mt-5 float-right" src="images/book2.png"/>
            </div>
        </div>
    );
};

export default Header;