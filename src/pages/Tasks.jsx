import React, { Component } from 'react';
import Axios from 'axios';
import LinkAPI from './../supports/constants/LinkAPI.js';
import Time from 'react-time-format'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { UncontrolledAlert } from 'reactstrap';
import Loader from 'react-loader-spinner';
import CreateTask from './../components/CreateTaskModal.jsx';
import Peoples1 from './../supports/images/Peoples1.png';

class MyTasks extends Component {

    state = {
        data : null,
        emailConfirmedMessage : '',
        alertMessage : false
    }

    componentDidMount() {
        this.getUserLogedIn()
        this.checkUserVerifyStatus()
        this.onGetData()
    }

    getUserLogedIn = () => {
        var tokenUser = localStorage.getItem('mytkn')

        if(!tokenUser){
            window.location = '*'
        }
    }

    checkUserVerifyStatus = () => {
        const token = localStorage.getItem('mytkn')
        console.log(token)

        if(token){
            Axios.post(LinkAPI + 'authentic-system/user-verify-status/', {token})
            .then((res) => {
                // console.log(res)

                if(res.data.error){
                    this.setState({emailConfirmedMessage : res.data.message})
                }else{
                    if(res.data.email_confirmed === 0){
                        this.setState({emailConfirmedMessage : 'Activate Your Account To Create Your Task'})
                    }
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    onGetData = () => {
        const token = localStorage.getItem('mytkn')
        console.log(token)
        Axios.post(LinkAPI + 'my-tasks/get-all-tasks/', {token})
        
        .then((res) => {
            console.log(res)
            this.setState({data : res.data.detail.tasks})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    onDeleteData = (id) => {
        if(window.confirm('Are You Sure Want To Delete This Task?')){
            Axios.delete(LinkAPI + 'my-tasks/delete-task/' + id)
    
            .then((res) => {
                console.log(res)

                window.scrollTo(0,0)
                this.setState({
                    alertMessage :
                        <UncontrolledAlert className="border-0 mytetring-bg-danger mytetring-light">
                            <span><FontAwesomeIcon icon={faExclamationCircle} className="fa-lg" /> {res.data.message}</span>
                        </UncontrolledAlert>
                })
                setTimeout(function(){window.location = '/my-tasks'}, 3000)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    onUpdateTaskDone = (id) => {
        if(window.confirm('Are You Sure This Task Has Been Done?')){
            Axios.patch(LinkAPI + 'my-tasks/update-task-done/' + id)
    
            .then((res) => {
                console.log(res)

                window.scrollTo(0,0)
                this.setState({
                    alertMessage :
                        <UncontrolledAlert className="border-0 mytetring-bg-secondary mytetring-light">
                            <span><FontAwesomeIcon icon={faExclamationCircle} className="fa-lg" /> {res.data.message}</span>
                        </UncontrolledAlert>
                })
                setTimeout(function(){window.location = '/my-tasks'}, 3000)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    mapDataTasks = () => {
        return this.state.data.map((value, id) => {
            return(
                <div className="rounded shadow-lg mt-0 mb-5 px-5 py-5 mytetring-bg-light mytetring-tasks-lists-position">
                    <div className="row">
                        <div className="col-4">
                            <h1 className="font-weight-light"><Time value={value.time} format="DD" /></h1>
                            <h1 className="font-weight-light"><Time value={value.time} format="MM" /></h1>
                            <h1><Time value={value.time} format="YYYY" /></h1>
                        </div>
                        <div className="col-8 border-left px-5">
                            <div className="pt-0 pb-5">
                                <div className="border-bottom">
                                    <div className="row">
                                        <div className="col-8">
                                            <h5>{value.task}</h5>
                                        </div>
                                        <div className="col-4 text-right">
                                            {
                                                value.status === 1?
                                                    <span><Time value={value.time} format="hh:mm" /> WIB</span>
                                                :
                                                    <input type="button" value="Done" className="btn rounded-pill shadow-lg py-1 mr-1 mytetring-bg-secondary mytetring-font-size-12 mytetring-light mytetring-input" />
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span>{value.description}</span>
                                </div>
                                <div className="py-3">
                                    <input type="button" value="Edit" className="btn rounded-pill shadow-lg py-1 mr-1 mytetring-bg-warning mytetring-font-size-12 mytetring-light mytetring-input" />
                                    <input type="button" value="Delete" onClick={() => this.onDeleteData(value.id)} className="btn rounded-pill shadow-lg py-1 mr-1 mytetring-bg-danger mytetring-font-size-12 mytetring-light mytetring-input" />
                                    {
                                        value.status === 1?
                                            <input type="button" value="Done" onClick={() => this.onUpdateTaskDone(value.id)} className="btn rounded-pill shadow-lg py-1 mr-1 mytetring-bg-secondary mytetring-font-size-12 mytetring-light mytetring-input" />
                                        :
                                            null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="h-100 mytetring-tasks-background">
                    {/* HEADER TASKS SECTION */}
                    <div className="container">
                        <div className="mytetring-tasks-content-position">
                            <div className="row justify-content-center">
                                <div className="col-6 h-100 text-left">
                                    {
                                        this.state.emailConfirmedMessage?
                                            <UncontrolledAlert className="border-0 mytetring-bg-danger mytetring-light">
                                                <span><FontAwesomeIcon icon={faExclamationCircle} className="fa-lg" /> {this.state.emailConfirmedMessage}</span>
                                            </UncontrolledAlert>
                                        :
                                            <span onClick={() => this.setState({modalOpen : true})} className="mytetring-clickable-element mytetring-font-size-20 mytetring-secondary">
                                                <FontAwesomeIcon icon={faPlusCircle} /><CreateTask text=" Create Task " className="font-weight-bold mytetring-clickable-element"></CreateTask>
                                            </span>
                                    }
                                </div>
                                <div className="col-6 h-100 text-right">
                                    <input type="button" value="Today" className="btn rounded-pill shadow-lg mx-2 mytetring-bg-secondary mytetring-light mytetring-input" />
                                    <input type="button" value="Upcoming" className="btn rounded-pill shadow-lg mx-2 border-light mytetring-bg-grey mytetring-light mytetring-input" />
                                    <input type="button" value="Done" className="btn rounded-pill shadow-lg mx-2 border-light mytetring-bg-grey mytetring-light mytetring-input" />
                                </div>
                                <div className="col-12 pt-3 pb-0">
                                    {
                                        this.state.alertMessage?
                                            this.state.alertMessage
                                        :
                                            null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    {/* MY TASKS SECTION */}
                    <div className="container py-3">
                        {
                            this.state.data?
                                this.state.data.length === 0?
                                    <div className="container">
                                        <div className="row align-items-center h-100 px-0 py-0">
                                            <div className="col-12 col-md-6 px-5 px-md-0">
                                                <h1 className="font-weight-bold mytetring-font-size-60">Hi,</h1>
                                                <h1 className="font-weight-light mytetring-font-size-60">Welcome To Our</h1>
                                                <h1 className="font-weight-light mytetring-font-size-60">Family!</h1>
                                            </div>
                                            <div className="col-6 d-none d-md-block">
                                                <img src={Peoples1} alt="" width="100%" />
                                            </div>
                                        </div>
                                    </div>
                                :
                                    this.mapDataTasks()
                            :
                                <div className="rounded shadow-lg mt-0 mb-5 px-5 py-5 text-center mytetring-bg-light mytetring-tasks-lists-position">
                                    <Loader type="ThreeDots" color="#005eb8" height={75} width={75} />
                                </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MyTasks