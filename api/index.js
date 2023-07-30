import express from "express"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
// import cors from 'cors' 
import cookieParser from "cookie-parser"; 
import multer from "multer"; 

const app=express()
app.use(express.json())
app.use(cookieParser())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../clientside/public/upload')
    },
    filename: function (req, file, cb) {
      
      cb(null,Date.now()+file.originalname)
    //   if we upload same image with same name it will overwrite to tackel this 
    //   we use Date.now()+file.originalname which will create unique file name each instance we added the image
    //   after doing this we get unique filename
    }
  })
  
  const upload = multer({ storage})



app.post('/api/upload', upload.single('file'), function (req, res) {
    // req.file is the `avatar`(filename) file
    // req.body will hold the text fields, if there were any
    const file =req.file;
    res.status(200).json(file.filename)
  })
  



// app.use(cors())
// Routes
app.use("/api/posts",postRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)

// For uploading new file(img) we use multer here 








// Port:8800
app.listen(8800,()=>{
    console.log("Connected!")
})