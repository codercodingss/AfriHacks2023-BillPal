import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Arrow} from '../../icons/Arrow';

const Header = ({
  text,
  action,
  totalSteps,
  step,
}: {
  text: string;
  action: () => void;
  totalSteps?: number;
  step?: number;
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={action} style={styles.row}>
        <Arrow />
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
      {step && (
        <View style={styles.steps}>
          <Text style={styles.step}>{`${step} of ${totalSteps}`}</Text>
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 33,
    marginHorizontal: 15,
    gap: 10,
  },
  text: {
    color: '#9ca3af',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Averta Demo PE',
  },
  row: {width: 100, flexDirection: 'row'},
  steps: {
    borderColor: '#74B3CE75',
    borderWidth: 1,
    width: 60,
    height: 35,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  step: {
    color: '#0E1A24',
    fontSize: 15,
    fontWeight: '500',
  },
});
