import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {Color, FontFamily, FontSize} from '../../common/GlobalStyles';
import SubSection from '../../components/Home/SubSection';
import PlanCard from '../../components/Budgeting/PlanCard';

const MyPlan = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView contentContainerStyle={styles.layout}>
      <Header text="Back" action={() => navigation.goBack()} />
      <Text style={[styles.billPayment, styles.linkLargeLayout]}>
        All planned budget
      </Text>
      <View style={styles.recentExpenditureSection}>
        <Text style={[styles.todaysExpenditure, styles.labelTypo]}>
          Due payment
        </Text>
        <PlanCard
          link="link"
          deadline="23/08/2023"
          status="Pending"
          title="Electricity payment"
          amount={2400.0}
          perentage={60}
        />
        <PlanCard
          link="link"
          deadline="23/08/2023"
          status="Pending"
          title="Electricity payment"
          amount={2400.0}
          perentage={60}
        />
      </View>
      <View style={[styles.billsUpdates1, {marginTop: 20}]}>
        <SubSection text="Other payments" navigation="nv" link="kk" />
        <PlanCard
          link="link"
          deadline="23/08/2023"
          status="Pending"
          title="Electricity payment"
          amount={2400.0}
          perentage={60}
        />
        <PlanCard
          link="link"
          deadline="23/08/2023"
          status="Completed"
          title="Electricity payment"
          amount={2400.0}
          perentage={100}
        />
      </View>
    </ScrollView>
  );
};

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
  recentExpenditureSection: {
    marginLeft: 19,
    marginTop: 35,
  },
  todaysExpenditure: {
    fontFamily: FontFamily.headerH9,
    fontWeight: '700',
    color: Color.text01,
  },
});

export default MyPlan;
