import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../Login/loginStyles';
import Header from '../../components/Header/Header';
import {Formik} from 'formik';
import * as yup from 'yup';
import {ClosedEye, OpenEye} from '../../icons';
import Toast from 'react-native-toast-message';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const loginValidationSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .matches(passwordRules, {message: 'Please create a stronger password'})
    .required('Password is required'),
  repeatPassword: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Please re-type your password')
    .oneOf([yup.ref('password')], "Passwords don't match"),
});

const ResetPassword = ({navigation}: {navigation: any}) => {
  const [showPassword, setShowPass] = useState<boolean>(false);
  const [showRepeatPassword, setRepeatShowPass] = useState<boolean>(false);
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Your password has been successfully changed',
    });
  };
  const goBack = () => navigation.goBack();
  return (
    <ScrollView style={styles.layout}>
      <Header action={goBack} text={'Back'} />
      <Text style={styles.title}>{'Reset password'}</Text>
      <Text
        style={{
          color: '#646464',
          fontSize: 14,
          fontWeight: 'bold',
          marginBottom: 30,
          marginLeft: 25,
        }}>
        {'Please type a new password'}
      </Text>

      <Formik
        initialValues={{password: '', repeatPassword: ''}}
        validationSchema={loginValidationSchema}
        onSubmit={values => {
          console.log(values);
          navigation.navigate('Login');
          showToast();
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <View>
            <Text style={styles.label}>{'Password'}</Text>
            <View style={{marginBottom: 15}}>
              <View
                style={[
                  styles.input,
                  styles.row,
                  errors.password && touched.password
                    ? styles.highlighted
                    : null,
                ]}>
                <TextInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder={'Enter password'}
                  textContentType={'password'}
                  secureTextEntry={!showPassword}
                  placeholderTextColor={'#AAB7C6'}
                  style={{padding: 0, color: '#000'}}
                />
                <TouchableOpacity
                  style={{height: 15}}
                  onPress={() => setShowPass(curr => !curr)}>
                  {showPassword ? <ClosedEye /> : <OpenEye />}
                </TouchableOpacity>
              </View>
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
            <Text style={styles.label}>{'Confirm Password'}</Text>
            <View style={{marginBottom: 25}}>
              <View
                style={[
                  styles.input,
                  styles.row,
                  errors.repeatPassword && touched.repeatPassword
                    ? styles.highlighted
                    : null,
                ]}>
                <TextInput
                  onChangeText={handleChange('repeatPassword')}
                  onBlur={handleBlur('repeatPassword')}
                  value={values.repeatPassword}
                  placeholder={'Enter Password again'}
                  textContentType={'password'}
                  secureTextEntry={!showRepeatPassword}
                  placeholderTextColor={'#AAB7C6'}
                  style={{padding: 0, color: '#000'}}
                />
                <TouchableOpacity
                  style={{height: 15}}
                  onPress={() => setRepeatShowPass(curr => !curr)}>
                  {showRepeatPassword ? <ClosedEye /> : <OpenEye />}
                </TouchableOpacity>
              </View>
              {errors.repeatPassword && touched.repeatPassword && (
                <Text style={styles.errorText}>{errors.repeatPassword}</Text>
              )}
            </View>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={styles.submit}>
              <Text style={styles.submitText}>{'Reset password'}</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default ResetPassword;

/* const styles = StyleSheet.create({}); */
