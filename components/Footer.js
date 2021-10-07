import { Divider, IconButton, makeStyles } from '@material-ui/core'
import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from 'next/link';

const useStyles = makeStyles({
    root: {
        background: "#1c1c1c",
        textAlign: 'center',
        padding: 15,
        marginTop: 15,
        color: 'white',
        fontSize: 13,
        marginLeft:-5,
        marginRight:-15,
    },
    social: {
        '& a': {
            opacity: 0.75
        }
    },
    navbar: {
        padding: 10,
        '& a': {
            display: 'inline-block',
            padding: '0 10px',
            '&:hover': {
                textDecoration: 'underline',
                color: 'blue',
            }
        }
    },
    instaColor: {
        background: 'radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)'
    },


})

function Footer() {
    const classes = useStyles()
    return (
        <section className={classes.root}>
            <div className={classes.social}>
                <a href="#">
                    <IconButton aria-label='facebook-icon' style={{ color: '#3b5998' }}>
                        <FacebookIcon />
                    </IconButton>
                </a>
                <a href="#">
                    <IconButton aria-label='twitter-icon' style={{ color: '#00acee' }}>
                        <TwitterIcon />
                    </IconButton>
                </a>
                <a href="#">
                    <IconButton aria-label='youtube-icon' style={{ color: '#ff0000' }}>
                        <YouTubeIcon />
                    </IconButton>
                </a>
                <a href="#">
                    <IconButton aria-label='linkedIn-icon' style={{ color: '#0e76a8' }}>
                        <LinkedInIcon />
                    </IconButton>
                </a>
                <a href="#">
                    <IconButton aria-label='instagram-icon' >
                        <InstagramIcon className={classes.instaColor} />
                    </IconButton>
                </a>
            </div>
            <Divider style={{ backgroundColor: 'white', height: 0.2 }} />
            <div className={classes.navbar} >
                <Link href="/" >
                    <a>Home</a>
                </Link>
                <Link href="/aboutus" >
                    <a>About Us</a>
                </Link>
                <Link href="/contactus" >
                    <a>Contact Us</a>
                </Link>
                <Link href="/terms-conditions" >
                    <a>Terms & conditions</a>
                </Link>
                <Link href="/privacy-policy" >
                    <a>Privacy policy</a>
                </Link>
            </div>
            <Divider style={{ backgroundColor: 'white', marginBottom: 10, height: 0.2 }} />
            <div>
                <span>© 2021 kbcqna | All Rights Reserved</span>
            </div>
        </section>
    )
}

export default Footer
