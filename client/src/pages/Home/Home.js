import React from "react";

const Home = () => (
    <div>
        <p>Welcome to Home</p>
        <div className="btn-group">
            <a href="/">
                <button type="home" class="btn btn-primary">Home</button>
            </a>
            <a href="/login">
                <button type="login" class="btn btn-primary">Log-In</button>
            </a>
            <a href="/register">
                <button id="register" type="register" class="btn btn-primary">Register</button>
            </a>
        </div>
    </div>
)

export default Home;