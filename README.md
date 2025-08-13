# Simple Budget Tracker

A web application to help users log their income and expenses, calculate totals, and track their budget efficiently.

## Features

### Phase 1: Core Functionality

- **Application Title:** Clear heading for "Budget Tracker".
- **Display Section:** Shows Total Income, Total Expenses, and Current Balance.
- **Transaction Form:** 
  - Input for description (e.g., "Salary", "Groceries")
  - Input for amount (number type)
  - Select dropdown or radio buttons for transaction type ("Income" or "Expense")
  - "Add Transaction" button
- **Transaction List:** Shows all added transactions with clear distinction between incomes (green) and expenses (red).
- **Responsive Layout:** Clean styling using Flexbox or Grid.

### Phase 2: Data Persistence

- **localStorage Integration:** 
  - All transactions are saved to `localStorage` when added or deleted.
  - On page load, transactions are restored from `localStorage`.
  - Persistent budget data across browser sessions.

### Phase 3: Enhancements

- **Delete Transactions:** 
  - Each transaction has a delete button (`X`).
  - Remove transactions and update `localStorage` in real-time.
- **Filter Transactions:** 
  - Filter by "All", "Income", or "Expense" using buttons or dropdown.
  - Displays only relevant transactions without affecting the main data.

## How It Works

- Transactions are stored as objects in an array:
  ```js
  { id: Date.now(), description: 'Coffee', amount: 5, type: 'expense' }
  ```
- The UI updates automatically after every transaction addition, deletion, or filter change.
- Data is saved and loaded using `localStorage` via JSON serialization.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ram23sarath/Simple-Budget-Tracker.git
   ```

2. **Open `index.html` in your browser.**

3. **Start tracking your budget!**

## Technologies Used

- **HTML:** Structure for forms, lists, and display sections.
- **CSS:** Responsive, user-friendly design.
- **JavaScript:** Handles logic, state management, and data persistence.

## Contributing

Feel free to fork this repository and submit pull requests for new features or bug fixes!

## License

[MIT License](LICENSE)

## Feedback

Once Phase 1 is complete, share your code for review and feedback!