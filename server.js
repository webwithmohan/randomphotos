
const express = require('express');
const photos = require('./generatePhotos');
const app = express();
require('dotenv').config();









app.use(express.json());
app.use("/photos",async(req,res) => {
    try{
        let p=await photos();
        res.status(200).json(p)
    }catch(error){
        res.status(404).json({
            message:error.message
        })
    }
    
    

})
app.use("/photos/:id",async(req,res) => {
    try{
        let p=await photos();
        let fil=p.find(data => data.id == req.params.id)
        if(!fil){
            return res.json({
                message:"Photo Not Found"
            })
        }
        res.status(200).json(fil)
    }catch(error){
        res.status(404).json({
            message:error.message
        })
    }
    
    

})



const PORT="https://randomphotos.onrender.com"
app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});
