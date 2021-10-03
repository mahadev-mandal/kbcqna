import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

export default function DeleteDialog({ id, closeDialog, deleteApiUrl }) {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        closeDialog();

    };

    const handleDelete = async () => {
        await axios.delete(`${deleteApiUrl}/${id}`)
            .then((res) => {
                console.log(res)
                closeDialog()
            }).catch((err) => {
                console.log(err)
            })
    }


    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure want to delete?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" >
                        No
                    </Button>
                    <Button onClick={handleDelete} style={{ color: 'red' }} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
