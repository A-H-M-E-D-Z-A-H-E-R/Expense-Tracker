# Expense Tracker

A simple and modern **Expense Tracker** built with vanilla HTML, CSS, and JavaScript.

The project allows users to add expenses, calculate their total spending, search through expenses, sort them by amount, and keep their data saved using the browser's `localStorage`.

## 📸 Preview

<p align="center">
  <img src="preview.png" alt="Expense Tracker Preview" width="900">
</p>

## ✨ Features

- Add new expenses with a name and amount
- Automatically calculate the total expenses
- Save expenses using `localStorage`
- Restore saved expenses when the page is reopened
- Search expenses by name
- Sort expenses by:
  - All
  - Highest amount
  - Lowest amount

- Clear all expenses
- Automatically update the expense list
- Responsive layout for smaller screens
- Dark modern interface

## 🛠️ Technologies

- **HTML5** — Page structure and semantic elements
- **CSS3** — Styling, layout, responsive design, and dark UI
- **JavaScript (ES6+)** — Application logic and DOM manipulation
- **LocalStorage API** — Persistent expense data

## 📂 Project Structure

```text
Expense-Tracker/
│
├── index.html
├── style.css
└── script.js
```

## ⚙️ How It Works

### 1. Adding an Expense

The user enters an expense name and amount, then clicks **Add Expense**.

JavaScript creates an expense object:

```javascript
{
  name: "Keyboard",
  amount: 850
}
```

The object is added to the expenses array and the interface is updated.

### 2. Calculating the Total

The total amount is calculated using JavaScript's `reduce()` method:

```javascript
const total = expenses.reduce((total, expense) => {
  return total + expense.amount;
}, 0);
```

This keeps the displayed total synchronized with the expenses.

### 3. Persistent Data

Expenses are stored in the browser using `localStorage`.

```javascript
localStorage.setItem("expenses", JSON.stringify(expenses));
```

When the application starts, previously saved expenses are loaded back into the application.

### 4. Search

The search field filters expenses based on their names.

For example:

```text
Keyboard
Mouse
Monitor
Headset
```

Searching for `mouse` will only display the matching expense.

### 5. Sorting

The filter menu allows expenses to be sorted by amount.

**Highest:**

```javascript
[...expenses].sort((a, b) => b.amount - a.amount);
```

**Lowest:**

```javascript
[...expenses].sort((a, b) => a.amount - b.amount);
```

The original array is copied before sorting so the stored order is not directly modified.

### 6. Clearing Expenses

The **Clear All** button removes the stored expenses, resets the array, clears the list, and returns the total to `$0`.

## 🎨 Design

The interface uses a minimal dark theme with:

- Dark background
- Neutral gray borders
- Rounded cards and inputs
- Simple typography
- Responsive layouts
- Focused visual hierarchy

The main layout is limited to a maximum width of `900px` to keep the application comfortable to use on larger screens.

## 📱 Responsive Design

The layout adapts to smaller screens using a CSS media query.

On screens below `700px`:

- The expense form becomes a single-column layout
- The search and filter controls stack vertically
- The summary section becomes vertically aligned
- The add button takes the full available width

## 🚀 Getting Started

No frameworks, packages, or build tools are required.

### 1. Clone the repository

```bash
git clone (https://github.com/A-H-M-E-D-Z/Expense-Tracker.git)
```

### 2. Open the project

Navigate to the project directory:

```bash
cd Expense-Tracker
```

### 3. Run the project

Open `index.html` directly in your browser, or use **VS Code Live Server** for a better development experience.

## 🧠 What I Practiced

This project was built to practice fundamental JavaScript concepts in a real-world style application.

Key concepts used:

- DOM selection
- Event listeners
- Functions
- Arrays
- Objects
- `push()`
- `filter()`
- `sort()`
- `reduce()`
- Spread syntax
- Template literals
- Type conversion
- JSON serialization
- `localStorage`
- Dynamic DOM rendering
- Responsive CSS

## 🔮 Future Improvements

Possible improvements for future versions:

- Add delete functionality for individual expenses
- Add expense categories
- Add dates for each expense
- Add editing functionality
- Add monthly spending statistics
- Add income tracking
- Add charts and visual analytics
- Add form validation
- Add currency selection
- Improve search and filtering so they can work together

## 📌 Project Status

**Completed — Beginner JavaScript Project**

This project focuses on building a functional frontend application using vanilla JavaScript without relying on frameworks or external libraries.

## 👨‍💻 Developer

**Ahmed Zaher Abdelmohsen**

Software Engineer & Front-End Developer

Focused on building modern web experiences and improving my skills in JavaScript ,frontend development ,React JS ,and software engineering.
