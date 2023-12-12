import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color, FontSize} from '../../common/GlobalStyles';
import Header from '../../components/Header/Header';
import Post from '../../components/FinancialEducation/Post';

const FinancialEducation = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView style={styles.layout}>
      <Header text="" action={() => navigation.goBack()} />
      <View style={styles.body}>
        <Text style={styles.title}>Financial Education</Text>
        <Text style={styles.desc}>
          Tips on how to improve your income and savings.
        </Text>
        <Text style={styles.heading}>Today’s tips</Text>
        {posts.slice(0, 2).map((p, i) => (
          <Post key={i} image={p.image} text={p.text} />
        ))}
        <Text style={styles.heading}>Previous tips</Text>
        {posts.slice(2).map((p, i) => (
          <Post key={i} image={p.image} text={p.text} />
        ))}
      </View>
    </ScrollView>
  );
};

export default FinancialEducation;

const posts = [
  {
    text: 'Quote: "The only way to do great work is to love what you do." - Steve Jobs ',
    image: require('../../../assets/images/edu2.png'),
  },
  {
    text: 'Quote: "Live like no one else now so you can live like no one else later." - Dave Ramsey ',
    image: require('../../../assets/images/edu1.png'),
  },
  {
    text: 'Quote: "The only way to do great work is to love what you do." - Steve Jobs ',
    image: require('../../../assets/images/edu3.png'),
  },
  {
    text: 'Quote: "The only way to do great work is to love what you do." - Steve Jobs ',
    image: require('../../../assets/images/edu4.png'),
  },
];

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    paddingVertical: 25,
    backgroundColor: '#fff',
  },
  heading: {
    color: '#000',
    paddingVertical: 12,
    fontWeight: '600',
    fontSize: 16,
  },
  body: {
    paddingHorizontal: 15,
  },
  title: {
    color: Color.primary02,
    fontWeight: 'bold',
    fontSize: FontSize.headerH5_size,
  },
  desc: {
    marginTop: 10,
    color: Color.gray05,
    fontSize: FontSize.bodyMedium1_size,
  },
});
