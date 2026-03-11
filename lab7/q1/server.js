const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
let db;
async function connectDB() {
    await client.connect();
    db = client.db("student_notes");
    console.log("MongoDB Connected");
}
connectDB();
app.post("/notes", async (req, res) => {
    let note = {
        title: req.body.title,
        subject: req.body.subject,
        description: req.body.description,
        created_date: new Date()
    };
    await db.collection("notes").insertOne(note);
    res.send({ message: "Note Added" });
});
app.get("/notes", async (req, res) => {
    let notes = await db.collection("notes").find().toArray();
    res.send(notes);
});
app.put("/notes/:id", async (req, res) => {
    let id = req.params.id;
    await db.collection("notes").updateOne(
        { _id: new ObjectId(id) },
        {
            $set: {
                title: req.body.title,
                description: req.body.description
            }
        }
    );
    res.send({ message: "Note Updated" });
});
app.delete("/notes/:id", async (req, res) => {
    let id = req.params.id;
    await db.collection("notes").deleteOne({ _id: new ObjectId(id) });
    res.send({ message: "Note Deleted" });
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});