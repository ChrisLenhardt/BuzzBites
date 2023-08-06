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


app.get('/apiTest', async (req,res) =>{
  
  try{
    const db = client.db('sample_mflix')
    const collection = db.collection('users')

    const results = await collection.find();
    res.json(results.next());
    console.log(results.next());
  }
  catch(error){
    console.log("uh oh");
  }

})

app.get('/helloWorld', async (req,res) =>{
  await client.connect();
  res.json("Hello World");
  
})


async function run(){
    try{
        await client.connect();

        const db = client.db('sample_mflix')
        const collection = db.collection('users')

        const cursor = collection.find({name: "Jon Snow"});

        cursor.toArray((err,results)=>{
          if(err){
            console.log(err);
          }

          console.log(results);
        })
            //for each is deprecated, i will replace it later
    }
    finally{
        await client.close();
    }
}

//run();