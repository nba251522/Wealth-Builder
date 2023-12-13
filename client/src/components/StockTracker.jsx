import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import '../styles/headfoot.css'


const API_KEY = 'OGY1AQHUQBNVEVJL'

const StockTracker = () => {
  const [symbol, setSymbol] = useState('AAPL');
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);

  const handleSymbolChange = (event) => {
    setSymbol(event.target.value.toUpperCase());
  };

  const handleRefreshPress = async () => {
    setLoading(true);

    try {
      // stock price
      const responsePrice = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`);
      const dataPrice = await responsePrice.json();

      if (dataPrice['Global Quote']) {
        const newPrice = parseFloat(dataPrice['Global Quote']['05. price']).toFixed(2);
        setPrice(newPrice);
      } else {
        setPrice(null);
      }

      // stock news
      const responseNews = await fetch(`https://newsapi.org/v2/everything?q=${symbol}&apiKey=09fd426afd764db9988d00143f2ce062`);
      const dataNews = await responseNews.json();

      if (dataNews.articles) {
        setNews(dataNews.articles);
      } else {
        setNews([]);
      }
    } catch (error) {
      console.error(error);
      setPrice(null);
      setNews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleRefreshPress();
  }, []);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Card className="bg-success">
            <Card.Body>
              <Card.Title as="h1" className="mb-4 d-flex justify-content-center align-items-center" style={{ color: 'white' }}>Stock Price Tracker</Card.Title>
              <Form>
                <Form.Group controlId="symbol">
                  <Form.Label style={{ color: 'white' }}>Stock Symbol:</Form.Label>
                  <Form.Control type="text" value={symbol} onChange={handleSymbolChange} />
                </Form.Group>
                <Button variant="primary" onClick={handleRefreshPress} disabled={loading}>
                  Refresh
                </Button>
              </Form>
              <Form className="text-center">
                {loading && <p>Loading...</p>}
                {price && (
                  <p style={{ fontSize: 36, marginTop: 20, color: 'white' }}>
                    {symbol}: ${price}
                  </p>
                )}
                {!price && !loading && (
                  <p style={{ fontSize: 18, marginTop: 20, color: 'white' }}>
                    No data available for {symbol}
                  </p>
                )}
              </Form>
              <p className="text-center">Stock Symbols will give the most up-to-date information.</p> 
              <p className="text-center">if you need to look up a Stock Symbol, please check out <Card.Link href="https://stockanalysis.com/stocks/" rel="noopener noreferrer" className="custom-link">Stock Analysis</Card.Link></p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <h2>News Articles</h2>
              {news.map((article, index) => (
                <Card key={index} style={{ margin: '10px' }}>
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.description}</Card.Text>
                    <Button variant="primary" onClick={() => window.open(article.url, '_blank')}>
                      Read more
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StockTracker;
