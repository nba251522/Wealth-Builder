import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Row, Col, Container, Card } from 'react-bootstrap';

const Savings = (props) => {
  const [savingsItems, setSavingsItems] = useState([]);
  const [newItemAmount, setNewItemAmount] = useState('');
  const [newItemSource, setNewItemSource] = useState('');
  const [totalSavings, setTotalSavings] = useState(0);
  const [amountError, setAmountError] = useState('');



  const handleAddSavings = async (e) => {
    e.preventDefault();

    if (newItemAmount.trim() !== '' && newItemSource.trim() !== '') {
      const amount = parseFloat(newItemAmount);
      if (!isNaN(amount) && amount > 0) {
        setSavingsItems([...savingsItems, { amount, source: newItemSource }]);
        setTotalSavings(totalSavings + amount);
        props.onSavingsChange(totalSavings + amount);
        setNewItemAmount('');
        setNewItemSource('');
        setAmountError('');
      } else {
        setAmountError('Please enter a valid positive number for the amount.');
      }
    }
  };

  const handleRemoveSavings = (index) => {
    const removedItem = savingsItems[index];
    const updatedSavingsItems = savingsItems.filter((item, i) => i !== index);
    setSavingsItems(updatedSavingsItems);
    setTotalSavings(totalSavings - removedItem.amount);
    props.onSavingsChange(totalSavings - removedItem.amount);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card className="bg-secondary">
            <Card.Body>
              <h2>Savings Log</h2>

              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Source</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {savingsItems.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.source}</td>
                      <td>${item.amount.toFixed(2)}</td>
                      <td>
                        <Button variant="danger" onClick={() => handleRemoveSavings(index)}>
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="bg-secondary">
            <Card.Body>
              <Form onSubmit={handleAddSavings}>
                <Form.Group controlId="formSavingsSource">
                  <Form.Label>Enter Savings Source:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter source"
                    value={newItemSource}
                    onChange={(e) => setNewItemSource(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formSavingsAmount">
                  <Form.Label>Enter Savings Amount:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter amount"
                    value={newItemAmount}
                    onChange={(e) => {
                      setNewItemAmount(e.target.value);
                      setAmountError('');
                    }}
                  />
                  <Form.Text className="text-danger">{amountError}</Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Add Savings
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="bg-success">
            <Card.Body>
              <h4>Total Savings: ${totalSavings.toFixed(2)}</h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Savings;
