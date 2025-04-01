
const Task = require('../models/tasks');

const getAllTasks = async(req,res)=>{
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}
//get single task
const getTask = async(req,res)=>{
    try {
        const {id:taskID} = req.params;
        const tasks = await Task.findOne({_id:taskID});
        if(!tasks){
            return res.status(404).json({msg:`No task with id : ${taskID}`});
        }
        res.status(200).json(tasks);
        
    } catch (error) {
        res.status(500).json({msg:error});
    }
    // res.json({id:req.params.id});
}

const createTask = async(req,res)=>{
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task); 
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const deleteTask = async(req,res)=>{
    try {
        const {id:taskID} = req.params;
        const tasks = await Task.findOneAndDelete({_id:taskID});
        if(!tasks){
            return res.status(404).json({msg:`No task with id: ${taskID}`});
        } 
        // res.status(200).json({tasks:null,status:success});
        // res.status(200).json({tasks});
        res.status(200).json({});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}
const updateTask = async(req,res)=>{
    try {
        const {id:taskID} = req.params;
        const tasks = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new: true,
            runValidators:true
        })
        if(!tasks){
            return res.status(404).json({msg:`No task with id: ${taskID}`});
        }
        res.status(200).json(tasks);
    } catch (error) {
        console.log("mkc")
        res.status(500).json({msg:error});
    }
}

const HomePage = async(req,res)=>{
    res.status(200).send('Home page')
}


module.exports = {
    getAllTasks,getTask,createTask,updateTask,deleteTask,HomePage
}