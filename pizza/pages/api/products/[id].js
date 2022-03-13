import productModel from '../../../models/Product';
import dbConnect from '../../../lib/db';



export default async function handler(req, res) {
    const {
        method,
        query: { id },
        cookies
    } = req;
    // const token = cookies.token

    dbConnect();

    if (method === "GET") {
        try {
            const product = await productModel.findById(id);
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if (method === "PUT") {
        //   if(!token || token !== process.env.token){
        //     return res.status(401).json("Not authenticated!")
        //   }
        try {
            const product = await productModel.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if (method === "DELETE") {
        //   if(!token || token !== process.env.token){
        //     return res.status(401).json("Not authenticated!")
        //   }
        try {
            await productModel.findByIdAndDelete(id);
            res.status(200).json("The product has been deleted!");
        } catch (err) {
            res.status(500).json(err);
        }
    }
}
