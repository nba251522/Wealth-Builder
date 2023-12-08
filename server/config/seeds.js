const db = require("../config/connection");
const cleanDB = require("./cleanDB");

const { User } = require("../models");
const { Transaction } = require("../models");
const { Budget } = require("../models");
const { Notification } = require("../models");
const { SavingsGoal } = require("../models");

db.once("open", async () => {
  await cleanDB("User", "users");

  const users = await User.insertMany([
    {
      ID: 1,
      username: "John Doe",
      email: "john@gmail.com",
      password: "password123",
      createdAt: "2021-03-01"
    },
    {
      ID: 2,
      username: "Jane Doe",
      email: "jane@gmail.com",
      password: "password123",
      createdAt: "2021-03-02"
    },
    {
      ID: 3,
      username: "Bob Smith",
      email: "bob@gmail.com",
      password: "password123",
      createdAt: "2021-03-03"
    },
    {
      ID: 4,
      username: "Sally Smith",
      email: "sally@gmail.com",
      password: "password123",
      createdAt: "2021-03-04"
    },
    {
      ID: 5,
      username: "Joe Johnson",
      email: "joe@gmail.com",
      password: "password123",
      createdAt: "2021-03-05"
    }
  ]);

    console.log("users seeded");

  const transactions = await Transaction.insertMany([
    {
      ID: 1,
      amount: 100.0,
      date: "2021-03-01",
      type: "buy",
      category: "stocks",
      description: "Apple Inc."
    },
    {
      ID: 2,
      amount: 200.0,
      date: "2021-03-02",
      type: "buy",
      category: "stocks",
      description: "Microsoft Corporation"
    },
    {
      ID: 3,
      amount: 300.0,
      date: "2021-03-03",
      type: "buy",
      category: "stocks",
      description: "Amazon.com, Inc."
    },
    {
      ID: 4,
      amount: 400.0,
      date: "2021-03-04",
      type: "buy",
      category: "stocks",
      description: "Facebook, Inc."
    },
    {
      ID: 5,
      amount: 500.0,
      date: "2021-03-05",
      type: "buy",
      category: "stocks",
      description: "Alphabet Inc."
    },
    {
      ID: 6,
      amount: 600.0,
      date: "2021-03-06",
      type: "buy",
      category: "stocks",
      description: "Alphabet Inc."
    },
    {
      ID: 7,
      amount: 700.0,
      date: "2021-03-07",
      type: "buy",
      category: "stocks",
      description: "Tesla, Inc."
    },
    {
      ID: 8,
      amount: 800.0,
      date: "2021-03-08",
      type: "buy",
      category: "stocks",
      description: "NVIDIA Corporation"
    },
    {
      ID: 9,
      amount: 900.0,
      date: "2021-03-09",
      type: "buy",
      category: "stocks",
      description: "PayPal Holdings, Inc."
    },
    {
      ID: 10,
      amount: 1000.0,
      date: "2021-03-10",
      type: "buy",
      category: "stocks",
      description: "Intel Corporation"  
    }
  ]);

  console.log("transactions seeded");

    const budgets = await Budget.insertMany([
        {
            ID: 1,
            user: 1,
            limit: 1000,
            period: "Monthly",
            category: "stocks",
            createdAt: "2021-03-01",
            startDate: "2021-03-01",
            endDate: "2021-03-31",
            recurring: false,
            notificationThreshold: 80,
            status: "Active",
            updatedAt: "2021-03-01"
        },
        {
            ID: 2,
            user: 2,
            limit: 1000,
            period: "Monthly",
            category: "stocks",
            createdAt: "2021-03-01",
            startDate: "2021-03-01",
            endDate: "2021-03-31",
            recurring: false,
            notificationThreshold: 80,
            status: "Active",
            updatedAt: "2021-03-01"
        },
        {
            ID: 3,
            user: 3,
            limit: 1000,
            period: "Monthly",
            category: "stocks",
            createdAt: "2021-03-01",
            startDate: "2021-03-01",
            endDate: "2021-03-31",
            recurring: false,
            notificationThreshold: 80,
            status: "Active",
            updatedAt: "2021-03-01"
        },
        {
            ID: 4,
            user: 4,
            limit: 1000,
            period: "Monthly",
            category: "stocks",
            createdAt: "2021-03-01",
            startDate: "2021-03-01",
            endDate: "2021-03-31",
            recurring: false,
            notificationThreshold: 80,
            status: "Active",
            updatedAt: "2021-03-01"
        },
        {
            ID: 5,
            user: 5,
            limit: 1000,
            period: "Monthly",
            category: "stocks",
            createdAt: "2021-03-01",
            startDate: "2021-03-01",
            endDate: "2021-03-31",
            recurring: false,
            notificationThreshold: 80,
            status: "Active",
            updatedAt: "2021-03-01"
        }
    ]);

    console.log("budgets seeded");

    const notifications = await Notification.insertMany([
        {
            ID: 1,
            user: 1,
            message: "You have exceeded your budget limit for stocks.",
            createdAt: "2021-03-01"
        },
        {
            ID: 2,
            user: 2,
            message: "You have exceeded your budget limit for stocks.",
            createdAt: "2021-03-01"
        },
        {
            ID: 3,
            user: 3,
            message: "You have exceeded your budget limit for stocks.",
            createdAt: "2021-03-01"
        },
        {
            ID: 4,
            user: 4,
            message: "You have exceeded your budget limit for stocks.",
            createdAt: "2021-03-01"
        },
        {
            ID: 5,
            user: 5,
            message: "You have exceeded your budget limit for stocks.",
            createdAt: "2021-03-01"
        }
    ]);

    console.log("notifications seeded");

    const savingsGoals = await SavingsGoal.insertMany([
        {
            ID: 1,
            user: 1,
            goalName: "New Car",
            goalAmount: 10000,
            currentAmount: 0,
            targetDate: "2021-12-31",
            createdAt: "2021-03-01",
            updatedAt: "2021-03-01"
        },
        {
            ID: 2,
            user: 2,
            goalName: "New Car",
            goalAmount: 10000,
            currentAmount: 0,
            targetDate: "2021-12-31",
            createdAt: "2021-03-01",
            updatedAt: "2021-03-01"
        },
        {
            ID: 3,
            user: 3,
            goalName: "New Car",
            goalAmount: 10000,
            currentAmount: 0,
            targetDate: "2021-12-31",
            createdAt: "2021-03-01",
            updatedAt: "2021-03-01"
        },
        {
            ID: 4,
            user: 4,
            goalName: "New Car",
            goalAmount: 10000,
            currentAmount: 0,
            targetDate: "2021-12-31",
            createdAt: "2021-03-01",
            updatedAt: "2021-03-01"
        },
        {
            ID: 5,
            user: 5,
            goalName: "New Car",
            goalAmount: 10000,
            currentAmount: 0,
            targetDate: "2021-12-31",
            createdAt: "2021-03-01",
            updatedAt: "2021-03-01"
        }
    ]);

    console.log("savings goals seeded");

    
























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
