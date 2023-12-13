const path = require('path');
// Import and configure dotenv
require ('dotenv'). config ();
const mongoURI = process.env.MONGODB_URI;

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const dbConfig = require('./config/dbConfig');
const typeDefs = require('./Schema/typeDefs');
const resolvers = require('./Schema/resolvers');
const { verifyJWT, signJWT } = require('./middleware/authMiddleware'); 
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }) 
    .then(() => console.log('📫 MongoDB Connected! 📫'))
    .catch(err => console.error('MongoDB connection error:', err));

// Body parser middleware to handle JSON data
app.use(express.json());

// Create an instance of ApolloServer
const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: ({ req }) => ({ req })
});

async function startServer() {
    // Start the Apollo Server
    await server.start();

    // Apply the Apollo GraphQL middleware and set the path to /graphql
    server.applyMiddleware({ app, path: '/graphql' });

    // Use other middleware
    app.use(verifyJWT);
    app.use(signJWT);
    app.use(errorMiddleware); 

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT} 🚀`));
}

startServer();