import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useAppDispatch} from '../../src/store';
import {signIn} from '../../src';

const AccountCreationSucces = () => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.layout}>
      <View>
        <Text style={styles.title}>Congratulation</Text>
        <Text style={styles.textSec}>You account has been actived</Text>
      </View>
      <Image
        style={{alignSelf: 'center'}}
        source={require('../../../assets/images/career.png')}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          dispatch(signIn({email: 'hh@jj.voo', password: 'gfmm45'}))
        }>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountCreationSucces;

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#74B3CE',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  title: {
    color: '#F4F4F4',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  textSec: {
    color: '#F4F4F4',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#fff',
    width: 327,
    height: 44,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#74B3CE',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});
