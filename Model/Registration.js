
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    email: {
        type: String
    },
    Password: {
        type: String
    },
    role: {
        type: String,
        required: true,
        default: "user"
    },
    
})

const user = mongoose.model('Registration', userSchema)

export default user