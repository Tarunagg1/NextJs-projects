export const errorHandler = (data, res, statuscode) => {
    return res.status(statuscode).json({
        status: false,
        errorMessage: data
    });
}

export const successHandler = (data, res, statuscode) => {
    return res.status(statuscode).json({
        status: true,
        ...data
    });
}




export const validateAll = (fields)=>{
    for(let key in fields){
        if(fields[key] === ""){
            throw new Error(`${key} is required`);
        }
    }
}