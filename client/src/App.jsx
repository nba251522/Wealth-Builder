import { useState } from 'react';

export default function App() {
  // Create state for budget component
  const [budget, setBudget] = useState(false);

  function handleSelect(event, type) {
    // event.preventDefault();
    switch(type) {
      case "budget":
        setBudget(!budget); // Toggle state of checkbox
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

  return (
    <div className="page-content">
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
          </ul>
      </div>
      { Budget() }
    </div>
  );
}

