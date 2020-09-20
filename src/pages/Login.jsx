import React, { Component } from 'react';
import Axios from 'axios';
import LinkAPI from './../supports/constants/LinkAPI.js';
import RegisterModal from '../components/RegisterModal.jsx';
import TetringLogo from './../supports/images/Tetring Logo.png';

export class Login extends Component {

    componentDidMount(){
        this.onConfirmedEmail()
    }

    onConfirmedEmail = () => {
        var id = Number(this.props.location.pathname.split('/')[2])
        var password = this.props.location.pathname.split('/')[3]
        var data = {id, password}
        
        if(id && password){
            Axios.patch(LinkAPI + 'authentic-system/confirmed-email-verification/', data)
            .then((res) => {
                console.log(res)
                window.location = '/'
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    render() {
        return(
            <div>
                <div className="mytetring-background">
                    {/* LOGIN SECTION */}
                    <div className="container h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-10 col-md-8 px-4 py-3 rounded shadow-lg mytetring-bg-light">
                                <div className="pt-0 pb-3 text-left">
                                    <img src={TetringLogo} alt="" width="90px" />
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6 text-center">
                                        <img src="https://image.freepik.com/free-vector/flat-illustration-creative-office-business-company_81522-2258.jpg" alt="" width="300px" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="px-5 text-right">
                                            <h3><span className="font-weight-bold">Task</span><span className="font-weight-light">Monitoring</span></h3>
                                            <h5 className="font-weight-normal mytetring-font-size-14 mytetring-grey">What's your task today?</h5>
                                        </div>
                                        <div className="pl-5 pl-md-0 pr-5 py-3 text-left">
                                            <input type="text" placeholder="Email" className="form-control rounded-0 w-100 border-top-0 border-left-0 border-right-0 mytetring-input" required />
                                        </div>
                                        <div className="pl-5 pl-md-0 pr-5 py-1 text-left">
                                            <input type="text" placeholder="Password" className="form-control rounded-0 w-100 border-top-0 border-left-0 border-right-0 mytetring-input" required />
                                        </div>
                                        <div className="pl-5 pl-md-0 pr-5">
                                            <input type="button" value="Login"className="btn rounded w-100 mx-0 mt-3 mb-3 mytetring-bg-secondary mytetring-light mytetring-input" />
                                        </div>
                                        <div className="px-0 py-3 text-center text-md-left">
                                            <h5 className="font-weight-normal mytetring-font-size-14">Don't Have Account? <RegisterModal text="Join!" className="font-weight-bold mytetring-clickable-element" /></h5>
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