import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let userDetails = useSelector((state)=>{
    return state.user
  })
  console.log(userDetails)

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        history("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const register = (e) => {
    console.log(auth);
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("auth", auth);
        if (auth) {
          history("/");
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="./images/logo.png" alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
          <button onClick={register} className="login__resiterButton">
            Create Your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
