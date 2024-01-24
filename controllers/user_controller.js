import User from "../models/user_model.js"


export const getUsers=async(req,res)=>{
 try {
    await User.findAll().then((users)=>{
        res.status(200).json({users:users});
    });

 } catch (error) {
    res.status(500).json({message:"error while geting data",error:error});
 }
}

export const addUser=async(req,res)=>{
    try {
        const name=req.body.name;
        const age=req.body.age;
        const newUser=User.create({name:name,age:age}).then((result)=>{
            res.status(201).json({message:"user added",result:result});
        });
    } catch (error) {
        res.status(500).json({message:"error while adding user",error:error});
    }
}

export const deleteUser=async (req,res)=>{
    try {
        const id=req.params.id;
        User.destroy({where:{
            id:id
        }}).then((resp)=>{
            res.status(200).json({message:"User deleted successfully",resp:resp});
        })
        
    } catch (error) {
        res.status(500).json({message:"error while deleting user",error:error});
        
    }
}

export const updateUser=async(req,res)=>{
    console.log("is it working");
    try {
        const newName=req.body.newName;
        const id=req.params.id;
        User.update({name:newName},{
            where:{
                id:id
            }
        }).then((resp)=>{
            res.status(200).json({message:"name updated",resp:resp});
        }).catch((err)=>{
            console.log(err);
        })
        
    } catch (error) {
        res.status(500).json({message:"error while updating name",error:error});
        
    }
}

export const getSingleUser=async(req,res)=>{
    try {
        const id =parseInt(req.params.id);
        const user=await User.findByPk(id);
        if(user){
            res.status(200).json({id:id,user:user});
        }else{
            res.status(400).json({message:"user not found"});
        }
    } catch (error) {
        res.status(500).json({message:"error while updating name",error:error});
    }
}