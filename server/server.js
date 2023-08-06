const express = require('express');
const mongoose = require('mongoose');
const { MongoClient } = require("mongodb");
const app = express();

const port = 8000
const uri = 'mongodb+srv://chrisL:Cl02082005@cluster0.nzksy4h.mongodb.net/'
const client = new MongoClient(uri);

async function connect(){
  try{
    await mongoose.connect(uri);
    console.log("connected to mongodb")
  }
  catch(error){
    console.error(error);
  }
}

connect();

app.listen(port, () => 
  (console.log(`App is running on port ${port}`))
);





async function run(){
    try{
        await client.connect();

        const db = client.db('sample_mflix')
        const collection = db.collection('users')

        const cursor = collection.find({name: "Jon Snow"});

        await cursor.forEach(console.log); 
            //for each is deprecated, i will replace it later
    }
    finally{
        await client.close();
    }
}

run();