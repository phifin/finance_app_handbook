import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView, TextInput} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
// Importing the local JSON data
import marketData from '../../assets/etfs.json';

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

const ETFMarket = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Since the data is local, we can directly set it without an async call
    setData(marketData);
  }, []);

  const filteredData = data.filter(
    item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
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
          placeholder="Search your ETFs"
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
            return (
              <PriceCard
                key={item.symbol} // Using symbol as key, which should be unique
                order={index + 1}
                name={item.symbol} // Using the name from the JSON file
                price={item.price.toFixed(2)} // Rounding the price to 2 decimal places
                change={item.change} // Displaying change 24h
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
    color: '#6a0dad',
  },
  headerCell: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4b0082',
  },
});

export default ETFMarket;
