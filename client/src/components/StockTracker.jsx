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

    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#F5F5F5', padding: 20 }}>
                <Text style={{ fontSize: 24 }}>Stock Price Tracker</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 18 }}>Symbol:</Text>
                    <TextInput style={{ marginLeft: 10, marginRight: 10, fontSize: 18, borderWidth: 1, padding: 5, flex: 1 }} value={symbol} onChangeText={handleSymbolChange} />
                    <Button title="Refresh" onPress={handleRefreshPress} disabled={loading} />
                </View>
                {loading && <Text style={{ fontSize: 18, marginTop: 20 }}>Loading...</Text>}
                {price && (
                    <Text style={{ fontSize: 24, marginTop: 20 }}>
                        {symbol}: ${price}
                    </Text>
                )}
                {!price && !loading && <Text style={{ fontSize: 18, marginTop: 20 }}>No data available for {symbol}</Text>}
                </View>
                <ScrollView style={{ flex: 1, marginTop: 20 }}>
                    {news.map((article, index) => (
                        <View key={index} style={{ backgroundColor: '#F5F5F5', padding: 10, margin: 10 }}>
                            <Text style={{ fontSize: 18 }}>{article.title}</Text>
                            <Text style={{ fontSize: 16 }}>{article.description}</Text>
                            <Button title="Read more" onPress={() => Linking.openURL(article.url)} />
                        </View>
                    ))}
                </ScrollView>
            </View>
    );
};

export default StockApp;