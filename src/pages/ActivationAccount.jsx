import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import LinkAPI from './../supports/constants/LinkAPI.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody } from 'reactstrap';
import Loader from 'react-loader-spinner';

export class ActivationAccaount extends Component {

    state = {
        modalOpen : false,
        errorActivationEmailVerification : false,
        buttonDisabled : false,
        activationText : false
    }

    componentDidMount(){
        this.onConfirmedEmailVerification()
    }

    onConfirmedEmailVerification = () => {
        var id = this.props.match.params.id
        var password = this.props.match.params.password
        var activationMethod = this.props.match.params.activationMethod
        var data = {id, password}

        if(activationMethod === 'true'){
            this.setState({modalOpen : true})
        }else{
            if(id && password){
                Axios.patch(LinkAPI + 'authentic-system/confirmed-email-verification/', data)
                .then((res) => {
                    console.log(res)
                    this.setState({activationText : 
                        <div> 
                            <h1 className="mytetring-dark">Hi, Tetringers!</h1>
                            <h5 className="font-weight-normal mytetring-dark">You Already Joined With Us, Let's Create Your First Task!</h5>
                            <div className="text-right mytetring-secondary">
                                <span className="px-1 mytetring-font-size-20">
                                    Let's Go! 
                                </span> 
                                <Link to = '/' className="mytetring-link">
                                    <FontAwesomeIcon icon={faChevronCircleRight} className="fa-2x mytetring-clickable-element" />
                                </Link>
                            </div>
                        </div>
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        }
        
    }

    onActivationEmailVerification = () => {
        this.setState({buttonDisabled : true})
        var id = this.props.match.params.id
        var password = this.props.match.params.password
        var activationCode = this.activationCode.value
        var data = {id, password, activation_code : activationCode}

        if(activationCode){
            Axios.post(LinkAPI + 'authentic-system/activation-email-verification/', data)
            .then((res) => {
                console.log(res)
                this.setState({buttonDisabled : false, modalOpen : false, activationText : 
                    <div> 
                        <h1 className="mytetring-dark">Hi, Tetringers!</h1>
                        <h5 className="font-weight-normal mytetring-dark">You Already Joined With Us, Let's Create Your First Task!</h5>
                        <div className="text-right mytetring-secondary">
                            <span className="px-1 mytetring-font-size-20">
                                Let's Go! 
                            </span> 
                            <Link to = '/' className="mytetring-link">
                                <FontAwesomeIcon icon={faChevronCircleRight} className="fa-2x mytetring-clickable-element" />
                            </Link>
                        </div>
                    </div>
                })
            })
            .catch((err) => {
                console.log(err)
                this.setState({buttonDisabled : false, errorActivationEmailVerification : 
                    <span className="mytetring-font-size-12">
                        <FontAwesomeIcon icon={faExclamationCircle} className="fa-lg" /> Your Account Already Active / Your Code Does Not Match
                    </span> })
            })
        }else{
            this.setState({buttonDisabled : false, errorActivationEmailVerification : 
                <span className="mytetring-font-size-12">
                    <FontAwesomeIcon icon={faExclamationCircle} className="fa-lg" /> Code Must Be Filled
                </span> 
            })
        }
    }

    render(){
        return(
            <div>
                <div className="mytetring-activation-account-background">
                    {/* ACTIVATION ACCOUNT SECTION */}

                    {/* Activation Account Success */}
                    <div className="container h-100">
                        <div className="row h-100 justify-content-center align-items-center">   
                            {
                                this.state.activationText?
                                    this.state.activationText
                                :
                                    <Loader type="ThreeDots" color="#005eb8" height={100} width={100} />
                            }
                        </div>
                    </div>
                </div>
                
                {/* Activation Code Modal */}
                <Modal isOpen={this.state.modalOpen}>
                    <ModalBody className="border border-white">
                        <div className="px-5 py-0">
                            <div className="pt-1 pb-3 text-right">
                                <h3><span className="font-weight-bold">Activate</span><span className="font-weight-light">Account</span></h3>
                                <h5 className="font-weight-normal mytetring-font-size-14 mytetring-grey">Let's join with us!</h5>
                            </div>
                            <div className="form-group mt-3 mb-3">
                                <div className="input-group">
                                    <input type="text" ref={(element) => {this.activationCode = element}} placeholder="Activation Code" className="form-control rounded-0 border-top-0 border-left-0 border-right-0 mytetring-input" required />
                                </div>
                                <div className="mytetring-warning">
                                    {this.state.errorActivationEmailVerification}
                                </div>
                            </div>
                            <div className="pt-3 pb-5">
                                <input type="button" disabled={this.state.buttonDisabled} value={this.state.buttonDisabled? "Activating Your Account" : "Submit"} onClick={this.onActivationEmailVerification} className="btn rounded w-100 mytetring-bg-secondary mytetring-light mytetring-input" />
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default ActivationAccaount