import React, { Component } from 'react';
import Axios from 'axios';
import LinkAPI from './../supports/constants/LinkAPI.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack, faQuoteRight, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, UncontrolledAlert } from 'reactstrap';
import TetringLogo from './../supports/images/Tetring Logo.png';

export class CreateTask extends Component {
    state = {
        modalOpen : false,
        buttonDisabled : false,
        errorMessage :'',
        alertMessage : false
    }

    onCreateTask = () => {
        this.setState({buttonDisabled : true})
        var task = this.task.value
        var description = this.description.value
        var date = this.time.value
        var time = this.time.value.split('T')[1]
        var token = localStorage.getItem('mytkn')
        var data = {task, description, date, time, token}

        console.log(date)

        if(!task || !description || !time){
            this.setState({buttonDisabled : false, errorMessage : 'Input Must Be Filled'})
        }else{
            Axios.post(LinkAPI + 'my-tasks/create-task', data)
            .then((res) => {
                console.log(res)

                this.setState({
                    buttonDisabled : false,
                    alertMessage : 
                        <UncontrolledAlert className="border-0 rounded-0 mytetring-bg-main-light mytetring-light">
                            <span><FontAwesomeIcon icon={faExclamationCircle} className="fa-lg" /> {res.data.message}</span>
                        </UncontrolledAlert>
                })
                setTimeout(function(){window.location = '/my-tasks'}, 2000)
            })
            .catch((err) => {
                console.log(err)
            })
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
                {/* CREATE TASK SECTION */}
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
                                <h3><span className="font-weight-bold">Create</span><span className="font-weight-light">Task</span></h3>
                                <h5 className="font-weight-normal mytetring-font-size-14 mytetring-grey">Time is everything right?</h5>
                            </div>
                            <div>
                                {this.state.alertMessage}
                            </div>
                            <div className="form-group mt-3 mb-3">
                                <div className="input-group">
                                    <input type="text" ref={(element) => {this.task = element}} onChange={this.onEmailValidation} placeholder="Title" className="form-control rounded-0 border-top-0 border-left-0 border-right-0 mytetring-input" required />
                                    <div className="input-group-prepend">
                                        <span className="pl-1 pr-3 border-bottom mytetring-clickable-element">
                                            <i><FontAwesomeIcon icon={faThumbtack} className="fa-1x" /></i>   
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3 mb-3">
                                <div className="input-group">
                                    <input type="text" ref={(element) => this.description = element} onChange={this.onPasswordValidation} placeholder="Description" className="form-control rounded-0 border-top-0 border-left-0 border-right-0 mytetring-input" required />
                                    <div className="input-group-prepend">
                                        <span className="pl-1 pr-3 border-bottom mytetring-clickable-element">
                                            <i><FontAwesomeIcon icon={faQuoteRight} className="fa-1x" /></i>   
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3 mb-3">
                                <div className="input-group">
                                    <input type="datetime-local" ref={(element) => this.time = element} onChange={this.onPasswordValidation} placeholder="Date & Time" className="form-control rounded-0 border-top-0 border-left-0 border-right-0 mytetring-input" required />
                                    <div className="input-group-prepend">
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                {
                                    this.state.errorMessage?
                                        <span className="mytetring-font-size-16 mytetring-warning">
                                            <FontAwesomeIcon icon={faExclamationCircle} className="fa-lg" /> {this.state.errorMessage}
                                        </span>
                                    :
                                        null
                                }
                            </div>
                            <div className="pt-3 pb-5">
                                <input type="button" disabled={this.state.buttonDisabled} value={this.state.buttonDisabled? "Sending Data" : "Create Task"} onClick={this.onCreateTask} className="btn rounded w-100 mytetring-bg-secondary mytetring-light mytetring-input" />
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </span>
        )
    }
}

export default CreateTask