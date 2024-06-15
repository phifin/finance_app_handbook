import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {Image} from 'react-native';
import {appLogo} from '../../assets/imageSrc';
import {Picker} from '@react-native-picker/picker';
const ConversionCalculator = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('VND');
  const [exchangeRate] = useState({
    USD: 1,
    GBP: 0.79,
    CAD: 0.37,
    EUR: 0.93,
    AUD: 1.51,
    VND: 1 / 25500,
  });
  const [result, setResult] = useState('');

  const handleConvert = () => {
    if (!amount || isNaN(amount)) {
      alert('Please enter a valid number for amount.');
      return;
    }

    const convertedAmount = (
      (amount * exchangeRate[fromCurrency]) /
      exchangeRate[toCurrency]
    ).toFixed(2);
    setResult(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={appLogo}
          alt="appLogo"
          style={{height: 200, width: 200, alignSelf: 'center'}}
        />
        <Text
          style={{
            fontSize: 45,
            color: '#4b0082',
            alignSelf: 'center',
            marginTop: -20,
            marginBottom: 40,
          }}>
          Finhub Tools
        </Text>
      </View>
      <Text style={styles.header}>Currency Conversion</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        value={amount}
        onChangeText={text => setAmount(text)}
        keyboardType="numeric"
      />
      <View style={styles.pickerContainer}>
        <Text>From:</Text>
        <Picker
          style={styles.picker}
          selectedValue={fromCurrency}
          onValueChange={itemValue => setFromCurrency(itemValue)}>
          <Picker.Item label="USD" value="USD" />
          <Picker.Item label="GBP" value="GBP" />
          <Picker.Item label="CAD" value="CAD" />
          <Picker.Item label="EUR" value="EUR" />
          <Picker.Item label="AUD" value="AUD" />
          <Picker.Item label="VND" value="VND" />
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={{marginRight: 15}}>To:</Text>
        <Picker
          style={styles.picker}
          selectedValue={toCurrency}
          onValueChange={itemValue => setToCurrency(itemValue)}>
          <Picker.Item label="USD" value="USD" />
          <Picker.Item label="GBP" value="GBP" />
          <Picker.Item label="CAD" value="CAD" />
          <Picker.Item label="EUR" value="EUR" />
          <Picker.Item label="AUD" value="AUD" />
          <Picker.Item label="VND" value="VND" />
        </Picker>
      </View>
      <Button title="Convert" onPress={handleConvert} color="#4b0082" />
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4b0082',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  picker: {
    flex: 1,
    marginLeft: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ConversionCalculator;
