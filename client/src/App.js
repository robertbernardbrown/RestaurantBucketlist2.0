import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./components/Footer"
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import { BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
// import Bucketlist from "./pages/Bucketlist";
import Login from "./pages/Login";
import Registration from "./pages/Registration";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
            <Wrapper>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Registration}/>
              </Switch>
            </Wrapper>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;