import React from 'react'
import Link from 'next/link'
import { List, makeStyles } from '@material-ui/core'
import { ListItem } from '@material-ui/core'
import { ListItemIcon } from '@material-ui/core'
import { ListItemText } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles({
    a: {
        '&:hover': {
            color: "blue",
            textDecoration: "underline"
        }
    }
})

function QuesList({ question }) {
    const classes = useStyles();
    return (
        <List component={Paper} style={{ padding: 0, marginTop: 1 }} >
            <ListItem alignItems="flex-start" spacing={0}>
                <ListItemIcon style={{ minWidth: 30 }} >
                    <SendIcon fontSize="small" />
                </ListItemIcon>
                <Link href={question.slug ? "/question/" + question.slug : '/question/' + question._id}
                >
                    <a className={classes.a}>
                        <ListItemText primary={question.question} />
                    </a>
                </Link>
            </ListItem>
        </List>
    )
}

export default QuesList
