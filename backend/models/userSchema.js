import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Create a user schema

const UserSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true,
        lowercase : true,
        trim : true  // String ke starting and ending se space ko remove krta hai 
    },

    password : {
        type : String,
        required : true,
        minlength : 6,
        select : false
    },

    enrollmentNumber: {
        type: String,
        trim: true,
        sparse: true,
        unique: true
    },

    department: {
        type: String,
        trim: true
    },

    course: {
        type: String,
        trim: true
    },

    semester: {
        type: Number,
        min: 1
    },

    role: {
        type: String,
        enum: ['student', 'staff', 'admin'],
        default: 'student'
    },

    profileImage: {
        type: String,
        default: ''
    },

    isBlocked: {
        type: Boolean,
        default: false
    }
},{timestamps: true } // 2nd parameter hai optional hai automatic timestamp add hota h
)


// hashed password before saving
UserSchema.pre('save', async function (){

    // when password is not change or update
    if(!this.isModified('password')){ 
        return;
    }

    // when password is update or change than save in hash password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})


// compare password during login
userSchema.methods.comparePassword = async function (enteredPassword) {

    return await bcrypt.compare(enteredPassword, this.password);

}


// create model
const User = mongoose.model('User', userSchema);

// module export
export default User;