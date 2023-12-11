import {ScrollView, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import Header from '../../components/Header/Header';
import {RegisterStyles} from './RegisterStyles';
import * as yup from 'yup';
import styles from '../Login/loginStyles';

const validationSchema = yup.object().shape({
  bankName: yup.string(),
  accountNo: yup.string(),
});

const RegisterStepFour = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView style={[RegisterStyles.layout, {paddingVertical: 35, flex: 1}]}>
      <Header
        text={'Back'}
        action={() => navigation.goBack()}
        step={3}
        totalSteps={4}
      />
      <Text style={styles.title}>{'Link your bank details'}</Text>
      <Text
        style={{
          color: '#646464',
          fontSize: 14,
          fontWeight: 'bold',
          marginBottom: 30,
          marginLeft: 25,
        }}>
        {'These enables use to keep tack of all your sependings.'}
      </Text>
      <Formik
        initialValues={{
          bankName: '',
          accountNo: '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values);
          navigation.navigate('RegistrationFinalStep');
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
            <Text style={styles.label}>{'Bank name'}</Text>
            <TextInput
              onChangeText={handleChange('bankName')}
              onBlur={handleBlur('bankName')}
              value={values.bankName}
              placeholder={"Enter your bank's name"}
              placeholderTextColor={'#AAB7C6'}
              style={[
                styles.input,
                errors.bankName && touched.bankName ? styles.highlighted : null,
              ]}
            />
            {errors.bankName && touched.bankName && (
              <Text style={styles.errorText}>{errors.bankName}</Text>
            )}
            <Text style={styles.label}>{'Account Number'}</Text>
            <TextInput
              onChangeText={handleChange('accountNo')}
              onBlur={handleBlur('accountNo')}
              value={values.accountNo}
              placeholder={'Enter your account number'}
              placeholderTextColor={'#AAB7C6'}
              style={[
                styles.input,
                errors.accountNo && touched.accountNo
                  ? styles.highlighted
                  : null,
              ]}
            />
            {errors.accountNo && touched.accountNo && (
              <Text style={styles.errorText}>{errors.accountNo}</Text>
            )}
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={[styles.submit, {marginTop: 25}]}>
              <Text style={styles.submitText}>{'Save budget'}</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default RegisterStepFour;
