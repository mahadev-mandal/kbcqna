import axios from "axios"

const fetchTotal = async (url) => {
    const res = await axios.get(url)
        .then((res) => res.data)
        .catch((err) => { throw new Error("errror occured while fetching total questions") })
    return res
}
export default fetchTotal;