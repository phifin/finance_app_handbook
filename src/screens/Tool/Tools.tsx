import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {RootStackParamList} from '../../type/type';
import {StackNavigationProp} from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type ToolProps = {
  navigation: StackNavigationProp<RootStackParamList, 'AllTools'>;
};
const Tools: React.FC<ToolProps> = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
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
          style={{marginLeft: 5}}
        />
        <Text style={{fontSize: 26, fontWeight: 'bold'}}>Tính tỉ giá</Text>
        <FontAwesome5
          name="percentage"
          color="#81088f"
          size={35}
          style={{marginRight: 5}}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 5,
          marginHorizontal: 10,
          marginVertical: 20,
          borderWidth: 1,
          borderRadius: 10,
        }}>
        <FontAwesome5
          name="money-bill"
          color="#81088f"
          size={30}
          style={{marginLeft: 5}}
        />
        <Text style={{fontSize: 26, fontWeight: 'bold'}}>
          Tính thuế thu nhập
        </Text>
        <FontAwesome5
          name="money-bill"
          color="#81088f"
          size={30}
          style={{marginRight: 5}}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 5,
          marginHorizontal: 10,
          borderWidth: 1,
          borderRadius: 10,
        }}>
        <FontAwesome5
          name="user-shield"
          color="#81088f"
          size={30}
          style={{marginLeft: 5}}
        />
        <Text style={{fontSize: 26, fontWeight: 'bold'}}>
          Tính bảo hiểm xã hội
        </Text>
        <FontAwesome5
          name="user-shield"
          color="#81088f"
          size={30}
          style={{marginRight: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Tools;
