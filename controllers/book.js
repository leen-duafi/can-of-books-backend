const userModels=require('../models/book.models');
const getbooks=(req,res)=>{

    let email=req.query.email
    userModels.findOne({email:email}, (error, books)=>{
        if (error){
            res.send(error.message)
        }
        console.log(books);
        res.send(books);
        
    });
}


module.exports=getbooks;
