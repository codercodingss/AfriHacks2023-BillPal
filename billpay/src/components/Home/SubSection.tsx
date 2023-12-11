import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color, FontFamily, FontSize} from '../../common/GlobalStyles';

const SubSection = ({
  text,
  link,
  navigation,
}: {
  text: string;
  link: string;
  navigation: string;
}) => {
  return (
    <View style={styles.upComingBill}>
      <Text style={[styles.title, styles.shortCutsTypo]}>{text}</Text>
      <Text style={[styles.btn, styles.viewTypo]}>View all</Text>
    </View>
  );
};

export default SubSection;

const styles = StyleSheet.create({
  upComingBill: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {textAlign: 'left'},
  shortCutsTypo: {
    color: Color.text01,
    fontSize: FontSize.bodyMedium1_size,
    fontFamily: FontFamily.bodyMedium1,
    fontWeight: '700',
    lineHeight: 22,
  },
  viewTypo: {
    color: Color.accentBase,
    fontFamily: FontFamily.bodyMedium,
    fontWeight: '700',
    textAlign: 'left',
  },

  btn: {
    marginLeft: 157,
    color: Color.accentBase,
    lineHeight: 16,
    fontSize: FontSize.bodyLight1_size,
  },
});
