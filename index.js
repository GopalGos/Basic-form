const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use(cors())

app.post('/getJSON', (req,res)=>{
    const response = {
        name: 'Gopal',
        password: 'ABD',
        subscribe: 'of'
    }
    // res.send(response)
    console.log(req.body);
    return res.send({message: 'ok'})
})

app.listen(port, ()=>{
    console.log(`app running at port : ${port}`);
})