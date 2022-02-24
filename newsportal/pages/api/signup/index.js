import connectToDb from '../../../backend/common/db';
import { errorHandler, successHandler, validateAll } from '../../../backend/utils/common';
import user from '../../../backend/models/user';
import bcryptjs from 'bcryptjs';


export default async function handler(req, res) {
    if (req.method != 'POST') {
        return errorHandler("Invalid  request method", res, 404);
    }
    try {
        validateAll(req.body);
        await connectToDb();
        const isuserExists = await user.findOne({ email: req.body.email });
        const hashpassword = await bcryptjs.hash(req.body.password, 8);

        if (isuserExists) {
            return errorHandler("Email allready exists", res, 400);
        } else {
            const newuser = await new user({ ...req.body, password: hashpassword });
            const saveuser = await newuser.save();

            if (saveuser) {
                const userDoc = saveuser._doc;
                delete userDoc.password;

                return successHandler({ message: "user create successfully", user: userDoc }, res, 201);
            } else {
                return errorHandler("Something went wrong", res, 400);
            }
        }
    } catch (error) {
        console.log(error);
        return errorHandler("Something went wrong", res, 400);
    }
}

