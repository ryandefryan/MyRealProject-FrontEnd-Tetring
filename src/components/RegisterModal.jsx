import React, { Component } from 'react';
import Axios from 'axios';
import LinkAPI from './../supports/constants/LinkAPI.js';
import Validator from 'validator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faEyeSlash, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, UncontrolledAlert } from 'reactstrap';
import TetringLogo from './../supports/images/Tetring Logo.png';

export class RegisterModal extends Component {
    state = {
        modalOpen : false,
        seePassword : false,
        seeConfirmPassword : false,
        errorEmailMessage : false,
        errorPasswordMessage : false,
        anotherErrorMessage :false,
        buttonDisabled : false
    }

    onEmailValidation = () => {
        var email = this.email.value

        if(email){
            if(!(Validator.isEmail(email))){
                this.setState({errorEmailMessage : 
                    <span className="mytetring-font-size-12">
                        <FontAwesomeIcon icon={faExclamationCircle} className="fa-lg" /> Email Is Not Valid
                    </span> 
                })
            }else{
                this.setState({errorEmailMessage : true})
            }
        }else{
            this.setState({errorEmailMessage : 
                <span className="mytetring-font-size-12">
                    <FontAwesomeIcon icon={faExclamationCircle} className="fa-lg" /> Email Must Be Filled
                </span> 
            })
        }
    }

    onPasswordValidation = () => {
        var password = this.password.value
        var confirmPassword = this.confirmPassword.value

        if(password && confirmPassword){
            if((password.length >= 8)){
                if(password === confirmPassword){
                    this.setState({errorPasswordMessage : true})
                }else{
                    this.setState({errorPasswordMessage : 
                        <span className="mytetring-font-size-12">
                            <FontAwesomeIcon icon={faExclamationCircle} className="fa-lg" /> Password Does Not Match
                        </span>    
                    })
                }
            }else{
                this.setState({errorPasswordMessage : 
                    <span className="mytetring-font-size-12">
                        <FontAwesomeIcon icon={faExclamationCircle} className="fa-lg" /> Password Have Minumum Length 8 Characters
                    </span>
                })
            }
        }else{
            this.setState({errorPasswordMessage : 
                <span className="mytetring-font-size-12">
                    <FontAwesomeIcon icon={faExclamationCircle} className="fa-lg" /> Password Must Be Filled
                </span> 
            })
        }
    }

    onCreateAccount = () => {
        this.setState({buttonDisabled : true})
        var email = this.email.value
        var password = this.password.value
        var data = {email, password}

        if((this.state.errorEmailMessage === true) && (this.state.errorPasswordMessage === true)){
            Axios.post(LinkAPI + 'authentic-system/register/', data)
            .then((res) => {
                console.log(res)

                this.setState({
                    buttonDisabled : false,
                    anotherErrorMessage : 
                        <UncontrolledAlert className="border-0 rounded-0 mytetring-bg-main-light mytetring-light">
                            <span><FontAwesomeIcon icon={faExclamationCircle} className="fa-lg" /> {res.data.message}</span>
                        </UncontrolledAlert>
                })
                setTimeout(function(){window.location = '/login'}, 2000)
            })
            .catch((err) => {
                console.log(err)
            })
        }else{
            this.setState({buttonDisabled : false})
        }
    }

    render(){
        return(
            <span>
                {/* 
                    ############### Props ###############
                    Transfer Data dari Parent ke Child
                    Parentnya di Halaman Pages, Childnya LoginModal.jsx
                */}
                {/* REGISTER SECTION */}
                <span onClick={() => this.setState({modalOpen : true})} className={this.props.className}>{this.props.text}</span> 
                <Modal toggle={() => this.setState({modalOpen : false})} isOpen={this.state.modalOpen}>
                    <ModalBody className="border border-white">
                        <div onClick={() => this.setState({modalOpen : false})} className="text-right mytetring-clickable-element">
                            {/* <FontAwesomeIcon icon={faTimesCircle} className="fa-lg" /> */}
                        </div>
                        <div className="pt-0 pb-3 text-left">
                            <img src={TetringLogo} alt="" width="90px" />
                        </div>
                        <div className="text-center">
                            <img src="https://image.freepik.com/free-vector/flat-illustration-creative-office-business-company_81522-2258.jpg" alt="" width="300px" />
                        </div>
                        <div className="px-5 py-0">
                            <div className="pt-1 pb-3 text-right">
                                <h3><span className="font-weight-bold">Create</span><span className="font-weight-light">Account</span></h3>
                                <h5 className="font-weight-normal mytetring-font-size-14 mytetring-grey">Create every your task with us!</h5>
                            </div>
                            <div>
                                {this.state.anotherErrorMessage}
                            </div>
                            <div className="form-group mt-3 mb-3">
                                <div className="input-group">
                                    <input type="text" ref={(element) => {this.email = element}} onChange={this.onEmailValidation} placeholder="Email" className="form-control rounded-0 border-top-0 border-left-0 border-right-0 mytetring-input" required />
                                    <div className="input-group-prepend">
                                        <span className="pl-1 pr-1 border-bottom mytetring-clickable-element">
                                            <i><FontAwesomeIcon icon={faUser} className="fa-xs" /></i>   
                                        </span>
                                    </div>
                                </div>
                                <div className="mytetring-warning">
                                    {this.state.errorEmailMessage}
                                </div>
                            </div>
                            <div className="form-group mt-3 mb-3">
                                <div className="input-group">
                                    <input type={this.state.seePassword? "text" : "password"} ref={(element) => this.password = element} onChange={this.onPasswordValidation} placeholder="Password" className="form-control rounded-0 border-top-0 border-left-0 border-right-0 mytetring-input" required />
                                    <div className="input-group-prepend">
                                        <span onClick={() => this.setState({seePassword : !this.state.seePassword})} className="pl-1 pr-1 border-bottom mytetring-clickable-element">
                                            <i><FontAwesomeIcon icon={this.state.seePassword? faEye : faEyeSlash} className="fa-xs" /></i>   
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3 mb-3">
                                <div className="input-group">
                                    <input type={this.state.seeConfirmPassword? "text" : "password"} ref={(element) => this.confirmPassword = element} onChange={this.onPasswordValidation} placeholder="Confirm Password" className="form-control rounded-0 border-top-0 border-left-0 border-right-0 mytetring-input" required />
                                    <div className="input-group-prepend">
                                        <span onClick={() => this.setState({seeConfirmPassword : !this.state.seeConfirmPassword})} className="pl-1 pr-1 border-bottom mytetring-clickable-element">
                                            <i><FontAwesomeIcon icon={this.state.seeConfirmPassword? faEye : faEyeSlash} className="fa-xs" /></i>   
                                        </span>
                                    </div>
                                </div>
                                <div className="mytetring-warning">
                                    {this.state.errorPasswordMessage}
                                </div>
                            </div>
                            <div className="pt-3 pb-5">
                                <input type="button" disabled={this.state.buttonDisabled} value={this.state.buttonDisabled? "Sending Data" : "Create Account"} onClick={this.onCreateAccount} className="btn rounded w-100 mytetring-bg-secondary mytetring-light mytetring-input" />
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </span>
        )
    }
}

export default RegisterModal