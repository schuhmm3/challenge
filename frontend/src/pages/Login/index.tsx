import React, { useState } from "react";
/** Libraries */
import { useHistory } from "react-router-dom";
/** Helpers */
import { setLocalStorage } from "helpers/localStorage";
/** Constants */
import { allowedUser, allowedPassword } from "constants/allowedUser";
/** Styles */
import "./style/login.scss";

export const Login = () => {
    const history = useHistory();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const simulateLogin = (user:string, password:string) => {
        if(user === allowedUser && password === allowedPassword){
            setLocalStorage(user);
            history.push("/")
        }
        else{
            setError(true);
        }
    }


    return (
        <div className="login">
            <div className="login__content">
                <div className="title">
                    <h2>BASF CHALLENGE</h2>
                </div>
                <div className="form">
                    <div className="login-form">
                        <input value={userName} type="text" placeholder="username" onChange={(e) => setUserName(e.target.value)}/>
                        <input value={password} type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                        <button onClick={() => simulateLogin(userName, password)}>login</button>
                        <p className="message">Welcome to <span>Basf Challenge</span></p>
                        <p className="message">{error && "Error"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}