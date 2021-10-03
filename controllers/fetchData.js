import axios from "axios"

const fetchData = async (url) => {
    const res = await axios.get(url)
        .then((res) => res.data)
        .catch((err) => { throw new Error("error occured while fetching questions per page") })
    return res
}
export default fetchData;