const express=require("express")
const fs=require("fs")
const app=express();

app.get("/users",(req,res)=>
{
    fs.readFile("data.json","utf-8",(err,data)=>
    {
        if(err){
            res.send("Error");
        }
        else
        {
            res.json(JSON.parse(data));
        }
    });
}
);
app.use(express.static(__dirname));

app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});