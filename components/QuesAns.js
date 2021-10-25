import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { ListItem, ListItemIcon, Typography, Paper } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import ShareIcon from '@material-ui/icons/Share';
import EmailIcon from '@material-ui/icons/Email';
import { useRouter } from 'next/router';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { baseURL } from '../helpers/constants'

const useStyles = makeStyles((theme) => ({
    formControl: {


    },
    button: {
        marginLeft: 18
    },
    li: {
        marginBottom: 10,
        fontSize: 16
    },
    helperText: {
        marginLeft: 20,
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    shareIcons: {
        textAlign: "cente",
        marginLeft: 20
    },
    instaColor: {
        background: 'radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)'
    },
}));

export default function QuesAns({ ques }) {
    const classes = useStyles();
    const router = useRouter();
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    };
    useEffect(() => {
        setShow(false)
    }, [ques])
    function openNewWindow (event) {
        window.open(`https://api.whatsapp.com://send?text=${baseURL}/${router.asPath}`,"",'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600')
    }
    return (
        <Paper style={{ padding: '10px 10px 10px 0' }}>
            <FormControl
                component="fieldset"
                className={classes.formControl}
            >
                <div className={classes.shareIcons}>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${baseURL}/${router.asPath}`} target="_blank" rel="noreferrer" onClick={openNewWindow}>
                        <IconButton aria-label='facebook-icon' style={{ color: '#3b5998' }}>
                            <FacebookIcon />
                        </IconButton>
                    </a>
                    <a href={`https://twitter.com/share?url=${baseURL}/${router.asPath}&text=${ques.question}`}target="_blank" rel="noreferrer">
                        <IconButton aria-label='twitter-icon' style={{ color: '#00acee' }}>
                            <TwitterIcon />
                        </IconButton>
                    </a>
                    <a href={`https://api.whatsapp.com://send?text=${baseURL}/${router.asPath}`} target="_blank" rel="noreferrer" >
                        <IconButton aria-label='whatsapp-icon' style={{ color: '#25D366' }}>
                            <WhatsAppIcon />
                        </IconButton>
                    </a>
                    <a href={`mailto:?subject=I would like to share a link with you.&body=${baseURL}/${router.asPath}`} target="_blank" rel="noreferrer">
                        <IconButton aria-label='email-icon' style={{ color: '#ff0000' }}>
                            <EmailIcon />
                        </IconButton>
                    </a>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${baseURL}/${router.asPath}&t=${ques.question}`} target="_blank" rel="noreferrer">
                        <IconButton aria-label='linkedIn-icon' style={{ color: '#0e76a8' }}>
                            <LinkedInIcon />
                        </IconButton>
                    </a>
                    <a href="#">
                        <IconButton aria-label='share-icon' >
                            <ShareIcon />
                        </IconButton>
                    </a>
                </div>
                <ListItem alignItems='flex-start' style={{ marginBottom: -15, }}>
                    <ListItemIcon>
                        <StarIcon />
                    </ListItemIcon>
                    <Typography style={{ marginLeft: -23 }} variant='h6' component='h1'>
                        {ques.question}
                    </Typography>
                </ListItem>
                <div style={{ paddingLeft: 27 }}>
                    <ol type="A">
                        {ques.options.map((option) => (
                            <li key={option} className={classes.li}>{option}</li>
                        ))}
                    </ol>
                    <FormHelperText className={classes.helperText}>
                        {show ? " Answer is : " + '' + ques.correctOption : ''}
                    </FormHelperText>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleClick}
                        className={classes.button}
                    >
                        {show ? "Hide" : "Show"} Answer
                    </Button>
                </div>
            </FormControl>
        </Paper>
    );
}