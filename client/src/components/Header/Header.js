import React from "react";
// import "./Header.css";

const Header = () => (
    <div className="jumbotron">
        <div className="container">
            <a href="/" style={{textDecoration:"None"}}>
                <h1 className="display-4">Restaurant Bucketlist</h1>
            </a>
            <hr className="my-4"/>
            <p>Sign-in and make a list of restaurants to visit!</p>
        </div>
    </div>
)

export default Header;