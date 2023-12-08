const db = require("../config/connection");
const cleanDB = require("./cleanDB");

const { User } = require("../models");
const { Transaction } = require("../models");

db.once("open", async () => {
  await cleanDB("User", "users");

  const users = await Users.insertMany([
    {
      ID: 1,
      username: "John Doe",
      email: "john@gmail.com",
      password: "password123",
      createdAt: "2021-03-01",
    },
    {
      ID: 2,
      username: "Jane Doe",
      email: "jane@gmail.com",
      password: "password123",
      createdAt: "2021-03-02",
    },
    {
      ID: 3,
      username: "Bob Smith",
      email: "bob@gmail.com",
      password: "password123",
      createdAt: "2021-03-03",
    },
    {
      ID: 4,
      username: "Sally Smith",
      email: "sally@gmail.com",
      password: "password123",
      createdAt: "2021-03-04",
    },
    {
      ID: 5,
      username: "Joe Johnson",
      email: "joe@gmail.com",
      password: "password123",
      createdAt: "2021-03-05",
    },
  ]);

  const transactions = [
    {
      ID: 1,
      amount: 100.0,
      type: "buy",
      category: "stocks",
      description: "Apple Inc.",
      date: "2021-03-01",
    },
    {
      ID: 2,
      amount: 200.0,
      type: "buy",
      category: "stocks",
      description: "Microsoft Corporation",
      date: "2021-03-02",
    },
    {
      ID: 3,
      amount: 300.0,
      type: "buy",
      category: "stocks",
      description: "Amazon.com, Inc.",
      date: "2021-03-03",
    },
    {
      ID: 4,
      amount: 400.0,
      type: "buy",
      category: "stocks",
      description: "Facebook, Inc.",
      date: "2021-03-04",
    },
    {
      ID: 5,
      amount: 500.0,
      type: "buy",
      category: "stocks",
      description: "Alphabet Inc.",
      date: "2021-03-05",
    },
    {
      ID: 6,
      amount: 600.0,
      type: "buy",
      category: "stocks",
      description: "Alphabet Inc.",
      date: "2021-03-06",
    },
    {
      ID: 7,
      amount: 700.0,
      type: "buy",
      category: "stocks",
      description: "Tesla, Inc.",
      date: "2021-03-07",
    },
    {
      ID: 8,
      amount: 800.0,
      type: "buy",
      category: "stocks",
      description: "NVIDIA Corporation",
      date: "2021-03-08",
    },
    {
      ID: 9,
      amount: 900.0,
      type: "buy",
      category: "stocks",
      description: "PayPal Holdings, Inc.",
      date: "2021-03-09",
    },
    {
      ID: 10,
      amount: 1000.0,
      type: "buy",
      category: "stocks",
      description: "Intel Corporation",
      date: "2021-03-10",
    },
  ];
  console.log("transactions seeded");

  process.exit();
});

const portfolios = [
  {
    name: "John Doe Portfolio",
    userId: 1,
  },
  {
    name: "Jane Doe Portfolio",
    userId: 2,
  },
  {
    name: "Bob Smith Portfolio",
    userId: 3,
  },
  {
    name: "Sally Smith Portfolio",
    userId: 4,
  },
  {
    name: "Joe Johnson Portfolio",
    userId: 5,
  },
  {
    name: "Jill Johnson Portfolio",
    userId: 6,
  },
  {
    name: "Bill Williams Portfolio",
    userId: 7,
  },
  {
    name: "Betty Williams Portfolio",
    userId: 8,
  },
  {
    name: "Jack Jones Portfolio",
    userId: 9,
  },
  {
    name: "Jill Jones Portfolio",
    userId: 10,
  },
];

const stocks = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    exchange: "NASDAQ",
    userId: 1,
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    exchange: "NASDAQ",
    userId: 2,
  },
  {
    symbol: "AMZN",
    name: "Amazon.com, Inc.",
    exchange: "NASDAQ",
    userId: 3,
  },
  {
    symbol: "FB",
    name: "Facebook, Inc.",
    exchange: "NASDAQ",
    userId: 4,
  },
  {
    symbol: "GOOG",
    name: "Alphabet Inc.",
    exchange: "NASDAQ",
    userId: 5,
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    exchange: "NASDAQ",
    userId: 6,
  },
  {
    symbol: "TSLA",
    name: "Tesla, Inc.",
    exchange: "NASDAQ",
    userId: 7,
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    exchange: "NASDAQ",
    userId: 8,
  },
  {
    symbol: "PYPL",
    name: "PayPal Holdings, Inc.",
    exchange: "NASDAQ",
    userId: 9,
  },
  {
    symbol: "INTC",
    name: "Intel Corporation",
    exchange: "NASDAQ",
    userId: 10,
  },
];

const transactions = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    exchange: "NASDAQ",
    userId: 1,
    portfolioId: 1,
    price: 100.0,
    quantity: 10,
    transactionType: "buy",
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    exchange: "NASDAQ",
    userId: 2,
    portfolioId: 2,
    price: 200.0,
    quantity: 20,
    transactionType: "buy",
  },
  {
    symbol: "AMZN",
    name: "Amazon.com, Inc.",
    exchange: "NASDAQ",
    userId: 3,
    portfolioId: 3,
    price: 300.0,
    quantity: 30,
    transactionType: "buy",
  },
  {
    symbol: "FB",
    name: "Facebook, Inc.",
    exchange: "NASDAQ",
    userId: 4,
    portfolioId: 4,
    price: 400.0,
    quantity: 40,
    transactionType: "buy",
  },
  {
    symbol: "GOOG",
    name: "Alphabet Inc.",
    exchange: "NASDAQ",
    userId: 5,
    portfolioId: 5,
    price: 500.0,
    quantity: 50,
    transactionType: "buy",
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    exchange: "NASDAQ",
    userId: 6,
    portfolioId: 6,
    price: 600.0,
    quantity: 60,
    transactionType: "buy",
  },
  {
    symbol: "TSLA",
    name: "Tesla, Inc.",
    exchange: "NASDAQ",
    userId: 7,
    portfolioId: 7,
    price: 700.0,
    quantity: 70,
    transactionType: "buy",
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    exchange: "NASDAQ",
    userId: 8,
    portfolioId: 8,
    price: 800.0,
    quantity: 80,
    transactionType: "buy",
  },
  {
    symbol: "PYPL",
    name: "PayPal Holdings, Inc.",
    exchange: "NASDAQ",
    userId: 9,
    portfolioId: 9,
    price: 900.0,
    quantity: 90,
    transactionType: "buy",
  },
  {
    symbol: "INTC",
    name: "Intel Corporation",
    exchange: "NASDAQ",
    userId: 10,
    portfolioId: 10,
    price: 1000.0,
    quantity: 100,
    transactionType: "buy",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await User.bulkCreate(users);
    await Portfolio.bulkCreate(portfolios);
    await Stock.bulkCreate(stocks);
    await Transaction.bulkCreate(transactions);
    console.log("Seeding complete!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
