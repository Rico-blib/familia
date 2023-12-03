import React, { useState } from "react";
import "./Auth.css";
import {useDispatch, useSelector} from 'react-redux'
import { logIn, signUp } from "../../actions/AuthAction";
import { useNavigate } from "react-router-dom";


const Auth = () => {
  const [isSignUp, setisSignUp] = useState(true);
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.authReducer.loading)
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpass: "",
    username: "",
  });
  const [confirmPass, setconfirmPass] = useState(true);

  const navigate = useNavigate();


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      navigate("/home");
       data.password === data.confirmpass ? dispatch(signUp(data)) : setconfirmPass(false);
       
      } else {
        navigate("/home");
        dispatch(logIn(data))
      }
  };

  const resetForm = () => {
    setconfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      password: "",
      confirmpass: "",
      username: "",
    });
  };

  return (
    <div className="auth">
      {/*left side*/}
      <div className="a-left">
        <img
          src="https://img.freepik.com/free-vector/gradient-family-symbol_23-2149276161.jpg?w=740&t=st=1687261632~exp=1687262232~hmac=e8dad823e4124293ba4543681ea0e56a390a458f6e5a1497a80479e37ea58cd1"
          alt=""
        />
        <div className="webname">
          <h1>Familia </h1>
          <h6>Learn more about your family</h6>
        </div>
      </div>
      {/* Right side*/}
      <div className="a-right">
        <form action="" className="bioForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Log In"}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              placeholder="User Name"
              className="infoInput"
              name="username"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="infoInput"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="infoInput"
                name="confirmpass"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            * Confirm Password is not same
          </span>

          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setisSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? " Already have an account. Login!"
                : "Don't have an account? Sign Up"}
            </span>
          </div>
          <button className="btn infobtn" type="submit" disabled={loading}>
            {loading? "Loading...": isSignUp ? "Signup" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
