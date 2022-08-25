// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import userModel from '../../models/user.model';
import connectDB from '../../config/db';
import CryptoJS from "crypto-js";


async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(400).json({ message: 'Invalid request' })
    }
    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(req.body.password), 'oijfOIjfjf').toString();
    try {
        const newuser = new userModel({ ...req.body, password: ciphertext });
        const resp = await newuser.save();
        return res.status(200).json({ message: 'user created successfully', data: resp });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error while adding products' })
    }
}

export default connectDB(handler)