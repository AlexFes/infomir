import React from "react";
import { render } from "react-dom";

class Header extends React.Component {
    render() {
        return(
            <div className="row">
                <div className="col-2 toggle">
                    <img className="img-fluid mt-5" src="images/book1.png"/>
                </div>

                <div className="col-8 toggle-show">
                    <div className="row justify-content-center">
                        <img className="img-fluid" src="images/head1.png" />
                    </div>

                    <div className="row position-relative justify-content-center">
                        <img className="img-fluid" src="images/head2.png" />

                        <div className="contacts_caption">
                            <p className="h4">
                                info@infomir.ru
                                <br><br>+79255109475
                                <br><br>+79255109475
                                <br><br>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-2 toggle">
                    <img className="img-fluid mt-5 float-right" src="images/book2.png"/>
                </div>
            </div>
        );
    }
}

render(<Header/>, window.document.getElementById("header"));