import userModel from '../../../models/userSchema'
import db_conn from '../../../helpers/db_conn'


db_conn();
export default function user(req, res) {
    switch (req.method) {
        case "POST":
            saveUser(req, res);
            break;
        default:
            res.status(404).send("this page is not found")

    }
}

const saveUser = async (req, res) => {
    const { name, email, role, password } = req.body;
    if (!name || !email || !role || !password) {
        res.status(422).json({ error: "Please fill all required fields" });
    } else {
        const usr = new userModel({
            name,
            email,
            role,
            password,
        })
        await usr.save()
            .then((u) => {
                res.status(200).json(u)
            }).catch((err) => {
                console.log(err)
                if (err.keyPattern.email === 1) {
                    res.status(500).json({ errorMessage: "email is already present" })
                } else {
                    res.status(500).json({ errorMessage:"something went wrong"})
                }
            })

    }
}