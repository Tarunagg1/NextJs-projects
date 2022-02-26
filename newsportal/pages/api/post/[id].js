import postModel from '../../../backend/models/post';
import { errorHandler, successHandler } from '../../../backend/utils/common';


export default async function handler(req, res) {
    const {id} = req.query;
   try {
       const data = await postModel.findById(id);
       return successHandler({ message: "post data",status: true,data}, res, 201);
   } catch (error) {
      return errorHandler({ message: "Something went wrong",status: false}, res, 400);       
   }
}


