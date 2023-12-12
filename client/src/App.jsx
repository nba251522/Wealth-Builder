import { useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import { Budget, Header, Footer } from './components';
import './index.css';

export default function App() {
  // Create state for budget component
  const [budgetState, setBudget] = useState(false);

  function handleSelect(event, type) {
    event.preventDefault();
    switch(type) {
      case "budget":
        setBudget(!budgetState); // Toggle state of checkbox
        break;
      default:
        break;
    }
  }

  return (
    <div className="page-content">
      <Header />
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="featureButton">
          Select a tracker!
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Form.Check
              type="checkbox"
              id="budget"
              label="Budget"
              onChange={(event) => handleSelect(event, 'budget')}
            />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      { budgetState && <Budget /> } 
      <Footer />
    </div>
  );
}

