import React, { useState } from "react";
import logo from "../img/logo192.png"
import "./SignIn.css"
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom"

export default function SignIn() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const notifyA = (msg) => {
        toast.error(msg);
    }

    const notifyB = (msg) => {
        toast.success(msg);
    }


    const postData = () => {
        fetch("http://localhost:5000/signin", {
            method: "post",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({userName: userName, password: password})
        }).then(res => res.json())
        .then((data) => {
            if(data.error) {
                notifyA(data.error);
            } else {
                notifyB(data.message);
                navigate("/profile");
            }
        })
    }

    return (
        <div className="signIn">
            <div className="form-container">
                <div className="form">
                <img className="signInLogo" src={logo} alt=""/>
                    <p className="loginPara">
                        Sign in to explore your health!
                    </p>
                    <div>
                        <input type="text" name="userName" id="userName" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <input type="submit" id="submit-btn" value="Sign Up" onClick={()=>postData()}></input>
                </div>
                {/* <div className="formBottom">
                    Already have an account?&nbsp;
                    <Link to="/signin">
                        <span style={{color: 'blue', cursor: 'pointer'}}>Sign In</span>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}