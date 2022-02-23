import connectToDb from '../../../common/db';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        await connectToDb();
        res.status(404).json({ name: "invalid url" })
    } else {
        const {name} = req.body;

        res.status(200).json([
            {
                id: "1",
                name: "ih8u7h",
                email: "dodjid"
            }
        ])
    }
}