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




export const validateAll = (fields) => {
    for (let key in fields) {
        if (fields[key] === "") {
            throw new Error(`${key} is required`);
        }
    }
}


export const getValues = (obj, path, defaultVallue) => {
    try {
        if (!(obj instanceof Array)) {
            let myValues = obj;
            for (let key of path) {
                if (!(key in myValues)) {
                    return defaultVallue;
                } else {
                    myValues = myValues[key];
                }
            }
            return myValues;
        }
    } catch (error) {
        console.log(error);
        return defaultVallue;
    }
}