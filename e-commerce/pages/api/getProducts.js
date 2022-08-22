// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import productModel from '../../models/product.model';
import connectDB from '../../config/db';

async function handler(req, res) {
    try {
        const products = await productModel.find({category:'tshirts'});
        let tshirts = {};

        for(let item of products) {
            if(item.title in tshirts) {
                if(!tshirts[item.title].color.includes(item.color) && parseInt(item.avilableQty) > 0) {
                    tshirts[item.title].color.push(item.color);
                }
                if(!tshirts[item.title].size.includes(item.size) && parseInt(item.avilableQty) > 0) {
                    tshirts[item.title].size.push(item.size);
                }
            }else{
                tshirts[item.title] = JSON.parse(JSON.stringify(item));
                if(parseInt(item.avilableQty )> 0){
                    tshirts[item.title].color = [item.color];
                    tshirts[item.title].size = [item.size];
                }
            }
        }
        return res.status(200).json({ message: 'products list', data: tshirts })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error while loading products' })
    }
}

export default connectDB(handler)