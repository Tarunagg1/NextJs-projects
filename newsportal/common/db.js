import mongoose from 'mongoose';

global.mongoose = {
    conn: null,
    promise: null
}

const connectToDb = async () => {
    if (global.mongoose && global.mongoose.conn) {
        console.log('existing Database Connected Succesfully');
        return global.mongoose.conn;
    } else {
        console.log('new Database Connected Succesfully');
        const promise = mongoose.connect(process.env.MONGODB_URL)
        .then(mongoose => mongoose)
        .catch((error) => {
                console.log(process.env.MONGODB_URL);
                console.log('Database Connection fail');
            })

        global.mongoose = {
            conn: await promise,
            promise
        }

        return await promise;
    }
};

export default connectToDb;