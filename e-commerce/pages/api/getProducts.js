// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import productModel from '../../models/product.model';
import connectDB from '../../config/db';

async function handler(req, res) {
    try {
        const products = await productModel.find({category:'tshirts'});
        return res.status(200).json({ message: 'products list', data: products })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error while loading products' })
    }
}

export default connectDB(handler)