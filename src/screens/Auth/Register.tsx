import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {appLogo} from '../../assets/imageSrc';
import {RootStackParamList} from '../../type/type';
import {StackNavigationProp} from '@react-navigation/stack';
import {registerUser} from '../../api/api'; // Import hàm registerUser từ api.ts

type RegisterProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Register'>;
};

const Register: React.FC<RegisterProps> = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await registerUser(username, password);
      Alert.alert('Success', response.message, [
        {text: 'OK', onPress: () => navigation.navigate('Login')},
      ]);
    } catch (error) {
      Alert.alert(
        'Error',
        error.message || 'There was an issue registering the user.',
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={appLogo} style={styles.logo} alt="app-logo" />
        <Text style={styles.logoText}>Finhub</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.signInText}>Sign up</Text>
        <View style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <FontAwesome5 name="user" size={20} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={setUsername}
              value={username}
            />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesome5 name="lock" size={20} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={newPassword => setPassword(newPassword)}
              defaultValue={password}
            />
          </View>
        </View>
        <View style={styles.center}>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Have your account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.footerLink}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoText: {
    marginTop: -20,
    color: 'violet',
    fontWeight: 'bold',
    fontSize: 50,
  },
  formContainer: {
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
  },
  signInText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  inputWrapper: {
    marginTop: 15,
  },
  inputContainer: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.7,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 22,
  },
  icon: {
    marginRight: 10,
    color: 'gray',
  },
  input: {
    flex: 1,
    height: 40,
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    display: 'flex',
    marginTop: 7,
    width: 300,
    height: 50,
    backgroundColor: '#8E4CE4',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  footer: {
    display: 'flex',
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 18,
  },
  footerLink: {
    fontSize: 18,
    color: 'blue',
  },
});

export default Register;
