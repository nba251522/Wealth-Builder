import React from 'react';
import Card from 'react-bootstrap/Card';
import Banner from '../assets/Gold.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutUs() {
    return (
        <>
        <div className="d-flex justify-content-center align-items-center">
            <Card className="text-center" style={{ width: '900px' }}>
                <Card.Img
                    variant="top"
                    src={Banner}
                    alt="Wealth Builder Banner"
                    style={{ width: '900px' }}
                />
                <Card.Body>
                    <h5>
                        Welcome to Wealth Builder, where financial empowerment meets simplicity. Building wealth is a journey, and we're dedicated to helping you at every step. Our mission is to empower individuals and families to take control of their financial futures. Regardless of your starting point, everyone deserves the opportunity to build wealth and achieve financial goals. Wealth Builder provides uncomplicated budgeting tools for beginners and experts, with cutting-edge security to safeguard your financial data.
                    </h5>
                    <br />
                    <h3>Wealth Builder – Empowering Your Financial Future</h3>
                </Card.Body>
            </Card>
            </div>
        </>
    );
}

export default AboutUs;
