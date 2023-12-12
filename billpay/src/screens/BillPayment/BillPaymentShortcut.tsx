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

const categoryList = ['Electricity', 'Airtime', 'School fees', 'others'];

const BillPaymentShortcut = ({navigation}: {navigation: any}) => {
  const [billCategory, setBillCategory] = useState<string>(categoryList[0]);

  const Categories = (
    <View>
      <Text style={BottomsheetStyles.title}>Select a day</Text>
      {categoryList.map((d, i) => (
        <TouchableOpacity
          onPress={() => selectCategory(d)}
          style={BottomsheetStyles.btn}
          key={i}>
          <Text style={BottomsheetStyles.btnText}>{d}</Text>
          <View style={BottomsheetStyles.horizontalLine} />
        </TouchableOpacity>
      ))}
    </View>
  );
  const selectCategory = (re: string) => {
    setBillCategory(re);
    bottomSheetRef.current?.close();
  };

  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '60%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    /* console.log('handleSheetChanges', index); */
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.layout}>
      <Header text="" action={() => navigation.goBack()} />
      <Text style={[styles.billPayment, styles.linkLargeLayout]}>
        Bill Payment
      </Text>
      <Text style={[styles.label, styles.labelTypo]}>Select category</Text>
      <View style={[styles.input, styles.row]}>
        <Text style={{color: '#000'}}>{billCategory}</Text>
        <TouchableOpacity
          style={{height: 24, justifyContent: 'center'}}
          onPress={() => bottomSheetRef.current?.expand()}>
          <ArrowDown height={10} />
        </TouchableOpacity>
      </View>
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
        <SubSection text="Transaction history" navigation="nv" link="kk" />
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
      <CustomBottomsheet
        bottomSheetRef={bottomSheetRef}
        handleSheetChanges={handleSheetChanges}
        snapPoints={snapPoints}
        children={Categories}
      />
    </ScrollView>
  );
};

export default BillPaymentShortcut;

const styles = StyleSheet.create({
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
});
