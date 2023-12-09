import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../Login/loginStyles';
import {Formik} from 'formik';
import * as yup from 'yup';
import {ClosedEye, OpenEye} from '../../icons';
import CheckBox from '@react-native-community/checkbox';
import {Warning} from '../../icons/Warning';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required('Email is Required'),
  username: yup.string().required('Username is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .matches(passwordRules, {message: 'Please create a stronger password'})
    .required('Password is required'),
});

const Register = ({navigation}: {navigation: any}) => {
  const [showPassword, setShowPass] = useState<boolean>(false);
  const [conditionsAccepted, setAccepted] = useState<boolean>(false);
  return (
    <ScrollView style={[RegisterStyles.layout, {paddingTop: 35}]}>
      <Text style={styles.title}>{'Welcome to Billpal'}</Text>
      <Text
        style={{
          color: '#646464',
          fontSize: 14,
          fontWeight: 'bold',
          marginBottom: 30,
          marginLeft: 25,
        }}>
        {'Easy budgeting and finance management'}
      </Text>
      <Formik
        initialValues={{email: '', password: '', username: ''}}
        validationSchema={loginValidationSchema}
        onSubmit={values => {
          console.log(values);
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
            <Text style={styles.label}>{'Username'}</Text>
            <TextInput
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              placeholder={'Enter your username'}
              placeholderTextColor={'#AAB7C6'}
              style={[
                styles.input,
                errors.username && touched.username ? styles.highlighted : null,
              ]}
            />
            {errors.username && touched.username && (
              <Text style={styles.errorText}>{errors.username}</Text>
            )}
            <Text style={styles.label}>{'Email Address'}</Text>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder={'Enter your email address'}
              placeholderTextColor={'#AAB7C6'}
              style={[
                styles.input,
                errors.email && touched.email ? styles.highlighted : null,
              ]}
            />
            {errors.email && touched.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <Text style={styles.label}>{'Password'}</Text>
            <View
              style={[
                styles.input,
                styles.row,
                errors.password && touched.password ? styles.highlighted : null,
              ]}>
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder={'Enter password'}
                textContentType={'password'}
                secureTextEntry={!showPassword}
                placeholderTextColor={'#AAB7C6'}
                style={{padding: 0}}
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
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                marginVertical: 25,
                textAlign: 'center',
              }}>
              {'or Login with'}
            </Text>
            <View style={RegisterStyles.blueBtn}>
              <Text style={RegisterStyles.blueBtnText}>
                {'Continue with Google'}
              </Text>
            </View>
            <View style={RegisterStyles.blueBtn}>
              <Text style={RegisterStyles.blueBtnText}>
                {'Continue with Apple'}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={[styles.submit, {marginTop: 25}]}>
              <Text style={styles.submitText}>{'Create account'}</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <View
        style={[
          styles.row,
          {justifyContent: 'center', gap: 5, marginBottom: 35},
        ]}>
        <Text
          style={{
            color: '#6b7280',
            fontSize: 14,
          }}>
          Already have an account?
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
      <View
        style={[
          styles.rememberMeBox,
          {alignItems: 'flex-start', marginBottom: 58},
        ]}>
        <CheckBox
          tintColors={{true: '#74b3ce', false: '#aaaaaa'}}
          onCheckColor={'#74b3ce'}
          value={conditionsAccepted}
          onValueChange={setAccepted}
          style={styles.check}
        />
        <Text style={styles.secondaryText}>
          {
            'By clicking, I accept the terms of service  and  privacy policy. I understand that my agreement is not a condition of any purchase of using service.'
          }
        </Text>
      </View>
      <View style={RegisterStyles.requirements}>
        <View style={RegisterStyles.row}>
          <Warning />
          <Text style={RegisterStyles.requirement}>At least 8 Characters</Text>
        </View>
        <View style={RegisterStyles.row}>
          <Warning />
          <Text style={RegisterStyles.requirement}>At least 1 number</Text>
        </View>
        <View style={RegisterStyles.row}>
          <Warning />
          <Text style={RegisterStyles.requirement}>
            Both upper and lower case letter
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const RegisterStyles = StyleSheet.create({
  blueBtn: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#74b3ce',
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 23,
    marginBottom: 12,
    marginHorizontal: 24,
  },
  blueBtnText: {
    color: '#172429',
    fontSize: 16,
  },
  layout: {
    backgroundColor: '#FCFFFA',
    paddingTop: 18,
    paddingBottom: 8,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  requirements: {
    paddingHorizontal: 24,
    marginBottom: 50,
  },
  requirement: {
    color: '#847CAB',
  },
});
