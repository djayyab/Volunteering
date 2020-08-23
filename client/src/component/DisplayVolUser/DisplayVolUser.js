import React from 'react';

import axios from 'axios';
import Navbar from "./../Navbar/Navbar";

 class DisplayVolUser extends React.Component {
  state = {
    voleuser: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/voluser`)
      .then(res => {
        const voleuser = res.data;
        this.setState({ voleuser });
      })
  }

  render() {
    
    return (
      <div>
        <Navbar/>
      <ul>
        { this.state.voleuser.map(voleuser => <li>{voleuser.Volunteering_id}</li>)}
      </ul>
      </div>
    )
  }
}
export default DisplayVolUser;