const express = require("express")
const router = express.Router()
const Student = require('../models/database.models')

//Show all Student Data
router.get('/',async (req,res)=>{
    try{
        const students = await Student.find() 
        res.json(students)
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

//Show a single student record
router.get('/:id',async (req,res)=>{
    try{
        const student = await Student.findById(req.params.id)
        if(!student) return res.status(404).json({message:'Student Not Found.'})
        res.json(student)
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

//Add a new Student
router.post('/',async (req,res)=>{
    try{
        const newstudent = await Student.create(req.body)
        res.status(201).json(newstudent)
    }catch(err){
         res.status(500).json({message:err.message})
    }
})

//Update a new student
router.put('/:id',async (req,res)=>{
    try{
        const updatestudent = await Student.findByIdAndUpdate(req.params.id,req.body,
            {new:true}
        )
        if(!updatestudent) return res.status(404).json({message:'Student Not Found.'})
        res.json(updatestudent)
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

//Delete a Student Record
router.delete('/:id',async (req,res)=>{
    try{
        const deletestudent = await Student.findByIdAndDelete(req.params.id)
        if(!deletestudent) return res.status(404).json({message:'Student Not Found.'})
        res.json({message:'Student Deleted Successfully'})
    }catch(err){
         res.status(500).json({message:err.message})
    }
})

module.exports = router