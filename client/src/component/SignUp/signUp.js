import React, { Component } from "react";
// import './../SignUp/Log.css';
import axios from "axios";
import {Link,withRouter} from "react-router-dom";

 class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            Email :"",
            password:"",
            role:0

        };
      }


      handleChange(e){
        this.setState({
         [e.target.name]:e.target.value,
        })
    } ;


//     handleSubmit(e){
//         e.preventDefault();
//    axios.post("http://localhost:5000/signup",{ 
//     name:this.state.name,
//     email :this.state.Email,
//     password:this.state.password,
   
//   }).then((res)  => {
//    console.log(res.data) // array of object
//  }).catch((err) => { 
//    console.log(err);
//  });
//   }



  handleClick(e){
    e.preventDefault();
    console.log(e.target);
var role =0;
    if(e.target.id == 'company'){
        console.log('this is a company');
        role = 1; 
    }else {
        console.log('this is a user');
        role = 0;
    }
    console.log('rooooooooooooooole',this.state.role);
axios.post("http://localhost:5000/signup",{ 
username:this.state.name,
email :this.state.Email,
password:this.state.password,
role:role


}).then((res)  => {
console.log(res.data)// array of object
this.props.history.push('/Categories')
}).catch((err) => { 
console.log(err);
});
}




    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>name</label>
                    <input type="text"   value= {this.state.name} name="name" onChange={this.handleChange.bind(this)} className="form-control" placeholder="name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"   value= {this.state.Email} name="Email" onChange={this.handleChange.bind(this)} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"   value= {this.state.password} name="password" onChange={this.handleChange.bind(this)}   className="form-control" placeholder="Enter password" />
                </div>

                <button onClick={this.handleClick.bind(this)}   id="company" className="btn btn-primary btn-block"> Register As A Company </button>
                <button onClick={this.handleClick.bind(this)}   id ="volunteer" className="btn btn-primary btn-block">Register As A Volunteer</button>

                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </form>
        );
    }
}

export default withRouter(SignUp)