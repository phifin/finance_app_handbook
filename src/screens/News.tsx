import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import NewsCard from '../components/newsCard';
import BTC from '../assets/imageSrc';
import {RootStackParamList} from '../type/type';
const randomNewsArray = [
  {
    id: '1',
    newsImage: BTC,
    newsTitle:
      'Thị trường chứng khoán tăng mạnh sau thông báo lãi suất kinh vay sao',
    timeStamp: new Date(Date.now() - Math.random() * 1000000000).toISOString(),
  },
  {
    id: '2',
    newsImage: BTC,
    newsTitle: 'Công ty công nghệ mới ra mắt sản phẩm đột phá',
    timeStamp: new Date(Date.now() - Math.random() * 1000000000).toISOString(),
  },
  {
    id: '3',
    newsImage: BTC,
    newsTitle: 'Đội tuyển bóng đá quốc gia giành chiến thắng lịch sử',
    timeStamp: new Date(Date.now() - Math.random() * 1000000000).toISOString(),
  },
];

type NewsProps = {
  navigation: StackNavigationProp<RootStackParamList, 'News'>;
  route: RouteProp<RootStackParamList, 'News'>;
};

const News: React.FC<NewsProps> = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{margin: 10}}>
        <Image source={BTC} style={{height: 300, width: 'auto'}} />
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
