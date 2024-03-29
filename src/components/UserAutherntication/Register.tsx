import React, { useState } from "react";
import { Link } from "react-router-dom";
import {registerWithEmailAndPassword, signInWithGoogle} from "../../services/authentications";
import {useLoginAuth} from "../../hooks/useLoginAuth";

const Register = () => {
    const { email, setEmail} = useLoginAuth()

    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };


    return (
        <div className="register">
            <div className="register__container">
                <input
                    type="text"
                    className="register__textBox"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                />
                <input
                    type="text"
                    className="register__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="register__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button className="register__btn" onClick={register}>
                    Register
                </button>
                <button
                    onClick={signInWithGoogle}
                >
                    Register with Google
                </button>
                <div>
                    Already have an account? <Link to="/">Login</Link> now.
                </div>
            </div>
        </div>
    );
}
export default Register;