import React, { Component } from 'react';
import './footer.css'


export class Footer extends Component {
    render() {
    return(
                <footer>
                    <div>
                        <div className="container text-center">
                            <div className="row">
                                    <div className="col-md-12" id="footerTitle">
                                        HELLO WORLD THIS IS MY FOOTER
                                    <a href="#"><i className="fa fa-2x fa-facebook-square"></i></a>
                                    <a href="#"><i className="fa fa-2x fa-twitter-square"></i></a>
                                    <a href="#"><i className="fa fa-2x fa-google-plus-square"></i></a>
                                    <a href="#"><i className="fa fa-2x fa-youtube-square"></i></a>
                                    <a href="#"><i className="fa fa-2x fa-vimeo-square"></i></a>
                                    <a href="#"><i className="fa fa-2x fa-pinterest-square"></i></a>
                                    <a href="#"><i className="fa fa-2x fa-linkedin-square"></i></a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </footer>
            )
            }
}