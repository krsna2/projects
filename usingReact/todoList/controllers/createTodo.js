const Todo =require("../models/Todo");

exports.createTodo=async(req,res)=>{
    try{
        //extract title and desc. from req body
        const {title,description}=req.body;
        //create new todo obj and insert in DB
        const response=await Todo.create({title,description})
        res.status(200).json({
            success:true,
            data:response,
            message:"Entry Created Successfully"
        })
    }   
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,

        })

    }
}