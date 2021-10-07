import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { capitalize, Grid, Paper, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1, 1, 0, 0),
    },
    li: {
        marginBottom: 10,
        textTransform:'capitalize',
        fontSize:16
    },
    helperText: {
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
    useEffect(()=>{
        setShow(false)
    },[ques])

    return (
        <Paper>
            <FormControl
                component="fieldset"
                className={classes.formControl}
            >
                <Grid container spacing={1} >
                    <Grid item xs={1}>
                        <StarIcon />
                    </Grid>
                    <Grid item xs={11}>
                        <Typography variant='h5' component="h1" >
                            {ques.question}
                        </Typography>
                    </Grid>
                </Grid>
                <div style={{ marginLeft: 15 }}>
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