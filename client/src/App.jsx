import { useState } from 'react';
import { Header, Footer, Budget } from "./components/index";

export default function App() {
  // Create state for app components
  const [budget, setBudget] = useState(false);

  function handleSelect(event, type) {
    event.preventDefault();
    switch(type) {
      case "budget":
        setBudget(!budget); // Toggle state of budget
        break;
      default:
        break;
    }
  }

  function Budget() {
    // return budget component
    if (budget) return ( <Budget /> );  
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
      <Footer />
    </div>
  );
}

