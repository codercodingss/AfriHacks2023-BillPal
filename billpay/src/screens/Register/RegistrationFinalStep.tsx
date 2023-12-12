import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {Formik} from 'formik';
import DatePicker from 'react-native-date-picker';
import CustomBottomsheet from '../../components/Bottomsheet/Bottomsheet';
import {ArrowDown} from '../../icons/ArrowDown';
import {Calendar} from '../../icons/Calendar';
import styles from '../Login/loginStyles';
import {RegisterStyles} from './RegisterStyles';
import Header from '../../components/Header/Header';
import * as yup from 'yup';
import BillCategories from '../../components/Bottomsheet/BillCategories';

const validationSchema = yup.object().shape({
  billType: yup.string().required('Bill type is Required'),
  amount: yup.string().required('Amount is Required'),
  dueDate: yup.date().required('Due date is Required'),
});

const RegistrationFinalStep = ({navigation}: {navigation: any}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [billCategory, setBillCategory] = useState<string>('Cable TV');

  const selectCategory = (re: string) => {
    setBillCategory(re);
    bottomSheetRef.current?.close();
  };

  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '87%', '95%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    /* console.log('handleSheetChanges', index); */
  }, []);

  return (
    <View style={[RegisterStyles.layout, {paddingVertical: 35, flex: 1}]}>
      <Header
        text={'Back'}
        action={() => navigation.goBack()}
        step={3}
        totalSteps={3}
      />
      <Text style={styles.title}>{'Bill Management'}</Text>
      <Text
        style={{
          color: '#646464',
          fontSize: 14,
          fontWeight: 'bold',
          marginBottom: 30,
          marginLeft: 25,
        }}>
        {'Please ensure to provide the fellowing details'}
      </Text>
      <Formik
        initialValues={{
          billType: '',
          billCategory: '',
          amount: '',
          dueDate: new Date(),
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          navigation.navigate('AccountCreationSucces');
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
            <Text style={styles.label}>{'Bill Type'}</Text>
            <TextInput
              onChangeText={handleChange('billType')}
              onBlur={handleBlur('billType')}
              value={values.billType}
              placeholder={'Enter your billType'}
              placeholderTextColor={'#AAB7C6'}
              style={[
                styles.input,
                errors.billType && touched.billType ? styles.highlighted : null,
              ]}
            />
            {errors.billType && touched.billType && (
              <Text style={styles.errorText}>{errors.billType}</Text>
            )}
            <Text style={styles.label}>{'Amount'}</Text>
            <TextInput
              onChangeText={handleChange('amount')}
              onBlur={handleBlur('amount')}
              value={values.amount}
              keyboardType="numeric"
              placeholder={'Enter your amount'}
              placeholderTextColor={'#AAB7C6'}
              style={[
                styles.input,
                errors.amount && touched.amount ? styles.highlighted : null,
              ]}
            />
            {errors.amount && touched.amount && (
              <Text style={styles.errorText}>{errors.amount}</Text>
            )}

            <Text style={[styles.label, {marginTop: 15}]}>
              {'Remind me at'}
            </Text>
            <View
              style={[
                styles.input,
                styles.row,
                !billCategory ? styles.highlighted : null,
              ]}>
              <Text style={{color: '#000'}}>{billCategory}</Text>
              <TouchableOpacity
                style={{height: 24, justifyContent: 'center'}}
                onPress={() => bottomSheetRef.current?.expand()}>
                <ArrowDown height={10} />
              </TouchableOpacity>
            </View>
            <Text style={[styles.label, {marginTop: 24}]}>
              {'Set due date'}
            </Text>
            <DatePicker
              modal
              open={open}
              date={values.dueDate}
              onConfirm={date => {
                setOpen(false);
                values.dueDate = date;
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
            <View
              style={[
                styles.input,
                styles.row,
                errors.dueDate && touched.dueDate ? styles.highlighted : null,
              ]}>
              <Text style={{color: '#000'}}>
                {values.dueDate.toDateString()}
              </Text>
              <TouchableOpacity onPress={() => setOpen(true)}>
                <Calendar />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={[styles.submit, {marginTop: 45}]}>
              <Text style={styles.submitText}>{'Save bank details'}</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <CustomBottomsheet
        bottomSheetRef={bottomSheetRef}
        handleSheetChanges={handleSheetChanges}
        snapPoints={snapPoints}
        children={<BillCategories selectCatgeory={selectCategory} />}
      />
    </View>
  );
};

export default RegistrationFinalStep;
