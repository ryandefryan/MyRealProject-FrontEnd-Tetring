import React, { Component } from 'react';

export class LandingPage extends Component {

    state = {
        loginStatus : false
    }

    componentDidMount(){
        this.onGetUser()
    }

    onGetUser = () => {
        var idUser = localStorage.getItem('id')

        if(idUser){
            this.setState({loginStatus : true})
        }
    }

    onRedirectToLogin = () => {
        window.location = '/login'
    }

    render() {
        return(
            <div>
                {
                    this.state.loginStatus? null : this.onRedirectToLogin()
                }
            </div>
        )
    }
}

export default LandingPage