import {
  Alert,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Verification = ({
  modalVisible,
  setModalVisible,
  navigation,
}: {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: any;
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.box}>
          <Image
            style={{alignSelf: 'center'}}
            source={require('../../../assets/images/Mail.png')}
          />
          <Text style={styles.title}>{'Email Verification'}</Text>
          <Text style={styles.subtitle}>{'Please check your email'}</Text>
          <Text style={styles.desc}>
            {
              "We'll send a reset password link to your email if it's associated with your account. Click on it to set a new password."
            }
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegistrationStepTwo')}
            style={styles.btn}>
            <Text style={styles.btnText}>{'Got it'}</Text>
          </TouchableOpacity>
          <View style={[styles.row, styles.lower]}>
            <Text style={[styles.footer]}>
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
            <Text style={[styles.footer]}> to resend it.</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Verification;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
