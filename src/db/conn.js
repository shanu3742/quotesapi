const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/quotes-api",{
    useNewUrlParser: true,
    useUnifiedTopology: true ,
    useCreateIndex:true

}).then(() => {
    console.log("connection is done..")
}).catch((err) => {
    console.log(err)
}) 