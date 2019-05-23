import React from "react";
import axios from 'axios';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { number } from "prop-types";

class Register extends React.Component {

        state = {
            username:"",
            name:"",
            phone:72,
            email:"",
            password:"",
            pin:6757,
            enter:"False",
            enter1:"False"
        };
    handleSubmit = event => {
        console.log("ksjdb");
        event.preventDefault();
        console.log("dfg");
        fetch("http://3.16.128.1/doRegistration",{
            method:'POST',
            headers:{
                "Content-Type":'application/json'
            },
            body:JSON.stringify({
                "user_name" : this.state.username,
                "name":this.state.name,
                "phone": this.state.phone,
                "is_otp_verified":"1",
                "address_id":3764782,
                "email":this.state.email,
                "is_email_verified":"1",
               "password":this.state.password,
                "pin":this.state.pin,
                "photo":"sjbdjm.jpg",
                "user_id": this.state.phone
            })
       })
    }
    renderRedirect = () =>{
        if(this.state.enter=="True")
        {
            return <Redirect to='/user/home' />
        }

    }
    renderLogin = () =>{

        return <Redirect to='/login' />

}
    render() {
        return (
            <div >
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" onChange={event => {this.setState({username:event.target.value});}} placeholder="Enter your username"></input>
                <br></br>
                
                <label for="name">Name</label>
                <input type="text" id="name" name="name" onChange={event => {this.setState({name:event.target.value});}} placeholder="Enter your username"></input>
                <br></br>
                
                <label for="phone">Phone Number</label>
                <input type="number" id="phone" name="phone" onChange={event => {this.setState({phone:event.target.value});}} placeholder="Enter your username"></input>
                <br></br>
                
                <label for="email">Email id</label>
                <input type="text" id="email" name="email" onChange={event => {this.setState({email:event.target.value});}} placeholder="Enter your username"></input>
                <br></br>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" onChange={event => {this.setState({password:event.target.value});}} placeholder="Enter your password"></input>
                <br></br>
                <label for="pin">Pin</label>
                <input type="number" name="pin" id="pin" onChange={event => {this.setState({pin:event.target.value});}} placeholder="Enter the pin"></input>
                <br></br>
                <button type="submit" onClick = {this.handleSubmit}>Register!</button>
                </form>
                <p>Already a user?<span onClick={this.renderLogin}>Login</span></p>
                {this.renderRedirect()}
            </div>

        );
    }
}


export default Register;