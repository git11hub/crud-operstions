import express from 'express'; 

const route = express.Router();

route.get('/', (req, res) => {
    res.status(200).json("Hi from Checking mongodb connection is okay or not");
})

export default route;