import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './src/routes/users'; 

const app = express();

// Middleware
app.use(express.json()); // To parse JSON bodies

// Connect to MongoDB 
mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Use the user routes
app.use('/api/users', userRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
