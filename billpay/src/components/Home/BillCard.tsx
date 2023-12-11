import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  Color,
  Padding,
  Border,
  FontSize,
  FontFamily,
} from '../../common/GlobalStyles';
import {Cube} from '../../icons/Cube';
import {ArrowRight} from '../../icons/ArrowRight';

const BillCard = ({
  title,
  amount,
  deadline,
  status,
  time,
  link,
}: {
  title: string;
  amount?: number;
  deadline?: string;
  status: string;
  time?: string;
  link?: string;
}) => {
  return (
    <View style={[styles.card1, styles.cardLayout]}>
      <View style={styles.cubeContainer}>
        <Cube width={15} height={20} />
      </View>
      <View style={[styles.content, styles.contentFlexBox]}>
        <View>
          <Text style={[styles.electricityPayment, styles.pmClr]}>{title}</Text>
          <Text style={[styles.pendingPayment, styles.paymentTypo]}>
            {status}
          </Text>
          <Text style={[styles.pendingPayment, styles.paymentTypo, styles.red]}>
            {deadline}
          </Text>
        </View>
        <View style={styles.vectorParent}>
          {/*    <Image
            style={styles.vectorIcon}
            source={require('../assets/vector.svg')}
          /> */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 15,
            }}>
            {amount && (
              <Text style={[styles.pm, styles.pmClr, styles.bold]}>
                ${amount}
              </Text>
            )}
            {time && (
              <Text style={[styles.pm, styles.pmClr, styles.bold]}>{time}</Text>
            )}
            {link && (
              <TouchableOpacity style={{height: 15, width: 15}}>
                <ArrowRight />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default BillCard;

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
    marginTop: 0,
    lineHeight: 12,
  },
  cubeContainer: {
    backgroundColor: '#F2F2F7',
    width: 32,
    height: 32,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bannersLayout1: {
    borderRadius: Border.br_xl,
    overflow: 'hidden',
  },

  card1: {
    marginTop: 12,
  },
  cardLayout: {
    padding: Padding.p_base,
    width: 308,
    borderRadius: Border.br_base,
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  content: {
    marginLeft: 10,
    flex: 1,
  },
  contentFlexBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  electricityPayment: {
    fontFamily: FontFamily.bodyMedium1,
    color: Color.labelColorLightSecondary,
    fontWeight: '600',
    textAlign: 'center',
  },
  pmClr: {
    color: Color.labelColorLightSecondary,
    lineHeight: 20,
    fontSize: FontSize.bodyLight_size,
  },
  pendingPayment: {
    color: Color.gray01,
  },
  paymentTypo: {
    marginTop: 2,
    fontFamily: FontFamily.bodyLight,
    lineHeight: 16,
    fontSize: FontSize.bodyLight1_size,
  },
  vectorParent: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  pm: {
    marginTop: 8,
    textAlign: 'right',
    fontFamily: FontFamily.bodyLight,
  },
  red: {
    color: Color.errorMain,
    fontWeight: 'bold',
    fontSize: 10,
  },
});
