import express from 'express';
import fs from 'fs';
import { format} from 'date-fns';
import path  from 'path';

//declaration/initailization
const app = express();
const PORT = 4000;

//Middleware
app.use(express.json())

//routes
app.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="background-color:lightpink;padding:10px 0px;text-align:center">Express server is connected Successfully</h1>`)
})
//Create a text file
app.get('/create',(req,res)=>{
   
    let today = format(new Date(),'dd-mm-yyyy-HH-mm-ss')
    const filepath =`Timestamps/${today}.txt`;
    fs.writeFileSync(filepath,`${today}`,'utf8')
    res.status(200).send("File Created Successfully")
})

//Read all the text file
app.get('/read',(req,res)=>{
    let timestampsfolder = '/Timestamps'
    let folder = path.basename(timestampsfolder)
        let data = fs.readdirSync(folder);
        res.status(200).send(data)

})

//running port
app.listen(PORT,()=>{
    console.log(`App is listening on the port ${PORT}`)
})