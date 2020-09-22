import React, { Component } from 'react';
import Axios from 'axios';
import LinkAPI from './../supports/constants/LinkAPI.js';
import { Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { UncontrolledAlert } from 'reactstrap';
import RegisterModal from '../components/RegisterModal.jsx';
import TetringLogo from './../supports/images/Tetring Logo.png';

export class Login extends Component {

    state = {
        errorMessage : false,
        alertMessage : false,
        redirectStatus : false
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }

    onUserLogin = () => {
        var email = this.email.value
        var password = this.password.value
        var data = {email, password}

        if(email && password){
            Axios.post(LinkAPI + 'authentic-system/login/', data)
            .then((res) => {
                console.log(res)

                if(res.data.error === true){
                    this.setState({ errorMessage : 
                        <span className="mytetring-font-size-12 mytetring-warning">
                            <FontAwesomeIcon icon={faExclamationCircle} className="fa-lg" /> {res.data.message}
                        </span>
                    })
                }else{
                    localStorage.setItem('token', res.data.data.token)
                    this.setState({redirectStatus : true})
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }else{
            this.setState({ errorMessage : 
                <span className="mytetring-font-size-12 mytetring-warning">
                    <FontAwesomeIcon icon={faExclamationCircle} className="fa-lg" /> Input Must Be Filled
                </span>
            })
        }
    }

    render() {
        if(this.state.redirectStatus){
            return(
                <Redirect to='/' />
            )
        }
        return(
            <div>
                <div className="mytetring-login-background">
                    {/* LOGIN SECTION */}
                    <div className="container h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-10 col-md-8 mt-5 mt-md-0 px-4 py-3 rounded shadow-lg mytetring-bg-light">
                                <div className="pt-0 pb-3 text-left">
                                    
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6 d-none d-md-block text-center">
                                        <img src="https://image.freepik.com/free-vector/flat-illustration-creative-office-business-company_81522-2258.jpg" alt="" width="300px" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {
                                            this.state.alertMessage?
                                                <div className="pr-5">
                                                    <UncontrolledAlert className="border-0 mytetring-bg-warning mytetring-light">
                                                        <span><FontAwesomeIcon icon={faCheckCircle} className="fa-lg mr-1" /> Your Account Actived</span>
                                                    </UncontrolledAlert>
                                                </div>
                                            :
                                                null
                                        }
                                        <div className="px-5 text-right">
                                            <h3><span className="font-weight-bold">Task</span><span className="font-weight-light">Monitoring</span></h3>
                                            <h5 className="font-weight-normal mytetring-font-size-14 mytetring-grey">What's your task today?</h5>
                                        </div>
                                        <div className="pl-5 pl-md-0 pr-5 py-3 text-left">
                                            <input type="text" ref={(element) => this.email = element} placeholder="Email" className="form-control rounded-0 w-100 border-top-0 border-left-0 border-right-0 mytetring-input" required />
                                            {this.state.errorMessage? this.state.errorMessage : null}
                                        </div>
                                        <div className="pl-5 pl-md-0 pr-5 py-1 text-left">
                                            <input type="password" ref={(element) => this.password = element} placeholder="Password" className="form-control rounded-0 w-100 border-top-0 border-left-0 border-right-0 mytetring-input" required />
                                            {this.state.errorMessage? this.state.errorMessage : null}
                                        </div>
                                        <div className="pl-5 pl-md-0 pr-5">
                                            <input type="button" value="Login" onClick={this.onUserLogin} className="btn rounded w-100 mx-0 mt-3 mb-3 mytetring-bg-secondary mytetring-light mytetring-input" />
                                        </div>
                                        <div className="px-0 py-3 text-center text-md-left">
                                            <h5 className="font-weight-normal mytetring-font-size-14">Don't Have Account? <RegisterModal text="Join!" className="font-weight-bold mytetring-clickable-element"></RegisterModal></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login