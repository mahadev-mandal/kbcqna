import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { alpha } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PolicyIcon from '@material-ui/icons/Policy';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Link from 'next/link'
import { useRouter } from 'next/router';
import Footer from './Footer'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    marginTop:55,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop:55,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    background:'blue',
    '& *':{
      color:'white',
    }
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(8),
    paddingLeft:theme.spacing(2),
    marginRight:-10,
    [theme.breakpoints.up('sm')]:{
      paddingLeft:40,
      paddingRight:40,
    },
    [theme.breakpoints.up('md')]:{
      paddingLeft:80,
      paddingRight:80,
    },
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  leftSide:{
    '& *':{
      color:'white',
    },
    background:"linear-gradient(to bottom,rgba(255,0,0,0.5),rgba(255,69,0,0.5),rgba(255,165,0,0.5))",
    height:'100%',
  },
  active:{
    background:'green',
    borderRadius:"0 10px 10px 0",
    '&:hover':{
      background:'green',
    }
  }
}));

const navbar = [
  {text:"Home",icon:<HomeIcon/>,link:"/"},
  {text:"Questions",icon:<QuestionAnswerIcon/>,link:"/questions"},
  {text:"About Us",icon:<InfoIcon/>,link:"/aboutus"},
  {text:"Constact Us",icon:<ContactMailIcon/>,link:"/contactus"},
  {text:"Terms & Conditions",icon:<AcUnitIcon/>,link:"/terms-conditions"},
  {text:"Privacy Policy",icon:<PolicyIcon/>,link:"/privacy-policy"},
]

export default function DrawerLeft({ drawerContent }) {
  const router = useRouter()
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant='h4'>
              KBCQNA
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
          </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader} >
            <Typography variant="h4" style={{fontFamily:'cursive'}}>KBCQNA</Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List className={classes.leftSide}>
            {navbar.map((nav)=>(
              <Link href={nav.link} key={nav.text}>
                <ListItem button  className={router.asPath===nav.link?classes.active:""}>
                  <ListItemIcon >
                    {nav.icon}
                  </ListItemIcon>
                  <ListItemText primary={nav.text}/>
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
        <main 
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          {drawerContent}
        </main>
      </div>
      <Footer/>
    </>
  );
    
} 
  
