import React, { Component } from 'react';
import { APPNAME } from '../../../settings';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer';


class Login extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div className="m-3">
                <div className="card mx-auto mt-5 shadow" style={{ maxWidth: "500px" }}>
                    <div className="card-body">
                        <i><h1 className="text-center">{APPNAME}</h1></i>
                        <form className="my-5">
                            <input type="text" placeholder="Username" className="form-control form-control my-3" name="username" required/>
                            <input type="password" placeholder="Password" className="form-control form-control my-3" name="password" required/>
                            <button className="btn btn-primary w-100">Log in</button>
                        </form>
                    </div>
                </div>
                <div className="card mx-auto mt-3 shadow" style={{ maxWidth: "500px" }}>
                    <div className="card-body text-center">
                        <Link to="/forgotpassword"><p>Forgot Password?</p></Link>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}



export default Login;