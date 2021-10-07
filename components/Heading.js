import React from 'react'
import { makeStyles } from '@material-ui/core'
import logo from '../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
    heading: {
        position: 'sticky',
        top: 0,
        zIndex: 1,
        marginBottom:20,
    },
    logo: {

        background: 'pink',

    },
    navbar: {
        color: 'white',
        background: 'blue',
        height: 38,

        '& a': {
            display: 'inline-block',
            padding: '8px 10px',
            marginRight: 2,
            '&:hover': {
                color: 'black',
                background: '#e4e4e4',

            }
        }
    },
    active: {
        color: 'black',
        background: '#e4e4e4'
    }

}))
const nav = [
    { name: 'Home', link: '/' },
    { name: 'Contact us', link: '/contactus' },
    { name: 'About Us', link: '/aboutus' },
    { name: 'Privacy policy', link: '/privacy-policy' },
    { name: 'Terms & conditions', link: '/terms-conditions' },
]
function Heading() {
    const classes = useStyles();
    const router = useRouter();
    console.log(router.pathname)
    return (
        <div className={classes.heading}>
            <div className={classes.logo}>
                <Image src={logo} alt='logo' height={60} />
            </div>

            <div className={classes.navbar}>
                {nav.map((item) => (
                    <Link key={item.name} href={item.link} >
                        <a className={router.pathname === item.link ? classes.active : ''}>{item.name}</a>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default Heading
