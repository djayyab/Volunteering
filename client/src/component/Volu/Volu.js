import React from "react";
import axios from "axios";
import Navbar from "./../Navbar/Navbar";
import "./vol.css";




// import List from './components/itemList.js'

class Volu extends React.Component{
    state = {
        
        Volunteering_id:"",
        Category :"",
        Description:"",
        address:"",
        company_id:"",
        
    };
    // componentDidMount() {
    //     $.ajax({
    //       url: '/Volunteering',
    
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
    

    
    handleChange(e){
        this.setState({
         [e.target.name]:e.target.value,
        })
        console.log(this.state);
    } ;


//      handleSubmit(e){
//     axios.get("https://localhost:5000/Volunteering").then(result => {
//     const finalResult = result.data;
//     console.log(finalResult) // array of object
//   }).catch(err => {
//     console.log("Error",err);
//   });
//    }



     handleSubmit(e){
         e.preventDefault();
    axios.post("http://localhost:5000/Volunteering",{ 
        Volunteering_id:this.state.Volunteering_id,
    Category :this.state.Category,
    Description:this.state.Description,
    address:this.state.address,
    company_id:this.state.company_id,
   }).then((res)  => {
    console.log(res.data) // array of object
  }).catch((err) => { 
    console.log(err);
  });
   }


    render(){
        return(
            <div>
                <Navbar/>


                
                <h2 style={{Color: "lightblue"}}>Volunteering work</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                <lable>Volunteering Number</lable>
                    <br/>
                    <br/>
                    <input type="text" value= {this.state.Volunteering_id} name="Volunteering_id" onChange={this.handleChange.bind(this)}></input>
                    <br/>
                    <br/>
                    <lable>Category</lable>
                    <br/>
                    <input  type="text" value= {this.state.Category}  name= "Category" onChange={this.handleChange.bind(this)}></input>
                    <br/>
                    <lable>Description</lable>
                    <br/>
                    <br/>
                    <input  type="text" value= {this.state.Description} name="Description" onChange={this.handleChange.bind(this)}></input>
                    <br/>
                    <lable>address</lable>
                    <br/>
                    <input   type="text" value= {this.state.address} name="address" onChange={this.handleChange.bind(this)}></input>
                    <br/>
                    <br/>
                    
                    <lable>company Number</lable>
                    <br/>
                    <input  type="text" value= {this.state.company_id} name="company_id" onChange={this.handleChange.bind(this)}></input>
                    <br/>
                    <br/>
                      

                    <button class="btn btn-primary"> Add voluntering work</button>
                </form>


            </div>
        )
    }


}


export default Volu