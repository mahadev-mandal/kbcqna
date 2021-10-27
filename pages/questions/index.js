import useSWR from "swr"
import fetchData from "../../controllers/fetchData";
import { baseURL } from '../../helpers/constants'
import QuesList from "../../components/QuesList";
import DrawerLeft from "../../components/DrawerLeft";
import { Pagination } from '@material-ui/lab'
import { Paper } from "@material-ui/core";
import fetchTotal from "../../controllers/fetchTotal";
import { useState } from "react";

function questions() {
    const [page,setPage] = useState(1);

    const { data: questions, error } = useSWR(`${baseURL}/api/questions?n=10&p=${page}`, fetchData);
    const {data:total} = useSWR(`${baseURL}/api/totalquestions`,fetchTotal);
    if (!questions) {
        return <div>Please wait loading...</div>
    } else if (error) {
        return <div>Error occured while fetching data</div>
    }
    
    const handlePageChange = (event,newPage) => {
        setPage(newPage)
    }
    
    return (
        <>
            {questions.map((question) => (
                <QuesList question={question} />
            ))}
            <Paper style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Pagination
                    count={Math.ceil(total / 10)}
                    page={page}
                    onChange={handlePageChange}
                    style={{ marginTop: 11 }}
                />
            </Paper>
        </>
    )
}
export default function Questins(){
    return <DrawerLeft drawerContent={questions()}/>
}