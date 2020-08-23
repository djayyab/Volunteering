import React from 'react';
import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  
} from "react-router-dom";
 
// import{link, Route} from "react-router-dom"

import Volu from './component/Volu/Volu';
import Items from './component/Items/Items'
import Education from './component/categories/Education';
import Medical from './component/categories/Medical'
import SocialServices from './component/categories/SocialServices'
import Transportation from './component/categories/Transportation';
import Categories from './component/categories/Categories';
import   Login   from'./component/Signin/Login';
import  signUp from './component/SignUp/signUp';
import DisplayVolUser from './component/DisplayVolUser/DisplayVolUser'
// import Home from './component/home/Home'

// import cv from "../src/component/"


function App() {

  
  return (
  // <Home/>
//     <div>

// {/* <Categories/> */}
// {/* <Medical/> */}

// {/* <SocialServices/> */}
// {/* <Transportation/> */}
// {/* <Education/> */}

// {/* <Login/> */}
// {/* <signUp/> */}
// {/* <Login/> */}
// 


 <Router>
     <Route exact path="/" component={Categories} />
    <Switch>
      <Route exact path="/Categories" component={Categories} />
      <Route path="/Education" component={Education} />
      <Route path="/Medical" component={Medical} />
      <Route path="/SocialServices" component={SocialServices} />
      <Route path="/Transportation" component={Transportation} />
      <Route exact path="/Volunteering" component={Items} />
      <Route exact path="/addVolunteering" component={Volu} />
      <Route path="/Login" component={Login} />
      <Route path="/SignUP" component={signUp} />
      <Route path="/DisplayVolUser" component={DisplayVolUser} />
      
      
       {/* 
//       <Route path="/Profil"     component={Profil} />
//       <Route exact path="/:voluId" component={Show} /> */}
    </Switch>
     {/* <Link to="/Categories">Categories</Link> */}
   </Router>

  

// </div>
)

}

export default App;

// export default App;
// import React from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import List from './components/List.jsx'

// // import axios from "axios"

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: []
//     }
   
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);

//   }

//   //  handleSubmit(e){
//   //    axios.get("https://localhost:3000/items").then(result => {
//   //   const finalResult = result.data;
//   //   console.log(finalResult) // array of object
//   // }).catch(err => {
//   //   console.log("Error",err);
//   // });
//   //  }

  


//   componentDidMount() {
//     $.ajax({
//       url: '/items',

//       success: (data) => {
//         this.setState({
//           items: data
//         })
//         console.log(data);
//       },
//       error: (err) => {
//         console.log('err', err);
//       }
//     });
//   }

//   // save(){
//   //   $.ajax({
//   //     url: "/items",
//   //     type: 'POST',
//   //     data: {Name:"Hend",FavBookc:"math",topic:"math"},
//   //     contentType: 'application/json',
//   //     success: function (data) {
//   //       console.log('Success', data);
//   //     },
//   //     error: function (error) {
//   //       console.error('Error', error);
//   //     }
//   //   });
//   // }
 
//   handleChange(event) {
//     this.setState({items: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name here: ' + this.state.value);
//     event.preventDefault();
//   }


//   render () {
//     return (<div>
//       <h1>PreferencesBooks</h1>

//        <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.items} onChange={this.handleChange} />
//         </label><br></br><br></br><br></br>

//         <label>
//         favorite book:
//           <input type="text" value={this.state.items} onChange={this.handleChange} />
//         </label><br></br><br></br><br></br>

//         <label>
//          Topic:
//           <input type="text" value={this.state.items} onChange={this.handleChange} />
//         </label><br></br><br></br><br></br>


//         <input type="submit" value="Submit" />
//       </form> 
//       <br></br>

//       <List items={this.state.items}/>
//     </div>)
//   }
// }

// ReactDOM.render(<App />, document.getElementById('app'));
