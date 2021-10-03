import axios from "axios"

const getPopularQues = async (url) => {
    const res = await axios.get(url)
    .then((res) => res.data)
    .catch((err)=>{
        throw new Error("Error occured while fetching popular questions")
    })
    return res
}
export default getPopularQues