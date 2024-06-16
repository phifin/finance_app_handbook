import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import BTC from '../../assets/imageSrc';
import {RootStackParamList} from '../../type/type';
import {dji, bank, crypto, revenue, stonk, tech} from '../../assets/imageSrc';

type NewsDetailProps = {
  route: RouteProp<RootStackParamList, 'NewsDetails'>;
};

const randomNewsArray = [
  {
    id: '1',
    newsImage: stonk,
    newsTitle: 'Thị trường chứng khoán tăng mạnh sau thông báo lãi suất',
    timeStamp: '2023-11-29T10:15:00.000Z',
    content:
      'Thị trường chứng khoán đã chứng kiến một ngày tăng mạnh khi Ngân hàng Trung ương công bố giữ nguyên lãi suất kinh doanh chính thức. Nhà đầu tư phản ứng tích cực khi tin tức này được công bố, đặc biệt là các cổ phiếu của các công ty hàng đầu trong ngành công nghệ và tài chính. \n \n Các chuyên gia dự báo rằng sự ổn định này có thể tiếp tục trong thời gian tới, dựa trên dấu hiệu kinh tế tích cực và triển vọng tăng trưởng của các công ty lớn.',
  },
  {
    id: '2',
    newsImage: bank,
    newsTitle: 'Tăng trưởng kinh tế quý 3 vượt dự báo, GDP tăng 6.5%',
    timeStamp: '2023-12-01T08:45:00.000Z',
    content:
      'Theo số liệu mới nhất từ Cục Thống kê Quốc gia, GDP quý 3 đã tăng 6.5%, vượt xa các dự báo trước đó. Sự tăng trưởng mạnh mẽ được hỗ trợ chủ yếu bởi ngành công nghiệp và dịch vụ. Việc tăng trưởng này được dự báo sẽ góp phần tích cực vào nền kinh tế nói chung trong năm nay, với triển vọng tăng cường đầu tư và xuất khẩu. Các chính sách kinh tế cũng được dự báo sẽ tiếp tục hỗ trợ cho môi trường kinh doanh thuận lợi.',
  },
  {
    id: '3',
    newsImage: dji,
    newsTitle: 'Dow Jones vượt mốc 40,000 điểm lần đầu tiên trong lịch sử',
    timeStamp: '2023-11-30T15:30:00.000Z',
    content:
      'Thị trường chứng khoán Mỹ đã ghi nhận một cột mốc lịch sử khi chỉ số Dow Jones vượt qua ngưỡng 40,000 điểm lần đầu tiên. Sự kiện này cho thấy sự phục hồi mạnh mẽ của nền kinh tế Mỹ sau những thách thức do đại dịch gây ra. Các nhà đầu tư đã phản ứng tích cực với tin tức này, góp phần tăng giá trị của các cổ phiếu blue-chip và tạo đà tích cực cho thị trường toàn diện.',
  },
  {
    id: '4',
    newsImage: BTC,
    newsTitle:
      'Bitcoin giảm giá sâu sau thông tin hạn chế giao dịch ở Trung Quốc',
    timeStamp: '2023-12-02T11:00:00.000Z',
    content:
      'Giá Bitcoin đã giảm mạnh sau khi Trung Quốc công bố hạn chế các hoạt động liên quan đến tiền điện tử. Tin tức này đã gây ra làn sóng bán tháo mạnh mẽ trên thị trường, khiến giá Bitcoin và các đồng tiền điện tử khác sụt giảm. Các nhà đầu tư đang chờ đợi xem tác động của quyết định này sẽ kéo dài ra sao và liệu các biện pháp phòng ngừa tương tự có được áp dụng ở các quốc gia khác hay không.',
  },
  {
    id: '5',
    newsImage: tech,
    newsTitle: 'Công ty công nghệ lớn công bố kế hoạch đầu tư 10 tỷ USD vào AI',
    timeStamp: '2023-12-01T18:20:00.000Z',
    content:
      'Công ty công nghệ hàng đầu đã chính thức công bố kế hoạch đầu tư lớn vào lĩnh vực Trí tuệ nhân tạo (AI), với tổng số vốn đầu tư lên đến 10 tỷ USD. Đây được xem là bước đi chiến lược nhằm gia tăng năng lực nghiên cứu và phát triển công nghệ mới, đồng thời củng cố vị thế của công ty trên thị trường toàn cầu. Kế hoạch này dự kiến sẽ mang lại nhiều cơ hội mới và thúc đẩy sự phát triển bền vững của ngành công nghệ.',
  },
  {
    id: '6',
    newsImage: crypto,
    newsTitle:
      'Các xu hướng thị trường tiền điện tử năm 2024 dự báo sẽ phát triển mạnh mẽ',
    timeStamp: '2023-11-29T14:55:00.000Z',
    content:
      'Thị trường tiền điện tử dự kiến sẽ tiếp tục phát triển mạnh mẽ trong năm 2024, với sự gia tăng đáng kể về sự chấp nhận và sử dụng từ phía các nhà đầu tư và doanh nghiệp. Các chuyên gia cho rằng sự bùng nổ trong lĩnh vực DeFi (tài chính phi tập trung) và sự phát triển của các dApp (ứng dụng phi tập trung) sẽ là những yếu tố chính thúc đẩy thị trường này. Tuy nhiên, các nhà đầu tư cũng cần phải cân nhắc đến các rủi ro tiềm ẩn và biến động lớn của giá trong ngắn hạn.',
  },
  {
    id: '7',
    newsImage: revenue,
    newsTitle: 'Doanh thu của công ty XYZ tăng 15% trong quý 4',
    timeStamp: '2023-11-30T09:10:00.000Z',
    content:
      'Công ty XYZ vừa công bố kết quả tài chính quý 4 với mức tăng trưởng doanh thu ấn tượng, lên đến 15% so với cùng kỳ năm trước. Sự tăng trưởng này chủ yếu được hỗ trợ bởi các chiến lược marketing hiệu quả và sự gia tăng đáng kể trong doanh số bán hàng. Công ty cũng cho biết họ đã đạt được một số mốc quan trọng về lợi nhuận và hoạt động kinh doanh khác, mở ra triển vọng tích cực cho năm tài chính mới.',
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
      <Image
        source={desiredNews.newsImage}
        style={{height: 270, width: '100%', marginTop: 20}}
      />
      <Text style={{marginTop: 15, fontSize: 20}}>{desiredNews.content}</Text>
    </ScrollView>
  );
};

export default NewsDetail;
