import React from "react";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { add } from "../redux/reducer/signupslice";

const Signup = () => {
const dispatch = useDispatch();
const navigatte = useNavigate();

  const loginUser = () => {
    let obj = {
      email: "test@test.com",
      password: "123456",
    };
    dispatch(add(obj));
    navigatte('./home')
  };

  return (
    <>
      <h1>SignUp</h1>
      <button onClick={loginUser}>SignUp User</button>
    </>
  );
};

export default Signup;
