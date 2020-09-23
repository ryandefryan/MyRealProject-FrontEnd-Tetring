import React, { Component } from 'react';

export class Login extends Component {
    render() {
        return(
            <div>
                {/* PAGE NOT FOUND SECTION */}
                <div className="mytetring-page-not-found-background">
                    <div className="container h-100 py-5">
                        <div className="row justify-content-center align-items-end h-100">
                            <div className="col-8 mt-0 mb-5 pt-0 pb-5 text-center">
                                <h1 className="mytetring-font-size-60"><span className="font-weight-bold">Ops!</span><span className="font-weight-light"> Page Not Found!</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login