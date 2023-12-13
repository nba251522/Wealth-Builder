import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import Expense from './budgetinfo/Expense';
import Income from './budgetinfo/Income';
import Savings from './budgetinfo/Savings';
import SavingsGoal from './budgetinfo/SavingsGoal';
import CardGroup from 'react-bootstrap/CardGroup';


const Budget = () => {
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalSavings, setTotalSavings] = useState(0);
    const [totalSavingsGoal, setTotalSavingsGoal] = useState(0);
    const [disposableIncome, setDisposableIncome] = useState(0);

    useEffect(() => {
        setDisposableIncome(totalIncome - totalExpense);
    }, [totalIncome, totalExpense]);

    const handleIncomeChange = (amount) => {
        setTotalIncome(amount);
    };

    const handleExpenseChange = (amount) => {
        setTotalExpense(amount);
    };

    const handleSavingsChange = (amount) => {
        setTotalSavings(amount);
    };

    const handleSavingsGoalChange = (amount) => {
        setTotalSavingsGoal(amount);
    };

    return (
        <Container className='budget'>
            <Row className="mt-3">
                <Col>
                    <Card className="bg-success">
                        <Card.Body>
                            <Card.Title as="h1" className="mb-4 d-flex justify-content-center align-items-center" style={{ color: 'white' }}>Budget Summary</Card.Title>
                            <Card.Body className="d-flex justify-content-center align-items-center" style={{ color: 'white' }}>
                                <h4>Total Disposable Income: ${disposableIncome.toFixed(2)}</h4>
                            </Card.Body>
                            <CardGroup>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Total Income: ${totalIncome.toFixed(2)}</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Total Expense: ${totalExpense.toFixed(2)}</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Total Savings: ${totalSavings.toFixed(2)}</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Total Savings Goal: ${totalSavingsGoal.toFixed(2)}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <Income onIncomeChange={handleIncomeChange} />
                </Col>
                <Col>
                    <Expense onExpenseChange={handleExpenseChange} />
                </Col>
                <Col>
                    <Savings onSavingsChange={handleSavingsChange} />
                </Col>
                <Col>
                    <SavingsGoal onSavingsGoalChange={handleSavingsGoalChange} />
                </Col>
            </Row>
        </Container>
    );
};

export default Budget;
