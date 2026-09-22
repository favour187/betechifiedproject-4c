require('dotenv').config();
const express = requir('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Note-Taking API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});