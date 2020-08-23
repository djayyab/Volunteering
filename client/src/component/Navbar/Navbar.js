import React from "react";
import "./Nav.css";
import { Button } from "react-bootstrap";
import * as ReactBootstrap from "react-bootstrap";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      word: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.word);
  };


  render() {
    if (localStorage.getItem('role')=== 0) {
      return (
        <div>
          <ReactBootstrap.Navbar sticky="top" bg="dark" variant="dark">
            <ReactBootstrap.Navbar.Brand href="/" style={{ color: "rgb(58, 101, 161)" }}>
            VOLUNTEER-WORK
            </ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Nav className="mr-auto">
              <ReactBootstrap.Nav.Link href="/">Home</ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="/Profil">
                Welcome{" "}
                <a href="/Profil">{localStorage.getItem("Name")}</a>
              </ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="/Login">
                Sign In
              </ReactBootstrap.Nav.Link>
              
              
              <ReactBootstrap.Nav.Link href="/addVolunteering">Add Volunteering</ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="/">

                <a
                  onClick={() => {
                    localStorage.clear();
                  }}
                  href="/"
                >
                  Logout
                </a>
              </ReactBootstrap.Nav.Link>
            </ReactBootstrap.Nav>
            {/* <ReactBootstrap.Form inline onSubmit={this.handleSubmit}>
              <ReactBootstrap.FormControl
                onChange={this.handleChange}
                type="text"
                name="word"
                placeholder="Search video"
                className="Searchbox"
                value={this.state.word}
              />
              <Button
                onClick={this.handleSubmit.bind(this)}
                variant="outline-info"
              >
                Search
              </Button>
            </ReactBootstrap.Form> */}
          </ReactBootstrap.Navbar>
        </div>
      );
    } else {
      return (
        <div>
          <ReactBootstrap.Navbar sticky="top" bg="dark" variant="dark">
            <ReactBootstrap.Navbar.Brand href="/" style={{ color: "rgb(58, 101, 161)" }}>
            VOLUNTEER-WORK            </ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Nav className="mr-auto">
              <ReactBootstrap.Nav.Link href="/">Home</ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="/Login">
                Sign In
              </ReactBootstrap.Nav.Link>
              
              <ReactBootstrap.Nav.Link href="/Volunteering">Volunteering work</ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="/addVolunteering">Add Volunteering</ReactBootstrap.Nav.Link>
            </ReactBootstrap.Nav>
            {/* <ReactBootstrap.Form inline onSubmit={this.handleSubmit}>
              <ReactBootstrap.FormControl
                onChange={this.handleChange}
                type="text"
                placeholder=""
                className="Searchbox"
                value={this.state.word}
              />
              <Button
                onClick={this.handleSubmit.bind(this)}
                variant="outline-info"
              >
                Search
              </Button>
            </ReactBootstrap.Form> */}
          </ReactBootstrap.Navbar>
        </div>
      );
    }
  }
}
export default Navbar;
