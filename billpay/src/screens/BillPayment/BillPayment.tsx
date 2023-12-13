import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import Header from '../../components/Header/Header';
import {ArrowDown} from '../../icons/ArrowDown';
import BottomSheet from '@gorhom/bottom-sheet';
import CustomBottomsheet from '../../components/Bottomsheet/Bottomsheet';
import {BottomsheetStyles} from '../../components/Bottomsheet/BottomsheetStyles';
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
} from '../../common/GlobalStyles';
import BillCard from '../../components/Home/BillCard';
import SubSection from '../../components/Home/SubSection';
import {Notification} from '../../icons/Notification';

const categoryList = ['All bills', 'Electricity', 'others', 'Vacation'];

const BillPayment = ({navigation}: {navigation: any}) => {
  const [billCategory, setBillCategory] = useState<string>(categoryList[0]);

  const selectCategory = (re: string) => {
    setBillCategory(re);
  };

  return (
    <ScrollView contentContainerStyle={styles.layout}>
      <View style={[styles.headerSection, styles.shortcutsPosition]}>
        <View style={{width: '80%'}}>
          <Text style={[styles.helloGoodness, styles.viewTypo]}>
            Bills payment
          </Text>
          <Text style={[styles.welcomeBackDont, styles.labelSpaceBlock]}>
            Track all your bills and be on time on every payment
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.iconlycurvedlightnotificati, styles.iconLayout]}>
          <Notification />
        </TouchableOpacity>
      </View>
      <View style={styles.row2}>
        {categoryList.map((d, i) => (
          <TouchableOpacity
            onPress={() => selectCategory(d)}
            style={[styles.btn, billCategory === d ? styles.highlighted : null]}
            key={i}>
            <Text
              style={[
                styles.btnText,
                ,
                billCategory === d ? styles.highlightedText : null,
              ]}>
              {d}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={[styles.label, styles.labelTypo]}>Select category</Text>
      <View style={styles.recentExpenditureSection}>
        <Text style={[styles.todaysExpenditure, styles.labelTypo]}>
          Todays expenditure
        </Text>
        <BillCard
          link="link"
          deadline="Due in 2hr"
          status="Pending payment"
          title="Electricity payment"
          amount={2400.0}
        />
        <BillCard
          link="link"
          deadline="Due in 2hr"
          status="Pending payment"
          title="Electricity payment"
          amount={2400.0}
        />
      </View>
      <View style={[styles.billsUpdates1, {marginTop: 20}]}>
        <SubSection
          text="Transaction history"
          navigation={navigation}
          link="TransactionHistory"
        />
        <View style={[styles.upComingBills1, styles.bannersLayout1]}>
          <Text style={[styles.yesterday, styles.yesterdayLayout]}>
            Yesterday
          </Text>
          <BillCard
            status="From wallet"
            title="Electricity payment"
            time="2:30 pm"
          />
          <BillCard
            status="From wallet"
            title="Electricity payment"
            time="2:30 pm"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default BillPayment;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Color.primary05,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  btnText: {
    color: Color.gray06,
    fontWeight: '600',
    fontSize: FontSize.bodyMedium1_size,
  },
  highlighted: {
    backgroundColor: Color.primary05,
    borderColor: 'transparent',
  },
  highlightedText: {
    color: '#fff',
  },
  helloGoodness: {
    lineHeight: 32,
    fontSize: FontSize.headerH6_size,
    color: Color.accentBase,
  },
  welcomeBackDont: {
    color: Color.gray06,
    lineHeight: 20,
    textAlign: 'left',
    marginBottom: 20,
    fontFamily: FontFamily.bodyLight,
  },
  headerSection: {
    marginTop: 43,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  iconlycurvedlightnotificati: {
    marginLeft: 20,
  },
  labelSpaceBlock: {
    marginTop: 4,
    fontSize: FontSize.bodyLight_size,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  layout: {
    backgroundColor: '#fff',
    width: '100%',
    paddingVertical: 20,
  },
  labelTypo: {
    lineHeight: 20,
    fontSize: FontSize.bodyMedium1_size,
    textAlign: 'left',
  },
  billsUpdates1: {
    left: 23,
  },
  viewTypo: {
    color: Color.accentBase,
    fontFamily: FontFamily.bodyMedium,
    fontWeight: '700',
    textAlign: 'left',
  },
  label: {
    color: Color.neutralsTextNeutral900,
    fontFamily: FontFamily.bodyMedium,
    fontWeight: '600',
    marginVertical: 5,
    marginTop: 13,
    marginLeft: 24,
  },
  linkLargeLayout: {
    lineHeight: 24,
    fontSize: FontSize.headerH7_size,
  },
  billPayment: {
    fontWeight: '700',
    textAlign: 'left',
    color: Color.text01,
    marginLeft: 24,
  },
  input: {
    backgroundColor: '#f3f5f6',
    borderRadius: 4,
    paddingVertical: 7,
    paddingHorizontal: 13,
    marginHorizontal: 24,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
  },
  recentExpenditureSection: {
    marginLeft: 19,
    marginTop: 35,
  },
  todaysExpenditure: {
    fontFamily: FontFamily.headerH9,
    fontWeight: '700',
    color: Color.text01,
  },
  upComingBills1: {
    backgroundColor: Color.text05,
    width: 327,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_smi,
    marginTop: 11,
  },
  yesterday: {
    color: Color.gray06,
    fontSize: FontSize.bodyLight_size,
    lineHeight: 20,
    fontFamily: FontFamily.bodyMedium1,
    fontWeight: '600',
  },
  yesterdayLayout: {
    lineHeight: 20,
    color: Color.gray06,
    textAlign: 'left',
  },
  bannersLayout1: {
    borderRadius: Border.br_xl,
    overflow: 'hidden',
  },
  shortcutsPosition: {
    marginLeft: 12,
  },
});
