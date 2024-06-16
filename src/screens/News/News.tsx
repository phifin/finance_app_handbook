import React from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import NewsCard from '../../components/newsCard';
import BTC from '../../assets/imageSrc';
import {dji, bank, crypto, revenue, stonk, tech} from '../../assets/imageSrc';
import {RootStackParamList} from '../../type/type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
const randomNewsArray = [
  {
    id: '1',
    newsImage: stonk,
    newsTitle:
      'Thị trường chứng khoán tăng mạnh sau thông báo lãi suất kinh vay sao',
    timeStamp: '2023-11-29T10:15:00.000Z',
  },
  {
    id: '2',
    newsImage: bank,
    newsTitle: 'Tăng trưởng kinh tế quý 3 vượt dự báo, GDP tăng 6.5%',
    timeStamp: '2023-12-01T08:45:00.000Z',
  },
  {
    id: '3',
    newsImage: dji,
    newsTitle: 'Dow Jones vượt mốc 40,000 điểm lần đầu tiên trong lịch sử',
    timeStamp: '2023-11-30T15:30:00.000Z',
  },
  {
    id: '4',
    newsImage: BTC,
    newsTitle:
      'Bitcoin giảm giá sâu sau thông tin hạn chế giao dịch ở Trung Quốc',
    timeStamp: '2023-12-02T11:00:00.000Z',
  },
  {
    id: '5',
    newsImage: tech,
    newsTitle: 'Công ty công nghệ lớn công bố kế hoạch đầu tư 10 tỷ USD vào AI',
    timeStamp: '2023-12-01T18:20:00.000Z',
  },
  {
    id: '6',
    newsImage: crypto,
    newsTitle:
      'Các xu hướng thị trường tiền điện tử năm 2024 dự báo sẽ phát triển mạnh mẽ',
    timeStamp: '2023-11-29T14:55:00.000Z',
  },
  {
    id: '7',
    newsImage: revenue,
    newsTitle: 'Doanh thu của công ty XYZ tăng 15% trong quý 4',
    timeStamp: '2023-11-30T09:10:00.000Z',
  },
  {
    id: '8',
    newsImage: BTC,
    newsTitle:
      'Chiến lược đầu tư mới của các quỹ đầu tư công cộng: Chuyển đổi sang năng lượng tái tạo',
    timeStamp: '2023-12-02T13:25:00.000Z',
  },
  {
    id: '9',
    newsImage: BTC,
    newsTitle:
      'Công nghệ blockchain dự báo sẽ thay đổi cách thức thanh toán toàn cầu',
    timeStamp: '2023-12-01T16:40:00.000Z',
  },
  {
    id: '10',
    newsImage: BTC,
    newsTitle:
      'Dự báo tăng trưởng kinh tế toàn cầu năm 2024: Tăng trưởng ổn định tại các thị trường mới nổi',
    timeStamp: '2023-11-29T12:00:00.000Z',
  },
  {
    id: '11',
    newsImage: BTC,
    newsTitle:
      'Các quy định mới về tài chính sẽ có ảnh hưởng lớn đến các ngân hàng lớn',
    timeStamp: '2023-11-30T17:50:00.000Z',
  },
  {
    id: '12',
    newsImage: BTC,
    newsTitle:
      'Cơ hội đầu tư vào thị trường bất động sản nước ngoài: Lợi nhuận hấp dẫn và rủi ro thấp',
    timeStamp: '2023-12-02T10:30:00.000Z',
  },
  {
    id: '13',
    newsImage: BTC,
    newsTitle: 'Phân tích chi tiết về biến động giá vàng trong tuần qua',
    timeStamp: '2023-12-01T14:15:00.000Z',
  },
  {
    id: '14',
    newsImage: BTC,
    newsTitle:
      'Công ty ABC ra mắt chiến lược phát triển mới, tập trung vào thị trường châu Á',
    timeStamp: '2023-11-29T20:05:00.000Z',
  },
  {
    id: '15',
    newsImage: BTC,
    newsTitle: 'Lộ trình lập kế hoạch tài chính cá nhân cho năm 2024',
    timeStamp: '2023-11-30T11:55:00.000Z',
  },
];

type NewsProps = {
  navigation: StackNavigationProp<RootStackParamList, 'News'>;
  route: RouteProp<RootStackParamList, 'News'>;
};

const News: React.FC<NewsProps> = ({navigation}) => {
  const handleLogout = async () => {
    try {
      // Xóa accessToken từ AsyncStorage
      await AsyncStorage.removeItem('accessToken');
      // Cập nhật trạng thái isLoggedIn về false
      // Điều hướng về màn hình Login
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };
  return (
    <ScrollView>
      <TouchableOpacity
        onPress={handleLogout}
        style={{marginLeft: 360, marginTop: 5}}>
        <FontAwesome5Icon name="sign-out-alt" size={20} />
      </TouchableOpacity>
      <View style={{margin: 10}}>
        <Image source={bank} style={{height: 300, width: 'auto'}} />
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>
          {randomNewsArray[1].newsTitle}
        </Text>
      </View>
      {randomNewsArray.map(newsItem => (
        <NewsCard
          key={newsItem.id}
          navigation={navigation}
          id={newsItem.id}
          newsImage={newsItem.newsImage}
          newsTitle={newsItem.newsTitle}
          timeStamp={newsItem.timeStamp}
        />
      ))}
    </ScrollView>
  );
};

export default News;
