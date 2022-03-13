import productModel from '../../../models/Product';
import dbConnect from '../../../lib/db';


export default async function handler(req, res) {
    const { method, cookies } = req;

    // const token = cookies.token

    dbConnect();

    if (method === "GET") {
        try {
            const products = await productModel.find();
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if (method === "POST") {
        // if (!token || token !== process.env.token) {
        //     return res.status(401).json("Not authenticated!")
        // }
        try {
            const product = await productModel.create(req.body);
            res.status(201).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}