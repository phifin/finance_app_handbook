import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import {appLogo} from '../../assets/imageSrc';
import CheckBox from '@react-native-community/checkbox';
const TaxCalculator = () => {
  const [income, setIncome] = useState('');
  const [socialInsurance, setSocialInsurance] = useState('');
  const [personalDeduction, setPersonalDeduction] = useState(false);
  const [numDependents, setNumDependents] = useState('');
  const [tax, setTax] = useState(null);

  const calculateTax = () => {
    const incomeValue = parseFloat(income) || 0;
    const socialInsuranceValue = parseFloat(socialInsurance) || 0;
    const numDependentsValue = parseInt(numDependents) || 0;

    const personalDeductionAmount = personalDeduction ? 11000000 : 0;
    const dependentDeductionAmount = 4400000 * numDependentsValue;

    const taxableIncome =
      incomeValue -
      socialInsuranceValue -
      personalDeductionAmount -
      dependentDeductionAmount;

    let taxValue = 0;
    if (taxableIncome <= 5000000) {
      taxValue = taxableIncome * 0.05;
    } else if (taxableIncome <= 10000000) {
      taxValue = 0.25 + (taxableIncome - 5000000) * 0.1;
    } else if (taxableIncome <= 18000000) {
      taxValue = 0.75 + (taxableIncome - 10000000) * 0.15;
    } else if (taxableIncome <= 32000000) {
      taxValue = 1.95 + (taxableIncome - 18000000) * 0.2;
    } else if (taxableIncome <= 52000000) {
      taxValue = 4.75 + (taxableIncome - 32000000) * 0.25;
    } else if (taxableIncome <= 80000000) {
      taxValue = 9.75 + (taxableIncome - 52000000) * 0.3;
    } else {
      taxValue = 18.15 + (taxableIncome - 80000000) * 0.35;
    }

    setTax(taxValue);
  };

  return (
    <SafeAreaView style={styles.container}>
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
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Tax Calculator</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Income "
          keyboardType="numeric"
          value={income}
          onChangeText={setIncome}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Social Insurance money"
          keyboardType="numeric"
          value={socialInsurance}
          onChangeText={setSocialInsurance}
        />
        <View style={styles.checkboxContainer}>
          <Text>Personal Deduction</Text>
          <CheckBox
            value={personalDeduction}
            onValueChange={setPersonalDeduction}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Number of Dependents"
          keyboardType="numeric"
          value={numDependents}
          onChangeText={setNumDependents}
        />
        <Button title="Calculate" onPress={calculateTax} color="#4b0082" />
        {tax !== null && (
          <Text style={styles.result}>Tax: {tax.toFixed(2)} VND</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    padding: 20,
    marginTop: -30,
    alignItems: 'center',
  },
  title: {
    color: '#4b0082',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TaxCalculator;
