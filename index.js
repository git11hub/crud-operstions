import express from 'express';
import mongoose from 'mongoose';
import route from './route/routes.js';

const app = express();



app.use('/users', route);

const PORT = 8000;
const URL = 'mongodb+srv://crudProject:crud1234@cluster0.eftco.mongodb.net/crudProject?retryWrites=true&w=majority';

mongoose.connect(URL, { useNewUrlParser: true, useUnifiendTopology: true, useFindAndModify: false}).then(()=>{
    app.listen(PORT, () =>{
        console.log(`Server is running successfully hehehehe on Post ${PORT}`);
    })
}).catch(error => {
    console.log("Error: ", error.message);
})

