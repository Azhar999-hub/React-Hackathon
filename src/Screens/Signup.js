import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import KeyIcon from "@mui/icons-material/Key";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonIcon from "@mui/icons-material/Person";
import FingerprintIcon from "@mui/icons-material/Fingerprint";

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import SmButton from "../Components/Smbutton";
import SmInput from "../Components/Sminput";
import SmSelect from "../Components/Smselect";
import { userSignUp } from "../Config/Firebasemethods";

const SignUp = () => {
  let navigation = useNavigate();

  const [val, setval] = useState({});
  const [loader, setloader] = useState(false);
  const [msg, setErrorMsg] = useState("");
  const [vals, setVals] = useState([1,2]);
  const [opt, setOpt] = useState("");

  const [userType, setUserType] = useState('');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
    setUserType(event.target.value);
  };

  let signUpUser = () => {
    setloader(true);
    userSignUp(val,vals)
      .then((res) => {
        setloader(false);
        navigation("/Dashboard");
      })
      .catch((err) => {
        setloader(false);
        setErrorMsg(err);
        console.log(err);
      });
  };

  let goToLogin = () => {
    navigation("/login");
  };

  return (
    <div>
      <Box
        sx={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center">
        <Paper className="p-4" elevation={8}>
          <Box>
            <Typography className=" text-center text-primary mb-4" variant="h3">
              <span className="badge bg-primary">
                Sign Up <FingerprintIcon fontSize="large" />{" "}
              </span>
            </Typography>
          </Box>
          <Box>
            <SmInput
              icon={<PersonIcon color="primary" />}
              label="Enter User Name"
              variant="standard"
              onChange={(e) => setval({ ...val, userName: e.target.value })}
            />
          </Box>
          <Box className="mt-3">
            <SmInput
              variant="standard"
              icon={<AlternateEmailIcon color="primary" />}
              label="Enter User Email"
              onChange={(e) => setval({ ...val, email: e.target.value })}
            />
          </Box>
          <Box className="mt-3">
            <SmInput
              variant="standard"
              icon={<KeyIcon color="primary" />}
              type="password"
              label="Enter User Password"
              onChange={(e) => setval({ ...val, password: e.target.value })}
            />
          </Box>
          <Box className="mt-3">
          <select value={userType} onChange={handleUserTypeChange}>
          <option value="">Select User Type</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
          {/* <select name="" id=""  onChange={(e) => setval({ ...vals, userType: e.target.value })} >
          <option value="">Select Option</option>
          {vals.map((options, index) => {
            return (
              <option value={options} key={index}>
                {options}
              </option>
            );
          })}
        </select> */}
          </Box>
          <Box className="mt-4 d-flex justify-content-center align-items-center">
            <SmButton
              size="large"
              variant="contained"
              loading={loader}
              onClick={signUpUser}
              label="Sign Up"
            />
          </Box>
          <Box className="mt-4 d-flex justify-content-center align-items-center">
            <p>
              Already have an account{" "}
              <a href=" " onClick={goToLogin}>
                Log in
              </a>
            </p>
          </Box>
          <Box className="mt-4 d-flex justify-content-center text-danger">
            <p style={{ boxSizing: "border-box" }}>{msg}</p>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default SignUp;
