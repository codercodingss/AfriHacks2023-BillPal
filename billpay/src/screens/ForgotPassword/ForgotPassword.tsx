import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import * as yup from 'yup';
import Header from '../../components/Header/Header';
import styles from '../Login/loginStyles';
import {Formik} from 'formik';

const validationSchema = yup.object().shape({
  email: yup.string().email().required('Email is Required'),
});

const ForgotPassword = ({navigation}: {navigation: any}) => {
  const goBack = () => navigation.goBack();
  return (
    <ScrollView style={styles.layout}>
      <Header action={goBack} text={'Back'} />
      <Text style={styles.title}>{'Forgotten your password?'}</Text>
      <Text
        style={{
          color: '#646464',
          fontSize: 14,
          marginBottom: 42,
          marginHorizontal: 24,
          width: 327,
        }}>
        {
          "Type the email you used to sign up and we'll send you a password reset email"
        }
      </Text>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values);
          navigation.navigate('PasswordResetLink');
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <>
            <Text style={styles.label}>{'Email Address'}</Text>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder={'Enter a username or email address'}
              placeholderTextColor={'#AAB7C6'}
              style={[
                styles.input,
                errors.email && touched.email ? styles.highlighted : null,
              ]}
            />
            {errors.email && touched.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={[
                {
                  marginTop: 42,
                },
                styles.submit,
              ]}>
              <Text style={styles.submitText}>{'Send Reset Email'}</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <View style={[styles.row, {justifyContent: 'center', gap: 5}]}>
        <Text
          style={{
            color: '#6b7280',
            fontSize: 14,
          }}>
          Take me back to
        </Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              color: '#74b3ce',
              fontWeight: 'bold',
            }}>
            Login
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;
