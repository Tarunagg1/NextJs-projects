import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    user: {
        type: String,
        // ref: 'user',
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    image: {
        type: String,
        default: null
    }
}, { timestamps: true });

module.exports = mongoose.models.post || mongoose.model("post", postSchema);


