import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import LinkAPI from './../supports/constants/LinkAPI.js';
import ScrollFunction from './../supports/functions/NavbarScroll.js';
import TetringLogo from './../supports/images/Tetring Logo.png';

export class Navbar extends Component {

    state = {
        loginStatus : false
    }

    componentDidMount(){
        {window.onscroll = function() {ScrollFunction()}}
        this.getUserLogedIn()
    }

    getUserLogedIn = () => {
        var tokenUser = localStorage.getItem('token')

        if(tokenUser){
            this.setState({loginStatus : true})
        }
    }

    onLogout = () => {
        if(window.confirm('Are You Sure Want To Logout?')){
            localStorage.removeItem('token')
            window.location='/'
        }
    }

    render() {
        return(
            <div>
                <div id="navbar" className="w-100 position-fixed py-5" style={{transition: '0.3s', zIndex: 1}}>
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-6 text-left">
                                <Link to='/'>
                                    <img src={TetringLogo} alt="Header Logo" width="30%" className="d-none d-md-block" />
                                    <img src={TetringLogo} alt="Header Logo" width="65%" className="d-block d-md-none" />
                                </Link>
                            </div>
                            {
                                    this.state.loginStatus?
                                        <div className="col-6 text-right">
                                            <span className="font-weight-bold mytetring-font-size-20">
                                                Hi, Tetringers!
                                            </span>
                                            <span className="ml-3">
                                                <input type="button" value="Logout" onClick={() => this.onLogout()} className="btn rounded shadow-lg mytetring-bg-secondary mytetring-light mytetring-input" />
                                            </span>
                                        </div>
                                    :
                                    <div className="col-6 text-right">
                                        <span className="ml-3 font-weight-bold mytetring-font-size-18">
                                            <Link to='/login'>
                                                <input type="button" value="Login" className="btn rounded font-weight-bold mytetring-input mytetring-font-size-18" />
                                            </Link>
                                        </span>
                                        <span className="ml-3">
                                            <Link to='/login'>
                                                <input type="button" value="Register" className="btn rounded shadow-lg mytetring-bg-secondary mytetring-light mytetring-input" />
                                            </Link>
                                        </span>
                                    </div>
                                }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar