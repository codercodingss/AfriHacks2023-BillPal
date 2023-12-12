import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useRef, useMemo, useCallback} from 'react';
import * as yup from 'yup';
import {Formik} from 'formik';
import {RegisterStyles} from './RegisterStyles';
import styles from '../Login/loginStyles';
import DatePicker from 'react-native-date-picker';
import {Calendar} from '../../icons/Calendar';
import BottomSheet from '@gorhom/bottom-sheet';
import CustomBottomsheet from '../../components/Bottomsheet/Bottomsheet';
import {BottomsheetStyles} from '../../components/Bottomsheet/BottomsheetStyles';
import {ArrowDown} from '../../icons/ArrowDown';
import Header from '../../components/Header/Header';
import SuccessfulModal from '../../components/SuccessfulModal/SuccessfulModal';

const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is Required'),
  category: yup.string().required('Category is Required'),
  amount: yup.string().required('Amount is Required'),
  dueDate: yup.date().required('Due date is Required'),
});

const RegisterStepTwo = ({navigation}: {navigation: any}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [reminder, setReminder] = useState<string>(dayNames[0]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const selectReminder = (re: string) => {
    setReminder(re);
    bottomSheetRef.current?.close();
  };
  const Reminders = (
    <View>
      <Text style={BottomsheetStyles.title}>Select a day</Text>
      {dayNames.map((d, i) => (
        <TouchableOpacity
          onPress={() => selectReminder(d)}
          style={BottomsheetStyles.btn}
          key={i}>
          <Text style={BottomsheetStyles.btnText}>{d}</Text>
          <View style={BottomsheetStyles.horizontalLine} />
        </TouchableOpacity>
      ))}
    </View>
  );
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    /* console.log('handleSheetChanges', index); */
  }, []);

  return (
    <ScrollView style={[RegisterStyles.layout, {paddingVertical: 35, flex: 1}]}>
      <SuccessfulModal
        modalVisible={modalOpen}
        setModalVisible={setModalOpen}
        navigation={navigation}
      />
      <Header
        text={'Back'}
        action={() => navigation.goBack()}
        step={1}
        totalSteps={3}
      />
      <Text style={styles.title}>{'Create personal budget goal'}</Text>
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
          name: '',
          category: '',
          amount: '',
          dueDate: new Date(),
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          setModalOpen(true);
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
            <Text style={styles.label}>{'Name'}</Text>
            <TextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder={'Enter your name'}
              placeholderTextColor={'#AAB7C6'}
              style={[
                styles.input,
                errors.name && touched.name ? styles.highlighted : null,
              ]}
            />
            {errors.name && touched.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}
            <Text style={styles.label}>{'Category'}</Text>
            <TextInput
              onChangeText={handleChange('category')}
              onBlur={handleBlur('category')}
              value={values.category}
              placeholder={'Enter your category'}
              placeholderTextColor={'#AAB7C6'}
              style={[
                styles.input,
                errors.category && touched.category ? styles.highlighted : null,
              ]}
            />
            {errors.category && touched.category && (
              <Text style={styles.errorText}>{errors.category}</Text>
            )}
            <Text style={styles.label}>{'amount'}</Text>
            <TextInput
              onChangeText={handleChange('amount')}
              keyboardType="numeric"
              onBlur={handleBlur('amount')}
              value={values.amount}
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
            <Text style={styles.label}>{'dueDate'}</Text>
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
            <Text style={[styles.label, {marginTop: 15}]}>
              {'Remind me at'}
            </Text>
            <View
              style={[
                styles.input,
                styles.row,
                !reminder ? styles.highlighted : null,
              ]}>
              <Text style={{color: '#000'}}>{reminder}</Text>
              <TouchableOpacity
                style={{height: 24, justifyContent: 'center'}}
                onPress={() => bottomSheetRef.current?.expand()}>
                <ArrowDown height={10} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={[styles.submit, {marginTop: 25}]}>
              <Text style={styles.submitText}>{'Save budget'}</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <CustomBottomsheet
        bottomSheetRef={bottomSheetRef}
        handleSheetChanges={handleSheetChanges}
        snapPoints={snapPoints}
        children={Reminders}
      />
    </ScrollView>
  );
};

export default RegisterStepTwo;
