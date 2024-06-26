import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView, TextInput} from 'react-native';
import axios from 'axios';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

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

const Market = () => {
  const [marketData, setMarketData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchData() {
      const fetchedData = [];
      for (const symbol of coinSymbols) {
        try {
          const response = await axios.get(
            `https://api.diadata.org/v1/quotation/${symbol}`,
          );
          const json = response.data;
          fetchedData.push(json);
        } catch (ex) {
          console.error('Error fetching data for', symbol, ':', ex);
        }
      }
      setMarketData(fetchedData);
    }

    fetchData();
  }, []);

  const filteredData = marketData.filter(item =>
    item.Name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View>
      <View
        style={{
          marginLeft: 20,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 20,
          width: 350,
          height: 40,
          margin: 10,
          paddingLeft: 10,
        }}>
        <FontAwesome5Icon name="search" size={12} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search your cryptocurrency"
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.headerCell}>#</Text>
        <Text style={styles.headerCell}>Name</Text>
        <Text style={styles.headerCell}>Price $</Text>
        <Text style={styles.headerCell}>Change 24h</Text>
      </View>
      <ScrollView>
        {filteredData.length > 0 &&
          filteredData.map((item, index) => {
            const change24h = (
              ((item.Price - item.PriceYesterday) / item.PriceYesterday) *
              100
            ).toFixed(2);
            return (
              <PriceCard
                key={index} // Using index as key, ensure it's unique
                order={index + 1}
                name={item.Name} // Using the Name from the API response
                price={item.Price.toFixed(2)} // Rounding the Price to 2 decimal places
                change={`${change24h}%`} // Calculating and rounding change 24h to 2 decimal places
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {fontSize: 17, marginLeft: 5, marginBottom: -2},
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
    color: 'black',
  },
  headerCell: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4b0082',
  },
});

export default Market;
