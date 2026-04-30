const Expense = require('../models/Expense');

exports.addExpense = async (req, res) => {
  try {
    const { title, amount, category, date } = req.body;

    const expense = new Expense({
      title,
      amount: Number(amount),
      category,
      date,
    });

    await expense.save();
    res.json("Expense Added");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json("Expense Deleted");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateExpense = async (req, res) => {
  try {
    const { title, amount, category, date } = req.body;

    const updated = await Expense.findByIdAndUpdate(
      req.params.id,
      {
        title,
        amount: Number(amount),
        category,
        date,
      },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).send(err.message);
  }
};