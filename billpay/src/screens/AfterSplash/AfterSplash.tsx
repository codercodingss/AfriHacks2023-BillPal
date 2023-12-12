import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Arrow} from '../../icons';
import {Color, FontSize} from '../../common/GlobalStyles';

const AfterSplash = ({navigation}: {navigation: any}) => {
  const steps = [
    {
      title: 'Track your spending with ease',
      description: 'See where your money goes with clear spending insights.',
      bg: '#F3FAFC',
      bg2: '#F7F7FC',
      logo: require('../../../assets/images/splash1.png'),
    },
    {
      title: 'Never miss any pay/ bills',
      description: 'Effortlessly manage and pay all your bills in one app.',
      bg: '#FCFFFA',
      bg2: '#E4F7FF',
      logo: require('../../../assets/images/splash2.png'),
    },
    {
      title: 'Pay bills effortlessly',
      description: 'BillPal - Your financial toolkit',
      bg: '#FCFFFA',
      bg2: '#EDF1F2',
      logo: require('../../../assets/images/splash3.png'),
    },
  ];
  const [step, setStep] = useState(0);
  return (
    <View style={[styles.layout]}>
      {step < 3 ? (
        <>
          <View style={[styles.half, {backgroundColor: steps[step].bg2}]}>
            <View style={styles.row}>
              {step !== 0 ? (
                <TouchableOpacity onPress={() => setStep(ste => ste - 1)}>
                  <Arrow />
                </TouchableOpacity>
              ) : (
                <View />
              )}
              <TouchableOpacity onPress={() => setStep(4)}>
                <Text>Skip</Text>
              </TouchableOpacity>
            </View>
            <Image
              style={{alignSelf: 'center', marginTop: 25}}
              source={steps[step].logo}
            />
          </View>
          <View style={styles.secondPart}>
            <View>
              <Text style={styles.title}>{steps[step].title}</Text>
              <Text style={styles.desc}>{steps[step].description}</Text>
              <View style={styles.steps}>
                {steps.map((_, i) => (
                  <View
                    key={i}
                    style={step === i ? styles.current : styles.step}></View>
                ))}
              </View>
            </View>
            <TouchableOpacity
              onPress={() => setStep(ste => ste + 1)}
              style={styles.submit}>
              <Text style={styles.submitText}>{'Get started'}</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={[styles.secondPart, {height: '70%', marginTop: 25}]}>
          <View>
            <Text style={styles.title}>Get personalized financial tips</Text>
            <Text style={styles.desc}>
              Receive tailored advice based on your spending habits and goals.{' '}
            </Text>
          </View>
          <View style={{gap: 14}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.submit}>
              <Text style={styles.submitText}>{'Login'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.createAcc}>Create account</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default AfterSplash;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  half: {
    height: '50%',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  current: {
    height: 5,
    width: 40,
    backgroundColor: Color.primary05,
    borderRadius: 20,
  },
  steps: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    marginTop: 10,
  },
  step: {
    height: 5,
    borderRadius: 20,
    width: 20,
    backgroundColor: '#D9D9D9',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  skip: {
    fontWeight: 'bold',
    fontFamily: 'lucida grande',
  },
  title: {
    color: Color.primary02,
    fontWeight: 'bold',
    fontSize: FontSize.headerH5_size,
  },
  desc: {
    marginTop: 10,
    color: Color.gray05,
    fontSize: FontSize.bodyMedium1_size,
  },
  secondPart: {
    padding: 20,
    justifyContent: 'space-between',
    height: '50%',
  },
  submit: {
    alignItems: 'center',
    backgroundColor: '#74b3ce',
    borderRadius: 8,
    paddingVertical: 16,
    marginTop: 38,
  },
  submitText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Averta Demo PE',
  },
  createAcc: {
    color: Color.primary05,
    fontWeight: '800',
    textAlign: 'center',
  },
});
