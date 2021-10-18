import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { ListItem, ListItemIcon, Typography, Paper } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';


const useStyles = makeStyles((theme) => ({
    formControl: {


    },
    button: {
        marginLeft:18
    },
    li: {
        marginBottom: 10,
        fontSize: 16
    },
    helperText: {
        marginLeft:20,
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    }
}));

export default function QuesAns({ ques }) {
    const classes = useStyles();
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(!show)
    };
    useEffect(() => {
        setShow(false)
    }, [ques])

    return (
        <Paper style={{ padding:'10px 10px 10px 0' }}>
            <FormControl
                component="fieldset"
                className={classes.formControl}
            >
                <ListItem alignItems='flex-start' style={{  marginBottom: -15, }}>
                    <ListItemIcon>
                        <StarIcon />
                    </ListItemIcon>
                    <Typography style={{ marginLeft: -23 }} variant='h6' component='h1'>
                        {ques.question}
                    </Typography>
                </ListItem>
                <div style={{ paddingLeft:27 }}>
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