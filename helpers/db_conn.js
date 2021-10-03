import mongoose from 'mongoose';

export default function dbConn() {
    
    if (mongoose.connections[0].readyState) {
        console.log("alrady connected")
    } else {
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true
        })
        mongoose.connection.on("connected", () => {
            console.log('connection sucessfully stablished')
        })
        mongoose.connection.on("error", (err) => {
            console.log("error connecting to database", err)
        })
        
    }
}