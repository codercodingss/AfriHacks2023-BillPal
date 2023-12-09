import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import {Formik} from 'formik';
import * as yup from 'yup';
import {ClosedEye} from '../../icons/ClosedEye';
import {OpenEye} from '../../icons/OpenEye';
import CheckBox from '@react-native-community/checkbox';
import styles from './loginStyles';

const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required('Email is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const Login = ({navigation}: {navigation: any}) => {
  const [showPassword, setShowPass] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(false);
  const goBack = () => navigation.goBack();
  return (
    <ScrollView style={styles.layout}>
      <Header action={goBack} text={'Back'} />
      <Text style={styles.title}>{'Login to your account'}</Text>
      <Formik
        initialValues={{email: '', password: ''}}
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

            <View style={styles.rememberMeBox}>
              <CheckBox
                tintColors={{true: '#74b3ce', false: '#aaaaaa'}}
                onCheckColor={'#74b3ce'}
                value={remember}
                onValueChange={setRemember}
                style={styles.check}
              />
              <Text style={styles.secondaryText}>{'Remember me'}</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text
                style={[
                  styles.secondaryText,
                  {
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginBottom: 44,
                    marginLeft: 25,
                  },
                ]}>
                {'Forgotten your password?'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={styles.submit}>
              <Text style={styles.submitText}>{'login'}</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.signUp}>{'Don’t have an account? Sign up'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Login;
