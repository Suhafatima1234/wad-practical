const express=require("express");
const mongoose=require("mongoose");
const app=express();
mongoose.connect("mongodb://127.0.0.1:27017/music1");
const songschema=new mongoose.Schema(
    {
        songname:String,
        film:String,
        music_director:String,
        singer:String,
        actor: String,
        actress:String

    }
);
const song = mongoose.model("songdetails",songschema);

//generate table
function generatetable(data){
    let html=`
    <html>
        <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body class="container mt-4">
        <h2 class="text-center mt-4">Song details</h2>
        <table class="table table-bordered table-striped">
            <thead class="table-dark">
                <tr>
                <th>Song</th>
                            <th>Film</th>
                            <th>Director</th>
                            <th>Singer</th>
                            <th>Actor</th>
                            <th>Actress</th>
                </tr>
            </thead>
             <tbody>
                `;
                
                data.forEach(s => {
                    html += `
                    <tr>
                        <td>${s.songname}</td>
                        <td>${s.film}</td>
                        <td>${s.music_director}</td>
                        <td>${s.singer}</td>
                        <td>${s.actor}</td>
                        <td>${s.actress}</td>
                    </tr>
                    `;
                });
            
                html += `
                </tbody>
        </table>
        </body>
    </html>
    `;

    return html;

}

app.get("/insert",async(req,res)=>{
    await song.deleteMany({});
    await song.insertMany([
       {songname: "Tum Hi Ho", film: "Aashiqui2", music_director: "Mithoon", singer: "Arijit",actor:"Aditya kumar Roy",actress:"Shraddha Kapoor" },
        {songname: "Kesariya", film: "Brahmastra", music_director: "Pritam", singer: "Arijit",actor:"Aditya kumar Roy",actress:"Shraddha Kapoor" },
        {songname: "Kal Ho Na Ho", film: "KHNH", music_director: "Shankar", singer: "Sonu",actor:"Aditya kumar Roy",actress:"Shraddha Kapoor" },
        {songname: "Malang", film: "Malang", music_director: "Mithoon", singer: "Ved",actor:"Aditya kumar Roy",actress:"Shraddha Kapoor" },
        {songname: "Channa Mereya", film: "ADHM", music_director: "Pritam", singer: "Arijit",actor:"Aditya kumar Roy",actress:"Shraddha Kapoor" }
    
    ]);
    let data=await song.find();
    res.send(generatetable(data));
});


app.listen(3000,()=>
{
    console.log("server at http://localhost:3000");
});