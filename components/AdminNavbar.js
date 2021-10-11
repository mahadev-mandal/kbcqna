import { Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import QueueIcon from '@material-ui/icons/Queue';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    active: {
        background: "blue",
        '& *': {
            color: 'black'
        }
    }
})

const navbar = [
    {
        navText: "dashboard",
        navIcon: <DashboardIcon />,
        navLink: "/admin/dashboard"
    },
    {
        navText: "users",
        navIcon: <PersonIcon />,
        navLink: "/admin/users/1"
    },
    {
        navText: "add user",
        navIcon: <PersonAddIcon />,
        navLink: "/admin/adduser"
    },
    {
        navText: "questions",
        navIcon: <QuestionAnswerIcon />,
        navLink: "/admin/questions/1"
    },
    {
        navText: "add question",
        navIcon: <QueueIcon />,
        navLink: "/admin/addquestion"
    },
]

function AdminNavbar() {
    const classes = useStyles()
    const router = useRouter();

    const handleLogout = () => {
        Cookies.remove('jwt')
        if(!Cookies.get('jwt')){
            router.replace('/')
        }
    }

    return (
        <>
            <List>
                {navbar.map((nav) => (
                    <Link href={nav.navLink} key={nav.navText} >
                        <a >
                            <ListItem button className={router.asPath == nav.navLink ? classes.active : ""} >
                            <ListItemIcon >{nav.navIcon}</ListItemIcon>
                            <ListItemText primary={nav.navText} />
                        </ListItem>
                    </a>
                    </Link>
                ))}
            <Button onClick={handleLogout}>
                <ListItem >
                    <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                    <ListItemText primary={"Logout"} />
                </ListItem>
            </Button>
        </List>
        </>
    )
}

export default AdminNavbar
