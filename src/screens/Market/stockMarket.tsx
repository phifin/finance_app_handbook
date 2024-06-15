import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';

const stockSymbols = [
  'AAPL',
  'MSFT',
  'GOOGL',
  'AMZN',
  'TSLA',
  'NVDA',
  'BRK.B',
  'V',
  'JPM',

  'UNH',

  'BAC',
  'ADBE',
  'NFLX',
  'VZ',
  'CMCSA',
  'KO',
  'PEP',
  'INTC',

  'T',

  'NKE',
];

const PriceCard = ({order, name, price, change}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.cell}>{order}</Text>
      <Text style={styles.cell}>{name}</Text>
      <Text style={styles.cell}>{price}</Text>
      <Text style={styles.cell}>{change}</Text>
    </View>
  );
};

const StockMarket = () => {
  const [marketData, setMarketData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = [];
      for (const symbol of stockSymbols) {
        try {
          const response = await axios.get(
            `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=H3H60FGNG6JIS5GW`,
          );
          const {data} = response;
          if (data['Global Quote']) {
            const globalQuote = data['Global Quote'];
            fetchedData.push({
              symbol: globalQuote['01. symbol'],
              price: parseFloat(globalQuote['05. price']).toFixed(2),
              change: globalQuote['10. change percent'],
            });
          } else {
            console.error('Global Quote not found for', symbol);
            setError(`Global Quote not found for ${symbol}`);
          }
        } catch (ex) {
          console.error('Error fetching data for', symbol, ':', ex);
          setError(`Error fetching data for ${symbol}: ${ex.message}`);
        }
      }
      setMarketData(fetchedData);
    }

    fetchData();
  }, []);

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.row}>
        <Text style={styles.headerCell}>#</Text>
        <Text style={styles.headerCell}>Name</Text>
        <Text style={styles.headerCell}>Price</Text>
        <Text style={styles.headerCell}>Change 24h</Text>
      </View>
      {marketData.map((item, index) => (
        <PriceCard
          key={item.symbol}
          order={index + 1}
          name={item.symbol} // Display symbol as name for now
          price={item.price}
          change={item.change}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    marginLeft: -30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f0f0f0',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: '#6a0dad',
  },
  headerCell: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4b0082',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});

export default StockMarket;
