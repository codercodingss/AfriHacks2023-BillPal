import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from '../Login/loginStyles';
import Header from '../../components/Header/Header';

const PasswordResetLink = ({navigation}: {navigation: any}) => {
  const goBack = () => navigation.goBack();
  return (
    <ScrollView style={styles.layout}>
      <Header action={goBack} text="Back" />
      <View style={extrastyles.box}>
        <Image
          style={{alignSelf: 'center'}}
          source={require('../../../assets/images/Mail.png')}
        />
        <Text style={extrastyles.title}>{'Reset your password'}</Text>
        <Text style={extrastyles.subtitle}>{'Please check your email'}</Text>
        <Text style={extrastyles.desc}>
          {
            "We'll send a reset password link to your email if it's associated with your account. Click on it to set a new password."
          }
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPassword')}
          style={extrastyles.btn}>
          <Text style={extrastyles.btnText}>{'Got it'}</Text>
        </TouchableOpacity>
        <View style={[styles.row, extrastyles.lower]}>
          <Text style={[extrastyles.footer]}>
            {'Didn’t see the email? Click '}
          </Text>

          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                color: '#74b3ce',
                fontWeight: 'bold',
              }}>
              here
            </Text>
          </Pressable>
          <Text style={[extrastyles.footer]}> to resend it.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PasswordResetLink;

const extrastyles = StyleSheet.create({
  box: {
    width: 315,
    height: 507,
    backgroundColor: '#f5f5f7',
    borderColor: '#113B6D26',
    borderRadius: 4,
    borderWidth: 1,
    paddingTop: 42,
    paddingBottom: 60,
    marginHorizontal: 24,
  },
  title: {
    color: '#4682b4',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
    marginLeft: 34,
  },
  subtitle: {
    color: '#0e1a24',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 37,
    marginLeft: 77,
  },
  footer: {
    color: '#0e1a24',
    fontSize: 14,
    fontWeight: 'bold',
  },
  desc: {
    color: '#646464',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 41,
    marginHorizontal: 27,
    width: 259,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#74b3ce',
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 48,
    marginHorizontal: 22,
    textAlign: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  lower: {
    width: '100%',
    paddingHorizontal: '7%',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
