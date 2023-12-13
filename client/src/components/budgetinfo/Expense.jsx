import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Row, Col, Container, Card } from 'react-bootstrap';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_EXPENSE } from '../../utils/queries';
import { ADD_TRANSACTION, REMOVE_TRANSACTION } from '../../utils/mutations';

import Auth from '../utils/auth';

const Expense = (props) => {
  const [expenseItems, setExpenseItems] = useState([]);
  const [newItemAmount, setNewItemAmount] = useState('');
  const [newItemSource, setNewItemSource] = useState('');
  const [totalExpense, setTotalExpense] = useState(0);
  const [amountError, setAmountError] = useState('');

  const [addTransaction, { error: addError, data: addData }] = useMutation(ADD_TRANSACTION);
  const [removeTransaction, { error: removeError, data: removeData }] = useMutation(REMOVE_TRANSACTION);

  useEffect(() => {
    getExpenses();
  }, [addData, removeData]);

  const handleAddExpense = async () => {
    if (newItemAmount.trim() !== '' && newItemSource.trim() !== '') {
      const amount = parseFloat(newItemAmount);
      if (!isNaN(amount) && amount > 0) {
        setExpenseItems([...expenseItems, { amount, source: newItemSource }]);
        setTotalExpense(totalExpense + amount);
        props.onExpenseChange(totalExpense + amount);
        setNewItemAmount('');
        setNewItemSource('');
        setAmountError('');

        try {
          await addTransaction({
            variables: {
              source: newItemSource,
              amount: amount,
              type: 'Expense',
            },
          });

        } catch (err) {
          console.error(err);
        }
      } else {
        setAmountError('Please enter a valid positive number for the amount.');
      }
    }
  };

  const handleRemoveExpense = (index) => {
    const removedItem = expenseItems[index];
    const updatedExpenseItems = expenseItems.filter((item, i) => i !== index);
    setExpenseItems(updatedExpenseItems);
    setTotalExpense(totalExpense - removedItem.amount);
    props.onExpenseChange(totalExpense - removedItem.amount);
    
    try { 
      removeTransaction({
        variables: {
          _id: removedItem._id,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const getExpenses = () => {
    const token = Auth.getToken();

    if (!token || !Auth.isTokenExpired(token)) {
      console.error("ERROR: User isn't logged in. Please login now.")
    }

    const user = Auth.getProfile().data;

    const { loading, error, data } = useQuery(QUERY_EXPENSE, {
      variables: { user: user._id },
    });

    if (loading) return null;
    if (error) return `Error! ${error}`;

    const expenseItems = data?.expenses || [];
    setExpenseItems(expenseItems);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card className="bg-secondary">
            <Card.Body>
              <h2>Expense Log</h2>
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
                  {expenseItems.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.source}</td>
                      <td>${item.amount.toFixed(2)}</td>
                      <td>
                        <Button variant="danger" onClick={() => handleRemoveExpense(index)}>
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
                <Form.Group controlId="formExpenseSource">
                  <Form.Label>Enter Expense Source:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter source"
                    value={newItemSource}
                    onChange={(e) => setNewItemSource(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formExpenseAmount">
                  <Form.Label>Enter Expense Amount:</Form.Label>
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
                <Button variant="primary" onClick={handleAddExpense}>
                  Add Expense
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
              <h4>Total Expense: ${totalExpense.toFixed(2)}</h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Expense;
