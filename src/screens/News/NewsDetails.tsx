import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import BTC from '../../assets/imageSrc';
import {RootStackParamList} from '../../type/type';

type NewsDetailProps = {
  route: RouteProp<RootStackParamList, 'NewsDetails'>;
};

const randomNewsArray = [
  {
    id: '1',
    newsImage: BTC,
    newsTitle: 'Thị trường chứng khoán tăng mạnh sau thông báo lãi suất',
    timeStamp: new Date(Date.now() - Math.random() * 1000000000).toISOString(),
    content: `Sau thông báo về việc giảm lãi suất của ngân hàng trung ương, thị trường chứng khoán đã có một phiên giao dịch đầy sôi động. Chỉ số VN-Index tăng mạnh mẽ, vượt qua mốc 1200 điểm, nhờ sự lạc quan của các nhà đầu tư.`,
  },
  {
    id: '2',
    newsImage: BTC,
    newsTitle: 'Công ty công nghệ mới ra mắt sản phẩm đột phá',
    timeStamp: new Date(Date.now() - Math.random() * 1000000000).toISOString(),
    content: `Một công ty công nghệ trẻ vừa chính thức giới thiệu sản phẩm mới, được đánh giá là có tính đột phá cao.`,
  },
  {
    id: '3',
    newsImage: BTC,
    newsTitle: 'Đội tuyển bóng đá quốc gia giành chiến thắng lịch sử',
    timeStamp: new Date(Date.now() - Math.random() * 1000000000).toISOString(),
    content: `Trong một trận đấu đầy kịch tính, đội tuyển bóng đá quốc gia đã xuất sắc đánh bại đối thủ mạnh để giành chức vô địch giải đấu khu vực.`,
  },
];

const NewsDetail: React.FC<NewsDetailProps> = ({route}) => {
  const {id} = route.params;
  const desiredNews = randomNewsArray.find(news => news.id === id);

  if (!desiredNews) {
    return (
      <View>
        <Text>Bài báo không tồn tại</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{marginTop: 20, marginLeft: 10, marginRight: 10}}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>
        {desiredNews.newsTitle}
      </Text>
      <Text style={{marginTop: 7, textAlign: 'right', fontSize: 15}}>
        {desiredNews.timeStamp}
      </Text>
      <Image source={BTC} style={{height: 270, width: '100%', marginTop: 20}} />
      <Text style={{marginTop: 15, fontSize: 20}}>{desiredNews.content}</Text>
    </ScrollView>
  );
};

export default NewsDetail;
