// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import productModel from '../../models/product.model';
import connectDB from '../../config/db';

async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(400).json({ message: 'Invalid request' })
    }

    try {
        for (let i = 0; i < req.body.length; i++) {
            const products = new productModel({ slug: req.body[i].slug, title: req.body[i].title, description: req.body[i].description, img: req.body[i].img, category: req.body[i].category, size: req.body[i].size, color: req.body[i].color, price: req.body[i].price, avilableQty: req.body[i].avilableQty });
            await products.save();
        }
        return res.status(200).json({ message: 'products create successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error while adding products' })
    }
}

export default connectDB(handler)