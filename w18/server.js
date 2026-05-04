const express = require("express");
const mongoose = require("mongoose");

const app = express();

// DB connect
mongoose.connect("mongodb://127.0.0.1:27017/music");

// Schema
const songSchema = new mongoose.Schema({
    Songname: String,
    Film: String,
    Music_director: String,
    singer: String,
    Actor: String,
    Actress: String
});

const Song = mongoose.model("songdetails", songSchema);


// 🔥 COMMON TABLE FUNCTION
function generateTable(data) {

    let html = `
    <html>
    <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body class="container mt-4">

    <h2 class="text-center mb-4">Song Details</h2>

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
            <td>${s.Songname}</td>
            <td>${s.Film}</td>
            <td>${s.Music_director}</td>
            <td>${s.singer}</td>
            <td>${s.Actor}</td>
            <td>${s.Actress}</td>
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
// c) INSERT 5 SONGS
app.get("/insert", async (req, res) => {
    await Song.deleteMany({});
    await Song.insertMany([
        { Songname: "Tum Hi Ho", Film: "Aashiqui2", Music_director: "Mithoon", singer: "Arijit",Actor:"Aditya kumar Roy",Actress:"Shraddha Kapoor" },
        { Songname: "Kesariya", Film: "Brahmastra", Music_director: "Pritam", singer: "Arijit",Actor:"Aditya kumar Roy",Actress:"Shraddha Kapoor" },
        { Songname: "Kal Ho Na Ho", Film: "KHNH", Music_director: "Shankar", singer: "Sonu",Actor:"Aditya kumar Roy",Actress:"Shraddha Kapoor" },
        { Songname: "Malang", Film: "Malang", Music_director: "Mithoon", singer: "Ved",Actor:"Aditya kumar Roy",Actress:"Shraddha Kapoor" },
        { Songname: "Channa Mereya", Film: "ADHM", Music_director: "Pritam", singer: "Arijit",Actor:"Aditya kumar Roy",Actress:"Shraddha Kapoor" }
    ]);

    let data = await Song.find();
    res.send(generateTable(data));
});


// d) DISPLAY ALL
app.get("/all", async (req, res) => {
    let data = await Song.find();
    res.send(generateTable(data));
});


// e) BY MUSIC DIRECTOR
app.get("/director/:name", async (req, res) => {
    let data = await Song.find({ Music_director: req.params.name } );
    res.send(generateTable(data));
});


// f) DIRECTOR + SINGER
app.get("/director/:name/singer/:s", async (req, res) => {
    let data = await Song.find({
        Music_director: req.params.name,
        singer: req.params.s
    });
    res.send(generateTable(data));
});


// g) DELETE SONG
app.get("/delete/:song", async (req, res) => {
    await Song.deleteOne({ Songname: req.params.song });

    let data = await Song.find();
    res.send(generateTable(data));
});


// h) ADD NEW SONG
app.get("/add", async (req, res) => {
    await Song.create({
        Songname: "Apna Bana Le",
        Film: "Bhediya",
        Music_director: "Sachin",
        singer: "Arijit"
    });

    let data = await Song.find();
    res.send(generateTable(data));
});


// i) SINGER + FILM
app.get("/search/:singer/:film", async (req, res) => {
    let data = await Song.find({
        singer: req.params.singer,
        Film: req.params.film
    });
    res.send(generateTable(data));
});


// j) UPDATE
app.get("/update/:song", async (req, res) => {
    await Song.updateOne(
        { Songname: req.params.song },
        { Actor: "Ranbir", Actress: "Alia" }
    );

    let data = await Song.find();
    res.send(generateTable(data));
});


// SERVER
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});