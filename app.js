const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const course = require("./models/course")

const app= express()
app.use(cors())
app.use(express.json())
const {coursemodel}= require("./models/course")

mongoose.connect("mongodb+srv://abhishikth:achuMon0075@cluster0.38fgaky.mongodb.net/coursedb?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input = req.body
    const course = new coursemodel(input)
    // console.log(course)
    course.save()
    res.json({"status":"success"})
})

app.post("/search",(req,res)=>{
    let input = req.body
    coursemodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
    
})

app.post("/view",(req,res)=>{
    coursemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
    
})

app.post("/delete",(req,res)=>{
    let input= req.body
    coursemodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch(
        (error)=>{
            res.json({"status":"error"})
        })
})

app.listen(8086,()=>{
    console.log("server sarted")
})