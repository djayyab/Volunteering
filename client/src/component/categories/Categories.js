import React from "react";
import axios from "axios";
import Navbar from "./../Navbar/Navbar";
import * as cc from "react-bootstrap"
import edu from './edu.jpeg'
import med from './med.jpeg'
import serv from './social services.jpeg'
import trans from './trans.jpeg'


// import Education from './component/categories/Education';
// import Medical from './component/categories/Medical'
// import socialServices from './component/categories/socialServices';
// import transportation from './component/categories/transportation';

 
 

// import{link, Route} from "react-router-dom";
// import {link} from "react-router-dom";
// import "./cat.css";

    class Categories extends React.Component{
      render(){
    return(
      
        <div>
       
           <Navbar/>



<cc.CardDeck>
           
           <cc.Card style={{ width: '18rem' }}>
  <cc.Card.Img variant="top" src={edu}/>
  <cc.Card.Body>
    <cc.Card.Title>Education Category</cc.Card.Title>
    <cc.Card.Text>
      Some quick example text to build on the cc.card title and make up the bulk of
      the cc.card's content.
    </cc.Card.Text>
    <cc.Button link href ='/Education' variant="primary">Education</cc.Button>
  </cc.Card.Body>
</cc.Card>


<cc.Card style={{ width: '18rem' }}>
  <cc.Card.Img variant="top" src={med} />
  <cc.Card.Body>
    <cc.Card.Title>Medical Category</cc.Card.Title>
    <cc.Card.Text>
      Some quick example text to build on the cc.card title and make up the bulk of
      the cc.card's content.
    </cc.Card.Text>
    <cc.Button link href ='/Medical' variant="primary">Medical Work</cc.Button>
  </cc.Card.Body>
</cc.Card>


<cc.Card style={{ width: '18rem' }}>
  <cc.Card.Img variant="top" src={serv} />
  <cc.Card.Body>
    <cc.Card.Title>Social Services Category </cc.Card.Title>
    <cc.Card.Text>
      Some quick example text to build on the cc.card title and make up the bulk of
      the cc.card's content.
    </cc.Card.Text>
    <cc.Button link href ='SocialServices' variant="primary">SocialServices</cc.Button>
  </cc.Card.Body>
</cc.Card>

</cc.CardDeck>



<cc.CardDeck>
<cc.Card style={{ width: '18rem' }}>
  <cc.Card.Img variant="top" src={trans} />
  <cc.Card.Body>
    <cc.Card.Title>Transportation </cc.Card.Title>
    <cc.Card.Text>
      Some quick example text to build on the cc.card title and make up the bulk of
      the cc.card's content.
    </cc.Card.Text>
    <cc.Button link href ='/Transportation Category' variant="primary">Transportation </cc.Button>
  </cc.Card.Body>
</cc.Card>
  <cc.Card>
    <cc.Card.Img variant="top" src="holder.js/100px160" />
    <cc.Card.Body>
      <cc.Card.Title>cc.Card title</cc.Card.Title>
      <cc.Card.Text>
        This cc.card has supporting text below as a natural lead-in to additional
        content.{' '}
      </cc.Card.Text>
    </cc.Card.Body>
    <cc.Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </cc.Card.Footer>
  </cc.Card>
  <cc.Card>
    <cc.Card.Img variant="top" src="holder.js/100px160" />
    <cc.Card.Body>
      <cc.Card.Title>cc.Card title</cc.Card.Title>
      <cc.Card.Text>
        This is a wider cc.card with supporting text below as a natural lead-in to
        additional content. This cc.card has even longer content than the first to
        show that equal height action.
      </cc.Card.Text>
    </cc.Card.Body>
    <cc.Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </cc.Card.Footer>
  </cc.Card>
</cc.CardDeck>



      </div>
)
}
}

export default Categories

    //     <Router>
    //     <Route exact path="/" component={Categories} />
    //    <Switch>
    //      <Route exact path="/Categories" component={Categories} />
    //      <Route path="/SignUP" component={SignUp} />
   
         
    //      {/* <Route path="/SignIN" component={Sigin} />
    //      <Route path="/SignUP" component={SignUp} />
    //      <Route path="/Profil" component={Profil} />
    //      <Route exact path="/:voluId" component={Show} /> */}
    //    </Switch>
    //    <Link to="/Categories"></Link>
      
    //  </Router>
   

