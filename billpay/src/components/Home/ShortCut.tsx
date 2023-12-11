import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color, FontFamily, FontSize} from '../../common/GlobalStyles';

const ShortCut = ({
  text,
  icon,
  highlighted,
  navigation,
  link,
}: {
  text: string;
  icon: any;
  highlighted?: boolean;
  link?: string;
  navigation?: any;
}) => {
  return (
    <View style={styles.shortcut}>
      <TouchableOpacity
        onPress={
          navigation
            ? () => {
                navigation.navigate(link);
              }
            : () => {}
        }
        style={[styles.iconContainer, highlighted && styles.highlighted]}>
        {icon}
      </TouchableOpacity>
      <Text style={[styles.billPayment, styles.paymentTypo]}>{text}</Text>
    </View>
  );
};

export default ShortCut;

const styles = StyleSheet.create({
  shortcut: {
    alignItems: 'center',
    marginLeft: 10,
  },
  billPayment: {
    color: Color.gray05,
    textAlign: 'left',
  },
  highlighted: {
    backgroundColor: '#D1E6EF',
    borderColor: '#DAE6F0',
  },
  iconContainer: {
    backgroundColor: '#FCF2F799',
    height: 41,
    width: 41,
    borderRadius: 41,
    borderWidth: 2,
    borderColor: '#EDF7EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentTypo: {
    marginTop: 2,
    fontFamily: FontFamily.bodyLight,
    lineHeight: 16,
    fontSize: FontSize.bodyLight1_size,
  },
  billManagemantIcon: {
    width: 29,
    height: 29,
  },
});
