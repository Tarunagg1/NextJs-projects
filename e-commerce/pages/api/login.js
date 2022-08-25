// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import userModel from '../../models/user.model';
import connectDB from '../../config/db';
import jwt from 'jsonwebtoken';
import CryptoJS from "crypto-js";


async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(400).json({ message: 'Invalid request' })
    }
    const { email, password } = req.body;
    
    try {
        const data = await userModel.findOne({ email: email });
        if (data) {
            let bytes = CryptoJS.AES.decrypt(data.password, 'oijfOIjfjf');
            let dcPass = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

            if (password === dcPass) {
                return res.status(200).json({ message: 'login user successfully', data: { email: data.email, password: data.password } });
            }
            return res.status(400).json({ message: 'invalid email or password' })
        } else {
            return res.status(400).json({ message: 'invalid email or password' })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error while login' })
    }
}

export default connectDB(handler)