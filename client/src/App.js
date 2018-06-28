import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer"
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
// import Home from "./pages/Home";
// import Bucketlist from "./pages/Bucketlist";
import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Wrapper>
            <Login/>
          </Wrapper>
        <Footer/>
      </div>
    );
  }
}

export default App;
