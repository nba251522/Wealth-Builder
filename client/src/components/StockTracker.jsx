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
          const responsePrice = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`)  
        }
    }
}