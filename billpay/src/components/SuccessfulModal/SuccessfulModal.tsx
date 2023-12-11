import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Tick} from '../../icons/Tick';

const SuccessfulModal = ({
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
          <View style={styles.tick}>
            <Tick width={50} height={35} />
          </View>
          <Text style={styles.title}>{'Created successfully'}</Text>
          <Text style={styles.desc}>
            {
              'Enable push notification and never miss a thing about your up coming bills etc....'
            }
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegistrationStepFour')}
            style={styles.btn}>
            <Text style={styles.btnText}>{'Give permission'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegistrationStepFour')}>
            <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessfulModal;

const styles = StyleSheet.create({
  tick: {
    height: 110,
    width: 110,
    borderRadius: 100,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 25,
  },
  skip: {
    color: '#74b3ce',
    fontWeight: '800',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000044',
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
    shadowRadius: 10,
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
    height: 405,
    backgroundColor: '#fff',
    borderColor: '#113B6D26',
    borderRadius: 15,
    borderWidth: 1,
    paddingTop: 42,
    paddingBottom: 60,
    marginHorizontal: 24,
  },
  title: {
    color: '#172B3C',
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
    marginBottom: 18,
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
