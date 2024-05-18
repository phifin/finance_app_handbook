import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../type/type';

type NewsCardProps = {
  navigation: StackNavigationProp<RootStackParamList, 'News'>;
  id: string;
  newsImage: ImageSourcePropType;
  newsTitle: string;
  timeStamp: string;
};

const NewsCard: React.FC<NewsCardProps> = ({
  navigation,
  id,
  newsImage,
  newsTitle,
  timeStamp,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('NewsDetails', {id})}
      style={styles.cardContainer}>
      <Image source={newsImage} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">
          {newsTitle}
        </Text>
        <Text>{timeStamp}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 12,
    marginRight: 10,
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    maxHeight: 100,
    flexShrink: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
  },
});

export default NewsCard;
