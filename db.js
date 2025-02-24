const {connect} = require('mongoose');
const connectDB = async(url)=>{
    try{
        await connect(url);
        console.log("Connected to Databse");
    }
    catch(error){
        console.log("Error connecting");
        console.log(error)
    }
};
module.exports=connectDB;