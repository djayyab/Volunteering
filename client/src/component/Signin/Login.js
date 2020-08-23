

import React, { Component } from "react";
import "./Log.css"
import axios from "axios";

import {Link,withRouter} from "react-router-dom";


class Login extends Component {

    state = {
       
        username:'',
        password:'',
        token: '',
    };
  
    componentDidMount() {
        var toke = localStorage.getItem('token');
    
        if (toke) {
        //   this.getUser(toke);
        }
      }




  handleChange(e){
    this.setState({
     [e.target.name]:e.target.value,
    })
} ;



handleSubmit(e){
    e.preventDefault();
    
axios.post("http://localhost:5000/login",{ 

    username :this.state.username,
    password:this.state.password,
})
.then(res => {
    this.setState({
      token: res.data.token,
    });
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('role', res.data.role);
    this.props.history.push('/Categories')
    // localStorage.setItem('uid', res.data.user_id);
    // this.getUser();
  })
  .catch(err => {
    console.error(err);
  });



}

    render() {
        return (
            
            
            <form onSubmit={this.handleSubmit.bind(this)}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>username</label>
                    <input type="text"    value = {this.state.username} name="username" onChange={this.handleChange.bind(this)} className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"  value = {this.state.password} name="password" onChange={this.handleChange.bind(this)} className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button 
                    type="submit" className="btn btn-primary btn-block">Submit</button>
                 <p className="forgot-password text-right">
                    If you do not have account registered <a href="/signUp">signUp!</a>
                </p>
               
            </form>
        );
    }
}

export default withRouter(Login)