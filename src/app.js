const express = require("express");

require("./db/conn")
const Api = require("./models/api");
const app = express();
app.use(express.json());

const port= process.env.PORT||4040;

app.post("/apis", async(req,res) => {
    try{
    const user = new Api(req.body);
    const result = await user.save();
    res.send(result);
    }catch(err){
        res.status(404).send(err);
    }
    //res.send("Listen from the client side")
})
app.get("/apis", async(req,res) => {
    try{
        const result = await Api.find();
        res.send(result);

    }catch(err){
        res.send(err);
    }
})

app.listen(port,() => {
    console.log("connection is done...");
})