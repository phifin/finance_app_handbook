import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {RootStackParamList} from '../../type/type';
import {StackNavigationProp} from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {appLogo} from '../../assets/imageSrc';

type ToolProps = {
  navigation: StackNavigationProp<RootStackParamList, 'AllTools'>;
};
const Tools: React.FC<ToolProps> = ({navigation}) => {
  return (
    <View>
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
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: 5,
          marginHorizontal: 10,
          borderWidth: 1,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate('ConversionCalculator')}>
        <FontAwesome5
          name="percentage"
          color="#81088f"
          size={35}
          style={{marginLeft: 5, paddingRight: 24}}
        />
        <Text style={{fontSize: 26, fontWeight: 'bold'}}>Tính tỉ giá</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: 5,
          marginHorizontal: 10,
          marginVertical: 20,
          borderWidth: 1,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate('TaxCalculator')}>
        <FontAwesome5
          name="money-bill"
          color="#81088f"
          size={30}
          style={{marginLeft: 5, paddingRight: 12}}
        />
        <Text style={{fontSize: 26, fontWeight: 'bold'}}>
          Tính thuế thu nhập
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: 5,
          marginHorizontal: 10,
          borderWidth: 1,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate('SocialInsuaranceCalculator')}>
        <FontAwesome5
          name="user-shield"
          color="#81088f"
          size={30}
          style={{marginLeft: 5, paddingRight: 12}}
        />
        <Text style={{fontSize: 26, fontWeight: 'bold'}}>
          Tính bảo hiểm xã hội
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tools;
