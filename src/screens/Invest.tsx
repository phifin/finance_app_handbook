import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import {PieChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const coinSymbols = [
  'BTC',
  'ETH',
  'USDT',
  'BNB',
  'USDC',
  'XRP',
  'ADA',
  'DOGE',
  'SOL',
  'TRX',
  'DOT',
  'LTC',
  'BUSD',
  'SHIB',
  'AVAX',
  'WBTC',
  'MATIC',
  'DAI',
  'UNI',
  'LINK',
  'LEO',
  'ATOM',
  'ETC',
  'TON',
  'XMR',
  'BCH',
  'FIL',
  'LDO',
  'CRO',
  'NEAR',
  'QNT',
  'VET',
  'ALGO',
  'ICP',
  'HNT',
  'FTM',
  'EGLD',
  'THETA',
  'GRT',
  'XTZ',
  'MKR',
  'NEO',
  'AAVE',
  'BSV',
  'AXS',
  'RUNE',
  'ZEC',
  'ENS',
  'STX',
];

const fixedColors = {
  BTC: '#f7931a',
  ETH: '#627eea',
  USDT: '#26a17a',
  BNB: '#f0b90b',
  USDC: '#2775ca',
  XRP: '#00aae4',
  ADA: '#0033ad',
  DOGE: '#c2a633',
  SOL: '#3a99e4',
  TRX: '#eb0029',
  DOT: '#e6007a',
  LTC: '#bcbec0',
  BUSD: '#f0b90b',
  SHIB: '#ff0000',
  AVAX: '#e84142',
  WBTC: '#f7931a',
  MATIC: '#8247e5',
  DAI: '#f4b731',
  UNI: '#ff007a',
  LINK: '#2a5ada',
  LEO: '#ff9535',
  ATOM: '#2e3148',
  ETC: '#34fa99',
  TON: '#229ed9',
  XMR: '#ff6600',
  BCH: '#4cca47',
  FIL: '#0090ff',
  LDO: '#2ab8e6',
  CRO: '#1a5aff',
  NEAR: '#000000',
  QNT: '#4c6c9d',
  VET: '#15bdff',
  ALGO: '#000000',
  ICP: '#29b6f6',
  HNT: '#29b6f6',
  FTM: '#1969ff',
  EGLD: '#f5b300',
  THETA: '#2ab8e6',
  GRT: '#6746ed',
  XTZ: '#a6d0e6',
  MKR: '#1aab9b',
  NEO: '#58bf00',
  AAVE: '#b6509e',
  BSV: '#eab300',
  AXS: '#0057ff',
  RUNE: '#ff0000',
  ZEC: '#f4b731',
  ENS: '#4c6c9d',
  STX: '#5546ff',
};

const PortfolioManager = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(coinSymbols[0]);
  const [quantity, setQuantity] = useState('');
  const [coinPrices, setCoinPrices] = useState({});
  const [isBuying, setIsBuying] = useState(false);

  useEffect(() => {
    fetchCoinPrices();
  }, []);

  const fetchCoinPrices = async () => {
    const prices = {};
    for (const symbol of coinSymbols) {
      try {
        const response = await axios.get(
          `https://api.diadata.org/v1/quotation/${symbol}`,
        );
        prices[symbol] = response.data.Price;
      } catch (ex) {
        console.error('Error fetching data for', symbol, ':', ex);
      }
    }
    setCoinPrices(prices);
  };

  const handleBuy = () => {
    const price = coinPrices[selectedCoin];
    if (price && quantity) {
      const existingAssetIndex = portfolio.findIndex(
        asset => asset.symbol === selectedCoin,
      );
      if (existingAssetIndex !== -1) {
        const existingAsset = portfolio[existingAssetIndex];
        const totalQuantity = existingAsset.quantity + parseFloat(quantity);
        const avgBuyPrice =
          (existingAsset.buyPrice * existingAsset.quantity +
            price * parseFloat(quantity)) /
          totalQuantity;
        const updatedAsset = {
          ...existingAsset,
          quantity: totalQuantity,
          buyPrice: avgBuyPrice,
        };
        const updatedPortfolio = [...portfolio];
        updatedPortfolio[existingAssetIndex] = updatedAsset;
        setPortfolio(updatedPortfolio);
      } else {
        const newAsset = {
          symbol: selectedCoin,
          quantity: parseFloat(quantity),
          buyPrice: price,
        };
        setPortfolio([...portfolio, newAsset]);
      }
      setIsBuying(false);
      setQuantity('');
    }
  };

  const calculatePortfolioValue = () => {
    return portfolio.reduce((acc, asset) => {
      const currentPrice = coinPrices[asset.symbol];
      return acc + asset.quantity * currentPrice;
    }, 0);
  };

  const calculatePNL = asset => {
    const currentPrice = coinPrices[asset.symbol];
    return (currentPrice - asset.buyPrice) * asset.quantity;
  };

  const calculateTotalPNL = () => {
    return portfolio.reduce((acc, asset) => acc + calculatePNL(asset), 0);
  };

  const getPieChartData = () => {
    const assets = portfolio.map(asset => ({
      name: asset.symbol, // Tên của tài sản
      value: asset.quantity * coinPrices[asset.symbol], // Giá trị của tài sản
    }));

    assets.sort((a, b) => b.value - a.value);

    const topAssets = assets.slice(0, 4);
    const otherValue = assets
      .slice(4)
      .reduce((acc, asset) => acc + asset.value, 0);

    const data = topAssets.map(asset => ({
      name: asset.name,
      value: asset.value,
      color: fixedColors[asset.name] || '#CCCCCC',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    }));

    if (otherValue > 0) {
      data.push({
        name: 'Others',
        value: otherValue,
        color: '#CCCCCC',
        legendFontColor: '#7F7F7F',
        legendFontSize: 12,
      });
    }

    return data.map(asset => ({
      ...asset,
      name: `${asset.name}`,
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Investment Portfolio</Text>
      {portfolio.length > 0 && (
        <>
          <PieChart
            data={getPieChartData()}
            width={Dimensions.get('window').width}
            height={220}
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            accessor="value"
            backgroundColor="transparent"
            paddingLeft="8"
            absolute
          />

          <Text style={styles.totalPNL}>
            Total PNL: {calculateTotalPNL().toFixed(2)}$
          </Text>
        </>
      )}
      <Button
        title="Buy Asset"
        onPress={() => setIsBuying(true)}
        style={styles.buyButton}
        color="#4b0082"
      />
      <Text
        style={{
          color: '#4b0082',
          fontSize: 20,
          marginTop: 15,
          marginBottom: 15,
        }}>
        Trading History
      </Text>
      {isBuying && (
        <View style={styles.buyForm}>
          <Picker
            selectedValue={selectedCoin}
            onValueChange={itemValue => setSelectedCoin(itemValue)}
            style={styles.picker}>
            {coinSymbols.map(symbol => (
              <Picker.Item key={symbol} label={symbol} value={symbol} />
            ))}
          </Picker>
          <TextInput
            style={styles.input}
            placeholder="Quantity"
            keyboardType="numeric"
            value={quantity}
            onChangeText={setQuantity}
          />
          <Button title="Buy" onPress={handleBuy} />
          <Button title="Cancel" onPress={() => setIsBuying(false)} />
        </View>
      )}
      {portfolio.map((asset, index) => (
        <View key={index} style={styles.asset}>
          <Text>{asset.symbol}</Text>
          <Text>Quantity: {asset.quantity}</Text>
          <Text>Avg Buy Price: {asset.buyPrice.toFixed(2)}$</Text>
          <Text>Current Price: {coinPrices[asset.symbol]?.toFixed(2)}$</Text>
          <Text>PNL: {calculatePNL(asset).toFixed(2)}$</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  buyForm: {
    marginBottom: 20,
    width: '100%',
  },
  picker: {
    height: 40,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#4b0082',
  },
  asset: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginVertical: 5,
    width: '100%',
  },
  totalPNL: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    color: 'green',
  },
  buyButton: {
    marginBottom: 20,
  },
});

export default PortfolioManager;
