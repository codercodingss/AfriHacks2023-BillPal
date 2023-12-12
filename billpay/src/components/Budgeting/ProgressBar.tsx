import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../../common/GlobalStyles';

const ProgressBar = ({width}: {width: number}) => {
  return (
    <View style={styles.layout}>
      <View style={styles.back}>
        <View style={[styles.progress, {width: `${width}%`}]} />
      </View>
      <Text style={styles.perct}>{width}%</Text>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#B9D9E6',
    height: 5,
    borderRadius: 10,
    width: '80%',
    marginLeft: 10,
    marginTop: 10,
  },
  layout: {
    flexDirection: 'row',
  },
  progress: {
    backgroundColor: Color.succes,
    height: 5,
    borderRadius: 10,
  },
  perct: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: Color.succes,
  },
});
