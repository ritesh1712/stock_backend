const express = require('express');
const app = express();
const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');
// const watchlistRoutes = require('./routes/watchlistRoutes');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
