import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamp: true })

module.exports = mongoose.models.user || mongoose.model("user", userSchema);


