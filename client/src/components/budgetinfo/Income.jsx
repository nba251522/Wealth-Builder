import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Row, Col, Container, Card } from 'react-bootstrap';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_INCOME } from '../../utils/queries';
import { ADD_TRANSACTION, REMOVE_TRANSACTION } from '../../utils/mutations';

const Income = (props) => {
  const [incomeItems, setIncomeItems] = useState([]);
  const [newItemAmount, setNewItemAmount] = useState('');
  const [newItemSource, setNewItemSource] = useState('');
  const [totalIncome, setTotalIncome] = useState(0);
  const [amountError, setAmountError] = useState('');

  const { error, data } = useQuery(QUERY_INCOME, {
    variables: { _id: props.token },
  });

  const [addTransaction, { error: addError, data: addData }] = useMutation(ADD_TRANSACTION);
  const [removeTransaction, { error: removeError, data: removeData }] = useMutation(REMOVE_TRANSACTION);

  useEffect(() => {
    // Load existing expense items or set to empty array
    if (!error) {
      setIncomeItems(data?.income || []);
    }
  }, [error, data, addData, removeData]);

  const handleAddIncome = async () => {
    if (newItemAmount.trim() !== '' && newItemSource.trim() !== '') {
      const amount = parseFloat(newItemAmount);
      if (!isNaN(amount) && amount > 0) {
        setIncomeItems([...incomeItems, { amount, source: newItemSource }]);
        setTotalIncome(totalIncome + amount);
        props.onIncomeChange(totalIncome + amount);
        setNewItemAmount('');
        setNewItemSource('');
        setAmountError('');

        // Add transaction to database
        try {
          await addTransaction({
              variables: {
                amount: amount,
                type: 'Expense',
                category: 'Expense',
                description: newItemSource,
                date: new Date(),
              },
          });

        } catch (err) {
          console.error(addError, err);
        }
      } else {
        setAmountError('Please enter a valid positive number for the amount.');
      }
    }
  };

  const handleRemoveIncome = (index) => {
    const removedItem = incomeItems[index];
    const updatedIncomeItems = incomeItems.filter((item, i) => i !== index);
    setIncomeItems(updatedIncomeItems);
    setTotalIncome(totalIncome - removedItem.amount);
    props.onIncomeChange(totalIncome - removedItem.amount);

    try { 
      // Remove transaction from database
      removeTransaction({
        variables: {
          _id: removedItem._id,
        },
      });
    } catch (err) {
      console.error(removeError, err);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card className="bg-secondary">
            <Card.Body>
              <h2>Income Log</h2>
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
                  {incomeItems.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.source}</td>
                      <td>${item.amount.toFixed(2)}</td>
                      <td>
                        <Button variant="danger" onClick={() => handleRemoveIncome(index)}>
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
              <Form>
                <Form.Group controlId="formIncomeSource">
                  <Form.Label>Enter Income Source:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter source"
                    value={newItemSource}
                    onChange={(e) => setNewItemSource(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formIncomeAmount">
                  <Form.Label>Enter Income Amount:</Form.Label>
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
                <Button variant="primary" onClick={handleAddIncome}>
                  Add Income
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
              <h4>Total Income: ${totalIncome.toFixed(2)}</h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Income;
