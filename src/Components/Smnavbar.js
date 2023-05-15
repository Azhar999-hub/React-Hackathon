import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRegistration, Home, HomeMaxOutlined, Login, VerifiedUser } from '@mui/icons-material';
import { ListItemIcon } from '@mui/material';

const drawerWidth = 240;
// const navItems = ['Login', 'Sign up', 'Profile'];

function SmNavbar(props) {
  const navigation = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

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
      name: "Home",
      route: "Home",
      icon: <HomeMaxOutlined />,
    },
    
    {
      name: "Login",
      route: "Login",
      icon: <Login />,
    },
    {
      name: "Sigup",
      route: "Signup",
      icon: <AppRegistration/>,
    },
    {
      name: "Profile",
      route: "Profile",
      icon: <VerifiedUser/>,
    },
    
  ]);





  let moveScreen = (route) => {
    navigation(route);
  };




  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Car Booking App
      </Typography>
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
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
             Car Booking App
          </Typography>
          <Box  className="d-flex">
          {menuList.map((x, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => moveScreen(x.route)}>
              <ListItemIcon>{x.icon}</ListItemIcon>
              <ListItemText primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
         
        </Typography>
      </Box>
    </Box>
  );
}


export default SmNavbar;