require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI
  || 'mongodb://127.0.0.1:27017/dogAdoption';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => {
    console.error('❌ Mongo connection error:', err.message);
    process.exit(1);
  });

const dogSchema = new mongoose.Schema({
  name:        String,
  description: String,
});
const Dog = mongoose.model('Dog', dogSchema);

app.get  ('/api/dogs',           async (req, res) => res.json(await Dog.find()));
app.post ('/api/dogs',           async (req, res) => {
  const d = await Dog.create(req.body);
  res.status(201).json(d);
});
app.put  ('/api/dogs/:id',       async (req, res) => {
  const d = await Dog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(d);
});
app.delete('/api/dogs/:id',      async (req, res) => {
  await Dog.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 API on http://localhost:${PORT}`));
