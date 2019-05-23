import React from "react";
import axios from 'axios';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { number } from "prop-types";
import cookie from 'react-cookies';

class Login extends React.Component{
        state = {
            phone: '',
            password: '',
            pin: "" ,
            enter: "False"
        };
    handleSubmit = event => {
        console.log("ksjdb");
        event.preventDefault();
        axios.get("http://3.16.128.1/isValidUser?phone="+this.state.phone+"&password="+this.state.password+"&user_name="+this.state.pin)
        .then(res =>{
            this.setState({
                enter:res.data
            })
        })
        .then(cookie.save('phone',this.state.phone,{path: '/'}))
    }
    renderRedirect = () =>{
        if(this.state.enter=="True")
        {
            return <Redirect to='/user/home' />
        }

    }
    renderSignup = () =>{

            return <Redirect to='/register' />

    }
    render() {
        return (
            <div >
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                <label for="phone">Phone Number</label>
                <input type="text" id="phone" name="phone" onChange={event => {this.setState({phone:event.target.value});}} placeholder="Enter your username"></input>
                <br></br>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" onChange={event => {this.setState({password:event.target.value});}} placeholder="Enter your password"></input>
                <br></br>
                <label for="pin">Pin</label>
                <input type="password" name="pin" id="pin" onChange={event => {this.setState({pin:event.target.value});}} placeholder="Enter the pin"></input>
                <br></br>
                <button type="submit" >Login!</button>
                </form>
                {/* <button onClick={this.renderSignup}>Signup</button> */}
                {this.renderRedirect()}
            </div>

        );
    }
}


export default Login;