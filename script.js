const expenseInput = document.querySelector("#expense-name");
const amountInput = document.querySelector("#expense-amount");
const totalExpense = document.querySelector("#total-expenses");
const expenseList = document.querySelector("#expense-list");
const expenseMess = document.querySelector("#empty-message");
const searchInput = document.querySelector("#search-input");
const filterSelect = document.querySelector("#filter-select");
const expenses = [];
const savedExpenses = localStorage.getItem("expenses");

if (savedExpenses !== null) {
  const storedExpenses = JSON.parse(savedExpenses);

  expenses.push(...storedExpenses);
}
const clearBtn = document.querySelector("#clear-all");
const addBtn = document.querySelector("#add-expense");
addBtn.addEventListener("click", function () {
  const expenseName = expenseInput.value;
  const expenseAmount = Number(amountInput.value);
  const expense = {
    name: expenseName,
    amount: expenseAmount,
  };
  expenses.push(expense);
  const total = expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);
  renderExpenses(expenses);

  expenseMess.textContent = "Expenses list :";
  expenseList.style.display = "block";

  localStorage.setItem("expenses", JSON.stringify(expenses));
  localStorage.setItem("Total", JSON.stringify(total));

  expenseInput.value = "";
  amountInput.value = "";
  totalExpense.textContent = ` $${total}`;
});
const saveTotal = localStorage.getItem("Total");
if (saveTotal !== null) {
  totalExpense.textContent = saveTotal;
}

clearBtn.addEventListener("click", function () {
  localStorage.removeItem("expenses");
  localStorage.removeItem("Total");
  expenses.length = 0;
  expenseList.innerHTML = "";
  expenseList.style.display = "none";

  expenseMess.textContent = "No Expenses yet.";
  totalExpense.textContent = "$0";
});

function renderExpenses(expensesToRender) {
  expenseList.innerHTML = "";

  expensesToRender.forEach((expense) => {
    const li = document.createElement("li");

    li.textContent = `${expense.name} - $${expense.amount}`;

    expenseList.appendChild(li);
  });
}

if (expenses.length > 0) {
  renderExpenses(expenses);
  expenseMess.textContent = "Expenses list :";
  expenseList.style.display = "block";
} else {
  expenseMess.textContent = "No Expenses yet.";
  expenseList.style.display = "none";
}

searchInput.addEventListener("input", function () {
  const searchValue = searchInput.value.toLowerCase();

  const filteredExpenses = expenses.filter((expense) => {
    return expense.name.toLowerCase().includes(searchValue);
  });

  renderExpenses(filteredExpenses);
});

filterSelect.addEventListener("change", function () {
  const filterValue = filterSelect.value;
  let filteredExpenses;
  if (filterValue === "all") {
    filteredExpenses = expenses;
  } else if (filterValue === "highest") {
    filteredExpenses = [...expenses].sort((a, b) => {
      return b.amount - a.amount;
    });
  } else if (filterValue === "lowest") {
    filteredExpenses = [...expenses].sort((a, b) => {
      return a.amount - b.amount;
    });
  }
  renderExpenses(filteredExpenses);
});
