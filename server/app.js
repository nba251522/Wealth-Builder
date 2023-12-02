const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const dbConfig = require('./config/dbConfig');
const typeDefs = require('./Schema/typeDefs');
const resolvers = require('./Schema/resolvers');
const authMiddleware = require('./middleware/authMiddleware'); 
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

// Connect to MongoDB
mongoose.connect(dbConfig.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Body parser middleware to handle JSON data
app.use(express.json());

// Create an instance of ApolloServer
const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: ({ req }) => ({ req })
});

// Apply the Apollo GraphQL middleware and set the path to /graphql
server.applyMiddleware({ app, path: '/graphql' });

// Use other middleware
app.use(authMiddleware);
app.use(errorMiddleware); 

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));