const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const app = express();
app.use(cors());
const client = new MongoClient("mongodb://127.0.0.1:27017");
let db;
async function start(){
await client.connect();
db = client.db("book_store");
console.log("MongoDB Connected");
}
start();
app.get("/books/search", async (req,res)=>{
let title = req.query.title;
let result = await db.collection("books")
.find({title:{$regex:title,$options:"i"}})
.toArray();
res.json(result);
});
app.get("/books/category/:cat", async (req,res)=>{
let result = await db.collection("books")
.find({category:req.params.cat})
.toArray();
res.json(result);
});
app.get("/books/sort/price", async (req,res)=>{
let result = await db.collection("books")
.find()
.sort({price:1})
.toArray();
res.json(result);
});
app.get("/books/sort/rating", async (req,res)=>{
let result = await db.collection("books")
.find()
.sort({rating:-1})
.toArray();
res.json(result);
});
app.get("/books/top", async (req,res)=>{
let result = await db.collection("books")
.find({rating:{$gte:4}})
.limit(5)
.toArray();
res.json(result);
});
app.get("/books", async (req,res)=>{
let page = parseInt(req.query.page)||1;
let result = await db.collection("books")
.find()
.skip((page-1)*5)
.limit(5)
.toArray();
res.json(result);
});
app.listen(3001,()=>{
console.log("Server running on port 3001");
});