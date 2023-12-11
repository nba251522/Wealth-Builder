const db = require("./dbConfig");
const cleanDB = require("./cleanDB");

const { User } = require("../models");
const { Transaction } = require("../models");
const { Budget } = require("../models");
const { Notification } = require("../models");
const { SavingsGoal } = require("../models");

db.once("open", async () => {
  await cleanDB("User", "users");
  await cleanDB("Transaction", "transactions");
  await cleanDB("Budget", "budgets");
  await cleanDB("Notification", "notifications");
  await cleanDB("SavingsGoal", "savingsGoals");

  const users = await User.insertMany([
    {
      user: 1,
      username: "John Doe",
      email: "john@gmail.com",
      password: "password123",
      createdAt: "2021-03-01",
    },
    {
      user: 2,
      username: "Jane Doe",
      email: "jane@gmail.com",
      password: "password123",
      createdAt: "2021-03-02",
    },
    {
      user: 3,
      username: "Bob Smith",
      email: "bob@gmail.com",
      password: "password123",
      createdAt: "2021-03-03",
    },
    {
      user: 4,
      username: "Sally Smith",
      email: "sally@gmail.com",
      password: "password123",
      createdAt: "2021-03-04",
    },
    {
      user: 5,
      username: "Joe Johnson",
      email: "joe@gmail.com",
      password: "password123",
      createdAt: "2021-03-05",
    },
  ]);

  console.log("users seeded");

  const transactions = await Transaction.insertMany([
    {
      user: "_id_1",
      amount: 100.0,
      date: "2021-03-01",
      type: "Income",
      category: "Salary",
      // description: "Monthly salary deposit",
    },
    {
      user: "user_id_2",
      amount: 200.0,
      date: "2021-03-02",
      type: "Expense",
      category: "Groceries",
      // description: "Weekly grocery shopping",
    },
    {
      user: 3,
      amount: 300.0,
      date: "2021-03-03",
      type: "Income",
      category: "stocks",
      // description: "Amazon.com, Inc.",
    },
    {
      user: 4,
      amount: 400.0,
      date: "2021-03-04",
      type: "Income",
      category: "stocks",
      // description: "Facebook, Inc.",
    },
    {
      user: 5,
      amount: 500.0,
      date: "2021-03-05",
      type: "Income",
      category: "stocks",
      // description: "Alphabet Inc.",
    },
    {
      user: 1,
      amount: 600.0,
      date: "2021-03-06",
      type: "Income",
      category: "stocks",
      // description: "Alphabet Inc.",
    },
    {
      user: 2,
      amount: 700.0,
      date: "2021-03-07",
      type: "Income",
      category: "stocks",
      // description: "Tesla, Inc.",
    },
    {
      user: 3,
      amount: 800.0,
      date: "2021-03-08",
      type: "Income",
      category: "stocks",
      // description: "NVIDIA Corporation",
    },
    {
      user: 4,
      amount: 900.0,
      date: "2021-03-09",
      type: "Income",
      category: "stocks",
      // description: "PayPal Holdings, Inc.",
    },
    {
      user: 5,
      amount: 1000.0,
      date: "2021-03-10",
      type: "Income",
      category: "stocks",
      // description: "Intel Corporation",
    },
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
      updatedAt: "2021-03-01",
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
      updatedAt: "2021-03-01",
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
      updatedAt: "2021-03-01",
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
      updatedAt: "2021-03-01",
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
      updatedAt: "2021-03-01",
    },
  ]);

  console.log("budgets seeded");

  const notifications = await Notification.insertMany([
    {
      ID: 1,
      user: 1,
      message: "You have exceeded your budget limit for stocks.",
      type: "Budget",
      createdAt: "2021-03-01",
    },
    {
      ID: 2,
      user: 2,
      message: "You have exceeded your budget limit for stocks.",
      type: "SavingsGoal",
      createdAt: "2021-03-01",
    },
    {
      ID: 3,
      user: 3,
      message: "You have exceeded your budget limit for stocks.",
      type: "Transaction",
      createdAt: "2021-03-01",
    },
    {
      ID: 4,
      user: 4,
      message: "You have exceeded your budget limit for stocks.",
      type: "General",
      createdAt: "2021-03-01",
    },
    {
      ID: 5,
      user: 5,
      message: "You have exceeded your budget limit for stocks.",
      type: "Budget",
      createdAt: "2021-03-01",
    },
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
      updatedAt: "2021-03-01",
    },
    {
      ID: 2,
      user: 2,
      goalName: "New Car",
      goalAmount: 10000,
      currentAmount: 0,
      targetDate: "2021-12-31",
      createdAt: "2021-03-01",
      updatedAt: "2021-03-01",
    },
    {
      ID: 3,
      user: 3,
      goalName: "New Car",
      goalAmount: 10000,
      currentAmount: 0,
      targetDate: "2021-12-31",
      createdAt: "2021-03-01",
      updatedAt: "2021-03-01",
    },
    {
      ID: 4,
      user: 4,
      goalName: "New Car",
      goalAmount: 10000,
      currentAmount: 0,
      targetDate: "2021-12-31",
      createdAt: "2021-03-01",
      updatedAt: "2021-03-01",
    },
    {
      ID: 5,
      user: 5,
      goalName: "New Car",
      goalAmount: 10000,
      currentAmount: 0,
      targetDate: "2021-12-31",
      createdAt: "2021-03-01",
      updatedAt: "2021-03-01",
    },
  ]);

  console.log("savings goals seeded");

  process.exit(0);
});

// Run the seed file with the following command:
// node server/config/seeds.js
// You should see the following output in your terminal:
// users seeded
// transactions seeded
// budgets seeded
// notifications seeded
// savings goals seeded
// If you see any errors, make sure you have the correct file paths and that your models are set up correctly.
// If you see the above output, you have successfully seeded your database!
// You can check your database by running the following command in your terminal:
// mongo
// This will open the MongoDB shell. You can then run the following commands:
// show dbs
// use wealth-builder
// show collections
// db.users.find()
// db.transactions.find()
// db.budgets.find()
// db.notifications.find()
// db.savingsgoals.find()
// You should see the following output in your terminal:
// { "_id" : ObjectId("604a3d8a2c4e8b0c8c6d4d0b"), "ID" : 1, "username" : "John Doe", "email" : "
//
//
//
//
//
//
//
//
//
//
//

// Path: server/config/dbConfig.js
// Compare this snippet from server/config/dbConfig.js:
// const mongoose = require('mongoose');
//  
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://
