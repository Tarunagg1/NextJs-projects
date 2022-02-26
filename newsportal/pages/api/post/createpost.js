import connectToDb from '../../../backend/common/db';
const multer = require('multer');
import path from 'path';
import nc from "next-connect";
import { errorHandler, successHandler } from '../../../backend/utils/common';
import { getSession } from "next-auth/react"
import postModel from '../../../backend/models/post';
import slugify from 'slugify';
import { STATIC_RESOURSE_BASE_URL } from '../../../client/config';

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(process.cwd(), "public", "uploads"));
        },
        filename: function (req, file, cb) {
            cb(null, new Date().getTime() + "-" + file.originalname);
        },
    }),
});

export const config = {
    api: {
        bodyParser: false,
    },
}

const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
}).use(upload.single('image'))
    .post(async (req, res) => {
        // return successHandler({ message: "post create successfully" }, res, 201);
        try {
            const session = await getSession({ req });

            if (!session) {
                return errorHandler({ message: "Authrization failed",status:false }, res, 401);
            } else {
                await connectToDb();
                const user = session.user.email;
                const image = STATIC_RESOURSE_BASE_URL + req.file.filename
                const { title, description } = req.body;
                let slug = slugify(title, { remove: /[*+~.()'"!:@]/g });
                const newPost = new postModel({
                    title, description, user, 
                    slug:slug.toLowerCase(), 
                    image
                })
                const resp = await newPost.save();
                if (resp) {
                    return successHandler({ message: "post create successfully",status: true}, res, 201);
                } else {
                    return errorHandler({ message: "Unable to create post",status: false}, res, 400);
                }
            }
        } catch (error) {
            console.log(error);
            return errorHandler({ message: "Something went wrong",status: false}, res, 400);
        }

    })

export default handler;

