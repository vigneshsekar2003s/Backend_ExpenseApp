const Expense = require('../models/expense'); 

exports.addExpense = async (req, res) => {
  try {
    console.log("API HIT", req.body);

    const { title, amount, category } = req.body;

    const expense = new Expense({
      title,
      amount: Number(amount), 
      category
    });

    await expense.save();

    console.log("Saved to DB");

    res.json("Expense Added");
  } catch (err) {
    console.log("ERROR", err);
    res.status(500).send(err.message);
  }
};


exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    await Expense.findByIdAndDelete(id);

    res.json("Expense Deleted");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateExpense = async (req, res) => {
  try {
    const { title, amount, category } = req.body;

    const updated = await Expense.findByIdAndUpdate(
      req.params.id,
      { title, amount, category },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).send(err.message);
  }
};