import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import KeyIcon from "@mui/icons-material/Key";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LoginIcon from "@mui/icons-material/Login";

import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import SmButton from "../Components/Smbutton";
import SmInput from "../Components/Sminput";
import { userLogin, postFbData } from "../Config/Firebasemethods";

const Login = () => {
  const [val, setval] = useState({});
  const [msg, setErrorMsg] = useState("");
  const [loader, setloader] = useState(false);
  let navigation = useNavigate();

  let goToSignUp = () => {
    navigation("/SignUp");
  };

  let loginUser = () => {
    setloader(true);
    userLogin(val)
      .then((res) => {
        setloader(false);
        navigation("/Dashboard");
      })
      .catch((err) => {
        setloader(false)
        setErrorMsg(err);
        console.log(err);
      });
  };

  // let handleChange = (event) => {
  //   postFbData("UserType", type)
  //     .then((res) => {
  //       setType({ ...type, userType: event.target.value });
  //       console.log("userType: ", event.target.value);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {}, []);


  return (
    <div>
      <Box
        sx={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center">
        <Paper className="p-4" elevation={8}>
          <Typography className=" text-center text-primary mb-4" variant="h3">
            <span className="badge bg-primary">
              Login <LoginIcon fontSize="large" />{" "}
            </span>
          </Typography>
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
          <Box className="mt-4 d-flex justify-content-center align-items-center">
            <SmButton
              size="large"
              variant="contained"
              loading={loader}
              onClick={loginUser}
              label="Login"
            />
          </Box>
          <Box className="mt-4 d-flex justify-content-center align-items-center">
            <p>
              Not a member?
              <a href=" " onClick={goToSignUp}>
                SignUp
              </a>
            </p>
          </Box>
          <Box className="mt-4 d-flex justify-content-center align-items-center text-danger">
            <p>{msg}</p>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default Login;
