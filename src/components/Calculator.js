import React from "react";
// import Typical from 'react-typical'
import ReactTypingEffect from "react-typing-effect";
import ExpenseForm from "./ExpenseForm";

const a = [
  "Renters",
  "Tax",
  "Life insurance",
  "Electricity",
  "Water",
  "Groceries",
  "Gasoline",
  "Telephone bill",
  "Travel expenses",
  "Meals ",
];
function Calculator() {
  return (
    <div>
      <div>
        <h1 className="mainLogo">Expense tracker</h1>
      </div>
      <div className="mainHeader">
        <h1>
          Expenses
          <div className="expenseTitle">
            <ReactTypingEffect
              text={a}
              speed={200}
              typingDelay={200}
              eraseDelay={200}
            />
          </div>
        </h1>
      </div>
      <ExpenseForm />
    </div>
  );
}
export default Calculator;
