import React from "react";
import axios from "axios";
import Volu from './../Volu/Volu';
import * as cc from "react-bootstrap"
import Navbar from "./../Navbar/Navbar"
var jwtDecode = require('jwt-decode');
// import List from './components/itemList.js'

class Items extends React.Component{
    state = {
        items:[]
    };

    
    componentDidMount(){
    axios.get("http://localhost:5000/Volunteering").then(result => {
    const finalResult = result.data;
    console.log(finalResult) // array of object
    this.setState({items:finalResult})
  }).catch(err => {
    console.log("Error",err);
  });
   }

   handleApply(v_id){
    var decode = jwtDecode(localStorage.getItem('token'))
    var role = localStorage.getItem('role')
    console.log(decode)
    console.log('volunteeeeeeering id',v_id)
    console.log(localStorage.getItem('token'))
    console.log(localStorage.getItem('role'))

   axios.post("http://localhost:5000/Apply",{ 
   Volunteering_id:v_id,
   token:decode,
   user_id:decode.userId,
   role:role


}).then((res)  => {
console.log(res.data) // array of object
}).catch((err) => { 
console.log(err);
});
}

  //  handleapply(){
  //   Volunteering_id = this.item.Volunteering_id 
  //  }

   render(){
    return(
        <div>
       <Navbar/>
        
     
        <ul>
        
          {this.state.items.map((element,index)=>(
           
          
            <cc.Card  key={index} style={{ width: '100rem' }}>

            <cc.Card.Body>
  
            <cc.Card.Text>
          
          {element.Category}
          .....

          {element.Description}
          ....
          
          {element.address}
         .....

      
          <br></br>
           </cc.Card.Text>
          <cc.Button variant="primary" onClick={(e) => { e.preventDefault();this.handleApply(element.Volunteering_id)}} >Apply</cc.Button>
          </cc.Card.Body>
          </cc.Card>
        

          ))}
        </ul>
        </div>
    );
     
    };
}




export default Items;