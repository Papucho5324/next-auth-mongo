import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
email: {
    type: String,
    unique: true,
    requierd: [true, "Email is requiered"],
    match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
    ],
},
password: {
    type: String,
    required: [true, "Password is requiered"],
    select: false
},
fullname: {
    type: String,
    requied: [true, "Fullname is required"],
    minLength: [3, "Fullname must be at least 3 characters"],
    maxLength: [50, "Fullname must be at most 50 characters"]

}  
});

const User =  models.User ||  model('User', UserSchema);
export default User;