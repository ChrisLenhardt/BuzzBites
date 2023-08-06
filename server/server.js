const express = require('express');
const { ObjectId, Double } = require('mongodb');
const mongoose = require('mongoose');
const Decimal128 = require('mongoose/lib/schema/decimal128');
const app = express();
const port = 8000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'src', 'images')));

const uri = 'mongodb+srv://chrisL:Cl02082005@cluster0.nzksy4h.mongodb.net/buzzbitess';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the application on connection error
  });

// Mongoose schema and model (modify according to your data structure)
const menuSchema = new mongoose.Schema({
  _id: ObjectId,
  Cuisine: String,
  Ingredients: String,
  Name: String,
  Price: Decimal128,
}, {collection: 'menus' });

const Menu = mongoose.model('Menu', menuSchema);

// Route to get menu data from MongoDB
app.get('/api/menu', async (req, res) => {
  console.log('Request received for /api/menu'); // Debug statement

  try {
    // Fetch menu data from MongoDB
    const menuItems = await Menu.find().lean();

    console.log('Menu Items:', menuItems); // Debug statement

    res.json(menuItems);
  } catch (error) {
    console.error('Error retrieving menu data:', error);
    res.status(500).json({ error: 'An error occurred while retrieving menu data.' });
  }
});
