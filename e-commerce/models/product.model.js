const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        unique: true
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    avilableQty: { type: String, required: true },
}, { timestamps: true });

mongoose.models = {};
export default mongoose.model('Product', productSchema);