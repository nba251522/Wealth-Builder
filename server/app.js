const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');

// Importing configurations
const dbConfig = require('./config/dbConfig'); 
const schema = require('./Schema/typeDefs');
const resolvers = require('./Schema/resolvers');

// Importing middleware
const authMiddleware = require('./middleware/authMiddleware'); 
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

// Connect to MongoDB
mongoose.connect(dbConfig.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Body parser middleware to handle JSON data
app.use(express.json());

// GraphQL endpoint
app.use('/graphql', 
    authMiddleware, 
    graphqlHTTP({
        schema: schema,
        rootValue: resolvers,
        graphiql: true, 
    })
);

app.use(errorMiddleware); 

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));