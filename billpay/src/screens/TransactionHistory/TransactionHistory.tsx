import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {Color} from '../../common/GlobalStyles';

const TransactionHistory = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.layout}>
      <Header text={'Back'} action={() => navigation.goBack()} />
      <View style={styles.centeredView}>
        <Image source={require('../../../assets/images/attachment1.png')} />
        <Text style={styles.title}>Nothing here?</Text>
        <Text style={styles.description}>
          When you make any transaction, you will see all here.
        </Text>
      </View>
    </View>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 20,
  },
  centeredView: {
    alignSelf: 'center',
    marginTop: 55,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginVertical: 13,
  },
  description: {
    color: Color.gray06,
  },
});
