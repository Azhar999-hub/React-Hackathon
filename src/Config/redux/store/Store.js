import { configureStore } from "@reduxjs/toolkit";

import loginslice from "../reducer/Loginslice";
import signupslice from "../reducer/Signupslice";

const  Store = configureStore({
  reducer:{
    Login: loginslice,
    SignUp: signupslice,
    
  }
})

export default Store;