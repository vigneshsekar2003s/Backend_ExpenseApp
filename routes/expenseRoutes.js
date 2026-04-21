const express = require('express');
const router = express.Router();

const { addExpense, getExpenses, deleteExpense } = require('../controllers/expenseController');

router.post('/', addExpense);
router.get('/', getExpenses);
router.delete('/:id', deleteExpense);
router.put("/:id", updateExpense);

module.exports = router;