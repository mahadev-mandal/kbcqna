import React, { useState } from 'react';
import Link from 'next/link'
import useSWR, { mutate } from 'swr'
import fetchData from '../controllers/fetchData';
import fetchTotal from '../controllers/fetchTotal';
import { useRouter } from 'next/router'
import { Pagination } from '@material-ui/lab'
import { quesPerPage } from '../helpers/showPerPage';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteDialog from './DeleteDialog';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    icon: {
        color: 'red',
        padding: 0,
        margin: 0
    }

});

function MyTable({ pageno, apiUrl, totalApiUrl, deleteApiUrl, addDataUrl, tableHead }) {
    const router = useRouter()
    const classes = useStyles();

    const [id, setId] = useState("");
    const [dialogOpen, setDialogOpen] = useState(false)
    var [page, setPage] = useState(parseInt(pageno))

    const { data, error: error1 } = useSWR(`${apiUrl}/${page}`, fetchData);
    const { data: total, error: error2 } = useSWR(totalApiUrl, fetchTotal);
    

    const handlePageChange = (event, newPage) => {
        setPage(newPage)
        router.push(`/admin/questions/${newPage}`)
    }
    const closeDialog = () => {
        setDialogOpen(false)
        mutate(`${apiUrl}/${page}`)
        mutate(totalApiUrl)
    }

    if (!data) {
        return <p>Loading...</p>
    } else if (error1) {
        return <p>Failed to load data</p>
    }
    return (
        <div>
            {dialogOpen ? <DeleteDialog
                id={id}
                closeDialog={closeDialog}
                deleteApiUrl={deleteApiUrl}
            /> : null}
            <Link href={addDataUrl} >
                <a>
                    <Button style={{ marginBottom: 5 }} variant='contained' color='primary' startIcon={<Add />} >
                        Add
                    </Button>
                </a>
            </Link>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">s.n</StyledTableCell>
                            {tableHead.map((th) => (
                                <StyledTableCell key={th} align="center">{th}</StyledTableCell>
                            ))}
                            <StyledTableCell align="center">delete</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((fetchedData, index) => (
                            <StyledTableRow key={fetchedData.date}>
                                <StyledTableCell align='center' >
                                    {(index + 1) + (quesPerPage * (page - 1))}
                                </StyledTableCell>
                                {tableHead.map((th) => (
                                    <StyledTableCell key={th} align="center">
                                        {fetchedData[th]}
                                    </StyledTableCell>
                                ))}

                                <TableCell align='center'>
                                    <IconButton
                                        onClick={() => {
                                            setDialogOpen(true);
                                            setId(fetchedData._id)
                                        }}
                                        className={classes.icon}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Paper style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Pagination
                    count={Math.ceil(total / quesPerPage)}
                    page={page}
                    onChange={handlePageChange}
                    style={{ marginTop: 11 }}
                />
            </Paper>
        </div>
    );
}
export default MyTable;