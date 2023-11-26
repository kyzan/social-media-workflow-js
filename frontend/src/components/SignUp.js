import React from "react";
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import logo from "../img/logo192.png"
import "./SignUp.css"
import { toast } from 'react-toastify';


export default function SignUp() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const notifyA = (msg) => {
        toast.error(msg);
    }

    const notifyB = (msg) => {
        toast.success(msg);
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    const postData = () => {
        //checking email
        if(!emailRegex.test(email)) {
            toast.error("Invalid Email");
            return;
        } else if(!passRegex.test(password)) {
            toast.error("Invalid Password");
            return;
        }
        
        fetch("http://localhost:5000/signup", {
            method: "post",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({name: name, userName: userName, email: email, password: password})
        }).then(res => res.json())
        .then(data => {
            if(data.error) {
                notifyA(data.error);
            } else {
                notifyB(data.message);
                navigate("/signin");
            }
            console.log(data)
        });
    }

    return (
        <div className="signUp">
            <div className="form-container">
                <div className="form">
                <img className="signUpLogo" src={logo} alt=""/>
                    <p className="loginPara">
                        Unlock all your fitness goals <br/>
                        Start your journey here
                    </p>
                    <div>
                        <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <input type="text" name="name" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div>
                        <input type="text" name="username" id="username" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <p className="loginPara">You agree to all terms and conditions</p>
                    <input type="submit" id="submit-btn" value="Sign Up" onClick={() => postData() }></input>
                </div>
                <div className="formBottom">
                    Already have an account?&nbsp;
                    <Link to="/signin">
                        <span style={{color: 'blue', cursor: 'pointer'}}>Sign In</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}