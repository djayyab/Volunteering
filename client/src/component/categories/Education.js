import React from 'react';
import axios from 'axios';
import Navbar from "./../Navbar/Navbar"

 class Education extends React.Component {
  state = {
    voledu: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/Education`)
      .then(res => {
        const voledu = res.data;
        this.setState({ voledu });
      })
  }

  render() {
    return (
        <div>
        <Navbar/>
      <ul>
        { this.state.voledu.map(voledu => <li>{voledu.Description}</li>)}
      </ul>
      </div>
    )
  }
}


export default Education;