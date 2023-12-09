import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Arrow} from '../../icons/Arrow';

const Header = ({text, action}: {text: string; action: () => void}) => {
  return (
    <TouchableOpacity onPress={action} style={styles.header}>
      <Arrow />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 33,
    marginHorizontal: 15,
    gap: 10,
  },
  text: {
    color: '#9ca3af',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    fontFamily: 'Averta Demo PE',
  },
});
