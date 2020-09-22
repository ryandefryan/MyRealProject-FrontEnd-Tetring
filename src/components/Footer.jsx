import React, { Component } from 'react';
import TetringLogo from './../supports/images/Tetring Logo.png';

class Footer extends Component {
    render(){
        return(
            <div className="border-top">
                <div className="container mt-0">
                    <div className="row justify-content-between py-3">
                        <div className="col-6 text-left">
                            <img src={TetringLogo} alt="Footer Logo" width="40%" className="d-none d-md-block" />
                            <img src={TetringLogo} alt="Footer Logo" width="85%" className="d-block d-md-none" />
                        </div>
                        <div className="col-6 text-right">
                            <div className="mytetring-grey">
                                © 2020 Tetring, Task Monitoring | Privacy | Terms
                            </div>
                            <div className="mytetring-main-light">
                                Tetring Created Jus't For Portfolio Only!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer