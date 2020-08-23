import React from 'react';

import axios from 'axios';
import Navbar from "./../Navbar/Navbar";

 class Transportation extends React.Component {
  state = {
    voledu: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/transportation`)
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
        { this.state.voledu.map(voledu => <li>{voledu.desDescription}</li>)}
      </ul>
      </div>
    )
  }
}

export default Transportation;