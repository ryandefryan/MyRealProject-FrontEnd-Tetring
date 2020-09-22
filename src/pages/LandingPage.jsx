import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Peoples1 from './../supports/images/Peoples1.png';
import Picture1 from './../supports/images/Img1.png';
import Feature1 from './../supports/images/111.png'

export class LandingPage extends Component {

    state = {
        loginStatus : false
    }

    render() {
        return(
            <div>
                {/* JUMBOTRON SECTION */}
                <div className="mytetring-jumbotron-background">
                    <div className="container h-100 px-0 py-5">
                        <div className="h-100 px-0 py-5">
                            <div className="h-100 px-0 py-0">
                                <div className="container">
                                    <div className="row align-items-center h-100 px-0 py-5">
                                        <div className="col-12 col-md-6 px-5 px-md-0">
                                            <h1 className="font-weight-bold mytetring-font-size-60">Simply Apps</h1>
                                            <h1 className="font-weight-light mytetring-font-size-60">To Monitoring Your</h1>
                                            <h1 className="font-weight-light mytetring-font-size-60">Every Task!</h1>
                                        </div>
                                        <div className="col-6 d-none d-md-block">
                                            <img src={Peoples1} alt="" width="100%" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* WHY USE TETRING? SECTION */}
                <div className="pt-5 d-none d-md-block">
                    <div className="container h-100 py-5">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-6 text-center">
                                <img src={Feature1} alt="Feature Picture 1" width="100%" className="rounded-circle" />
                            </div>
                            <div className="col-6">
                                <h1 className="font-weight-bold mytetring-main-light">Paperless</h1>
                                <span className="mytetring-font-size-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa enim suscipit minus voluptate laborum quia quo consequuntur optio incidunt nemo. Esse quos, nam a accusamus nulla excepturi aut iusto hic.</span>
                            </div>
                            <div className="col-6">
                                <h1 className="font-weight-bold mytetring-main-light">Paperless</h1>
                                <span className="mytetring-font-size-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa enim suscipit minus voluptate laborum quia quo consequuntur optio incidunt nemo. Esse quos, nam a accusamus nulla excepturi aut iusto hic.</span>
                            </div>
                            <div className="col-6 text-center">
                                <img src={Feature1} alt="Feature Picture 1" width="100%" className="rounded-circle" />
                            </div>
                            <div className="col-6 text-center">
                                <img src={Feature1} alt="Feature Picture 1" width="100%" className="rounded-circle" />
                            </div>
                            <div className="col-6">
                                <h1 className="font-weight-bold mytetring-main-light">Paperless</h1>
                                <span className="mytetring-font-size-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa enim suscipit minus voluptate laborum quia quo consequuntur optio incidunt nemo. Esse quos, nam a accusamus nulla excepturi aut iusto hic.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TESTIMONI SECTION */}
                <div className="container py-5">
                    <div className="text-center pt-0 pb-3">
                        <h1 className="font-weight-bold">What Tetringers Say?</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-8 text-center">
                            <h5 className="font-weight-light font-italic mytetring-font-size-30">" Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sit inventore, consectetur accusamus quo optio! "</h5>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center pt-0 pb-3">
                        <div className="col-4 text-right">
                            <img src={Picture1} alt="Profil Picture 1" width="25%" className="rounded-circle" />
                        </div>
                        <div className="col-4 text-center">
                            <img src={Picture1} alt="Profil Picture 1" width="35%" className="rounded-circle" />
                        </div>
                        <div className="col-4 text-left">
                            <img src={Picture1} alt="Profil Picture 1" width="25%" className="rounded-circle" />
                        </div>
                    </div>
                </div>

                
            </div>
        )
    }
}

export default LandingPage