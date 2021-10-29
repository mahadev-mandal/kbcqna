import React from 'react'
import { makeStyles } from '@material-ui/core'
import logo from '../public/logo.png'
import Image from 'next/image';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
    heading: {
        position: 'sticky',
        top: 0,
        zIndex: 1,
        textAlign: "center",
        width: '100%',

    },
    logo: {
        background: 'pink',

    },
}))
function Heading() {
    const classes = useStyles();
    return (
        <div className={classes.heading}>
            <Link href="/">
                <a >
                    <div className={classes.logo}>
                        <Image src={logo} alt='logo' height={60} />
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default Heading
