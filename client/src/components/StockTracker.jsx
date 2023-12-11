import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, Linking } from 'react-native';

const API_KEY = 'YOUR_API_KEY';

const StockApp = () => {
    const [symbol, setSymbol] = useState('AAPL');
    const [price, setPrice] = useState(null);
    const [loading, setLoading] = useState(false);
    const [news, setNews] = useState([]);

    const handleSymbolChange = (text) => {
        setSymbol(text.toUpperCase());
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
}