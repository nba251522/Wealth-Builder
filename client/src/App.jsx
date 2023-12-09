import { useState } from 'react';
import { Header, Footer, Budget, Debt, Expense, Savings, Income } from "./components/index";

export default function App() {
  // Create state for app components
  const [budget, setBudget] = useState(false);
  const [savings, setSavings] = useState(false);
  const [debt, setDebt] = useState(false);
  const [expense, setExpense] = useState(false);
  const [income, setIncome] = useState(false);

  function handleSelect(event, type) {
    event.preventDefault();
    switch(type) {
      case "budget":
        setBudget(!budget); // Toggle state of budget
        break;
      case "savings":
        setSavings(!savings); // Toggle state of savings
        break;
      case "debt":
        setDebt(!debt); // Toggle state of debt
        break;
      case "expense":
        setExpense(!expense); // Toggle state of expense
        break;
      case "income":
        setIncome(!income); // Toggle state of income
        break;
      default:
        break;
    }
  }

  function Budget() {
    if (budget) {
      return <div>budget</div>; // return budget component when made avaible 
    }
  }

  function Savings() {
    if (savings) {
      return <div>savings</div>; // return savings component when made avaible
    }
  }

  function Debt() {
    if (debt) {
      return <div>debt</div>; // return debt component when made avaible
    }
  } 

  function Expense() { 
    if (expense) {
      return <div>expense</div>; // return expense component when made avaible
    }
  }

  function Income() {
    if (income) {
      return <div>income</div>; // return income component when made avaible
    }
  }

  return (
    <div className="page-content">
      <Header />
      <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="featureButton"
          data-mdb-toggle="dropdown" aria-expanded="false">
            Select a tracker!
          </button>
          <ul className="dropdown-menu" aria-labelledby="featureButton">
              <li>
                  <a className="dropdown-item">
                      <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="budget"
                          onChange={handleSelect("budget")}/>
                          <label className="form-check-label" for="budget">Budget</label>
                      </div>
                  </a>
              </li>
              <li>
                  <a className="dropdown-item">
                      <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="savings"
                          onChange={handleSelect("savings")}/>
                          <label className="form-check-label" for="savings">Savings</label>
                      </div>
                  </a>
              </li>
              <li>
                  <a className="dropdown-item">
                      <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="debt"
                          onChange={handleSelect("debt")}/>
                          <label className="form-check-label" for="debt">Debt</label>
                      </div>
                  </a>
              </li>
              <li>
                  <a className="dropdown-item">
                      <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="expense"
                          onChange={handleSelect("expense")}/>
                          <label className="form-check-label" for="expense">Expense</label>
                      </div>
                  </a>
              </li>
              <li>
                  <a className="dropdown-item">
                      <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="income"
                          onChange={handleSelect("income")}/>
                          <label className="form-check-label" for="income">Income</label>
                      </div>
                  </a>
              </li>
          </ul>
      </div>
      { Budget() }
      { Savings() }
      { Debt() }
      { Expense() }
      { Income() }
      <Footer />
    </div>
  );
}

