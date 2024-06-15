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

const SocialInsuaranceCalculator = () => {
  const [salary, setSalary] = useState('');
  const [startYear, setStartYear] = useState('');
  const [total, setTotal] = useState(null);

  const calculateBHXH = () => {
    const salaryValue = parseFloat(salary) || 0;
    const startYearValue = parseInt(startYear) || new Date().getFullYear();

    const currentYear = new Date().getFullYear();
    let yearsBefore2014 = Math.max(0, 2014 - startYearValue);
    let yearsAfter2014 = Math.max(0, currentYear - 2014);

    if (startYearValue >= 2014) {
      yearsBefore2014 = 0;
      yearsAfter2014 = currentYear - startYearValue;
    }

    let totalBHXH = 0;
    if (yearsBefore2014 > 0) {
      totalBHXH += yearsBefore2014 * 1.5 * salaryValue * 0.08;
    }
    if (yearsAfter2014 > 0) {
      totalBHXH += yearsAfter2014 * 2 * salaryValue * 0.08;
    }
    if (yearsBefore2014 === 0 && yearsAfter2014 === 0) {
      totalBHXH = 0.22 * salaryValue * 0.08;
    }

    setTotal(totalBHXH);
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
        <Text style={styles.title}>Social Insuarance Calculator</Text>
        <TextInput
          style={styles.input}
          placeholder="Insurable salary"
          keyboardType="numeric"
          value={salary}
          onChangeText={setSalary}
        />
        <TextInput
          style={styles.input}
          placeholder="Start year"
          keyboardType="numeric"
          value={startYear}
          onChangeText={setStartYear}
        />
        <Button title="Calculate" onPress={calculateBHXH} color="#4b0082" />
        {total !== null && (
          <Text style={styles.result}>
            Tổng số tiền BHXH: {total.toFixed(2)} VND
          </Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#4b0082',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SocialInsuaranceCalculator;
