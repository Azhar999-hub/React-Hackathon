import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Person3Icon from "@mui/icons-material/Person3";
import { Scanner } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";

import * as React from "react";

import { Route, Routes, useNavigate } from "react-router-dom";

import { FidgetSpinner } from "react-loader-spinner";

import { getAuth, signOut } from "firebase/auth";

import app from "../Config/Firebaseconfig";
import { checkAuth } from "../Config/Firebasemethods";

import Testing from "./Testing";
import Users from "./Users";

const auth = getAuth(app);

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigation = useNavigate();

  const [menuList, setMenuList] = React.useState([
    // {
    //   name: "Course",
    //   route: "Course",
    //   icon: <LaptopChromebookIcon />,
    // },
    // {
    //   name: "Registration Control",
    //   route: "Registrationcontrol",
    //   icon: <AppRegistrationIcon />,
    // },
    // {
    //   name: "Result",
    //   route: "Result",
    //   icon: <GradingIcon />,
    // },
    // {
    //   name: "Students",
    //   route: "Students",
    //   icon: <PersonIcon />,
    // },
    // {
    //   name: "Quiz",
    //   route: "Quiz",
    //   icon: <QuizIcon />,
    // },
    // {
    //   name: "Todos",
    //   route: "Todos",
    //   icon: <ListIcon />,
    // },
    // {
    //   name: "Users",
    //   route: "User",
    //   icon: <Person2Icon />,
    // },
    // {
    //   name: "Feedback",
    //   route: "Feedback",
    //   icon: <FeedbackIcon />,
    // },
    {
      name: "Users",
      route: "Users",
      icon: <Person3Icon />,
    },
    {
      name: "Testing",
      route: "Testing",
      icon: <Scanner />,
    },
  ]);

  const [user, setUser] = React.useState(null);
  let [loader, setLoader] = React.useState(false);

  React.useEffect(() => {
    setLoader(true);
    checkAuth()
      .then((email) => {
        setUser([...email]);
        setLoader(false);
      })
      .catch((err) => {
        console.log("User not Ligin", err);
      });
  }, []);

  let userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User Sign Out Successfully");
        navigation("/Login");
      })
      .catch((err) => {
        console.log("User sign out Error", err);
      });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let moveScreen = (route) => {
    navigation(route);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuList.map((x, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => moveScreen(x.route)}>
              <ListItemIcon>{x.icon}</ListItemIcon>
              <ListItemText primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        <ListItem className="text-danger link">
          <ListItemIcon onClick={userSignOut}>
            <LogoutIcon className="text-danger" />
          </ListItemIcon>
          <ListItemText onClick={userSignOut}>Sign Out</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap component="div">
            <span className="badge bg-gradient">
              <DashboardIcon fontSize="medium" /> Dashboard
            </span>
          </Typography>
          <Typography className="mx-auto" variant="h6" noWrap component="div">
            <div className="d-flex justify-content-center align-items-center text-danger">
              {loader ? (
                <FidgetSpinner
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="dna-loading"
                  wrapperStyle={{}}
                  wrapperClass="dna-wrapper"
                  ballColors={["#ff0000", "#00ff00", "#0000ff"]}
                  backgroundColor="black"
                />
              ) : user ? (
                <h4 className="res">
                  Welcome,{" "}
                  <span className="text-primary badge badge-pill bg-warning">
                    {" "}
                    {user}
                  </span>{" "}
                  to my app
                </h4>
              ) : (
                <h2>Welcome to my app!</h2>
              )}
            </div>
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="Users" element={<Users />} />
          <Route path="Testing" element={<Testing />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default Dashboard;
