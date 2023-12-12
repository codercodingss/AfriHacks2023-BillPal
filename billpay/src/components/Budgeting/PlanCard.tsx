import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Color,
  Padding,
  Border,
  FontSize,
  FontFamily,
} from '../../common/GlobalStyles';
import ProgressBar from './ProgressBar';
import {ArrowChart} from '../../icons/ArrowChart';
import {CompletedTick} from '../../icons/CompletedTick';

const PlanCard = ({
  title,
  amount,
  deadline,
  status,
  time,
  link,
  perentage,
}: {
  title: string;
  amount?: number;
  deadline?: string;
  status: 'Pending' | 'Completed';
  time?: string;
  link?: string;
  perentage: number;
}) => {
  return (
    <View style={[styles.card1, styles.cardLayout]}>
      <View style={styles.cubeContainer}>
        <Image source={require('../../../assets/images/money-jar.png')} />
      </View>
      <View style={{width: '83%'}}>
        <View style={[styles.content, styles.contentFlexBox]}>
          <View style={{width: '65%'}}>
            <Text style={[styles.electricityPayment, styles.pmClr]}>
              {title}
            </Text>

            <Text
              style={[styles.pendingPayment, styles.paymentTypo, styles.red]}>
              {deadline}
            </Text>
            <View
              style={[
                styles.status,
                {
                  backgroundColor:
                    status === 'Pending' ? Color.warning : Color.succes,
                },
              ]}>
              <Text style={[styles.pendingPayment, styles.paymentTypo]}>
                {status}
              </Text>
              {status === 'Pending' ? (
                <ArrowChart height={9} width={12} />
              ) : (
                <CompletedTick height={15} width={16} />
              )}
            </View>
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
                <Text style={[styles.pm, styles.pmClr, styles.bold]}>
                  {time}
                </Text>
              )}
            </View>
          </View>
        </View>
        <ProgressBar width={perentage} />
      </View>
    </View>
  );
};

export default PlanCard;

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
    marginTop: 0,
    lineHeight: 12,
  },
  cubeContainer: {
    backgroundColor: '#fff',
    padding: 10,
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
    backgroundColor: Color.text05,
  },
  content: {
    marginLeft: 10,
  },
  contentFlexBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
  },
  electricityPayment: {
    fontFamily: FontFamily.bodyMedium1,
    color: Color.labelColorLightSecondary,
    fontWeight: '700',
    marginBottom: 7,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    paddingHorizontal: 5,
    height: 20,
    borderRadius: 24,
    width: '70%',
  },
  pmClr: {
    color: Color.labelColorLightSecondary,
    lineHeight: 20,
    fontSize: FontSize.bodyLight_size,
  },
  pendingPayment: {
    color: '#fff',
  },
  paymentTypo: {
    marginTop: 2,
    fontFamily: FontFamily.bodyMedium1,
    lineHeight: 12,
    fontSize: FontSize.bodyLight_size,
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
    color: Color.gray05,
    marginVertical: 10,
  },
});
