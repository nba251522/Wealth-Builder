const db = require('../config/connection');
const { User } = require('../models');
const { Portfolio } = require('../models');
const { Stock } = require('../models');
const { Transaction } = require('../models');

const users = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: '
        password: 'password'
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: '
        password: 'password'
    },
    {
        firstName: 'Bob',
        lastName: 'Smith',
        email: '
        password: 'password'
    },
    {
        firstName: 'Sally',
        lastName: 'Smith',
        email: '
        password: 'password'
    },
    {
        firstName: 'Joe',
        lastName: 'Johnson',
        email: '
        password: 'password'
    },
    {
        firstName: 'Jill',
        lastName: 'Johnson',
        email: '
        password: 'password'
    },
    {
        firstName: 'Bill',
        lastName: 'Williams',
        email: '
        password: 'password'
    },
    {
        firstName: 'Betty',
        lastName: 'Williams',
        email: '
        password: 'password'
    },
    {
        firstName: 'Jack',
        lastName: 'Jones',
        email: '
        password: 'password'
    },
    {
        firstName: 'Jill',
        lastName: 'Jones',
        email: '
        password: 'password'
    },
];

const portfolios = [    
    {
        name: 'John Doe Portfolio',
        userId: 1
    },
    {
        name: 'Jane Doe Portfolio',
        userId: 2
    },
    {
        name: 'Bob Smith Portfolio',
        userId: 3
    },
    {
        name: 'Sally Smith Portfolio',
        userId: 4
    },
    {
        name: 'Joe Johnson Portfolio',
        userId: 5
    },
    {
        name: 'Jill Johnson Portfolio',
        userId: 6
    },
    {
        name: 'Bill Williams Portfolio',
        userId: 7
    },
    {
        name: 'Betty Williams Portfolio',
        userId: 8
    },
    {
        name: 'Jack Jones Portfolio',
        userId: 9
    },
    {
        name: 'Jill Jones Portfolio',
        userId: 10
    },
];

const stocks = [
    {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        exchange: 'NASDAQ',
        userId: 1
    },
    {
        symbol: 'MSFT',
        name: 'Microsoft Corporation',
        exchange: 'NASDAQ',
        userId: 2
    },
    {
        symbol: 'AMZN',
        name: 'Amazon.com, Inc.',
        exchange: 'NASDAQ',
        userId: 3
    },
    {
        symbol: 'FB',
        name: 'Facebook, Inc.',
        exchange: 'NASDAQ',
        userId: 4
    },
    {
        symbol: 'GOOG',
        name: 'Alphabet Inc.',
        exchange: 'NASDAQ',
        userId: 5
    },
    {
        symbol: 'GOOGL',
        name: 'Alphabet Inc.',
        exchange: 'NASDAQ',
        userId: 6
    },
    {
        symbol: 'TSLA',
        name: 'Tesla, Inc.',
        exchange: 'NASDAQ',
        userId: 7
    },
    {
        symbol: 'NVDA',
        name: 'NVIDIA Corporation',
        exchange: 'NASDAQ',
        userId: 8
    },
    {
        symbol: 'PYPL',
        name: 'PayPal Holdings, Inc.',
        exchange: 'NASDAQ',
        userId: 9
    },
    {
        symbol: 'INTC',
        name: 'Intel Corporation',
        exchange: 'NASDAQ',
        userId: 10
    },
];

const transactions = [
    {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        exchange: 'NASDAQ',
        userId: 1,
        portfolioId: 1,
        price: 100.00,
        quantity: 10,
        transactionType: 'buy'
    },
    {
        symbol: 'MSFT',
        name: 'Microsoft Corporation',
        exchange: 'NASDAQ',
        userId: 2,
        portfolioId: 2,
        price: 200.00,
        quantity: 20,
        transactionType: 'buy'
    },
    {
        symbol: 'AMZN',
        name: 'Amazon.com, Inc.',
        exchange: 'NASDAQ',
        userId: 3,
        portfolioId: 3,
        price: 300.00,
        quantity: 30,
        transactionType: 'buy'
    },
    {
        symbol: 'FB',
        name: 'Facebook, Inc.',
        exchange: 'NASDAQ',
        userId: 4,
        portfolioId: 4,
        price: 400.00,
        quantity: 40,
        transactionType: 'buy'
    },
    {
        symbol: 'GOOG',
        name: 'Alphabet Inc.',
        exchange: 'NASDAQ',
        userId: 5,
        portfolioId: 5,
        price: 500.00,
        quantity: 50,
        transactionType: 'buy'
    },
    {
        symbol: 'GOOGL',
        name: 'Alphabet Inc.',
        exchange: 'NASDAQ',
        userId: 6,
        portfolioId: 6,
        price: 600.00,
        quantity: 60,
        transactionType: 'buy'
    },
    {
        symbol: 'TSLA',
        name: 'Tesla, Inc.',
        exchange: 'NASDAQ',
        userId: 7,
        portfolioId: 7,
        price: 700.00,
        quantity: 70,
        transactionType: 'buy'
    },
    {
        symbol: 'NVDA',
        name: 'NVIDIA Corporation',
        exchange: 'NASDAQ',
        userId: 8,
        portfolioId: 8,
        price: 800.00,
        quantity: 80,
        transactionType: 'buy'
    },
    {
        symbol: 'PYPL',
        name: 'PayPal Holdings, Inc.',
        exchange: 'NASDAQ',
        userId: 9,
        portfolioId: 9,
        price: 900.00,
        quantity: 90,
        transactionType: 'buy'
    },
    {
        symbol: 'INTC',
        name: 'Intel Corporation',
        exchange: 'NASDAQ',
        userId: 10,
        portfolioId: 10,
        price: 1000.00,
        quantity: 100,
        transactionType: 'buy'
    },
];

const seed = async () => {
    try {
        await db.sync({ force: true });
        await User.bulkCreate(users);
        await Portfolio.bulkCreate(portfolios);
        await Stock.bulkCreate(stocks);
        await Transaction.bulkCreate(transactions);
        console.log('Seeding complete!');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seed();

