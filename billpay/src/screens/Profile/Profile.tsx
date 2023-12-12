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
import {ProfileIcon} from '../../icons/ProfileIcon';
import {Notification} from '../../icons/Notification';
import {LockIcon} from '../../icons/LockIcon';
import {ArrowRight} from '../../icons/ArrowRight';
import {Logout} from '../../icons/Logout';
import {useAppDispatch} from '../../src/store';
import {signOut} from '../../src';

const categoryList = ['Electricity', 'Airtime', 'School fees', 'others'];

const BillPaymentShortcut = ({navigation}: {navigation: any}) => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(signOut());
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
      <Text style={[styles.billPayment, styles.linkLargeLayout]}>Profile</Text>
      <View style={[styles.membership]}>
        <Text style={styles.membershipText1}>Premium Membership</Text>
        <Text style={styles.membershipText2}>Upgrade for more features</Text>
      </View>
      <View style={styles.recentExpenditureSection}>
        <Text style={[styles.todaysExpenditure, styles.labelTypo]}>
          Account
        </Text>
        <View style={styles.menus}>
          <TouchableOpacity style={styles.menu}>
            <View style={styles.menuInner}>
              <ProfileIcon />
              <Text style={styles.menuText}>Profile</Text>
            </View>
            <ArrowRight />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <View style={styles.menuInner}>
              <LockIcon />
              <Text style={styles.menuText}>Change password</Text>
            </View>
            <ArrowRight />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <View style={styles.menuInner}>
              <Notification />
              <Text style={styles.menuText}>Notification</Text>
            </View>
            <ArrowRight />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.recentExpenditureSection}>
        <Text style={[styles.todaysExpenditure, styles.labelTypo]}>
          General
        </Text>
        <View style={styles.menus}>
          <TouchableOpacity style={styles.menu}>
            <View style={styles.menuInner}>
              <ProfileIcon />
              <Text style={styles.menuText}>Rate</Text>
            </View>
            <ArrowRight />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <View style={styles.menuInner}>
              <LockIcon />
              <Text style={styles.menuText}>Help</Text>
            </View>
            <ArrowRight />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <View style={styles.menuInner}>
              <Notification />
              <Text style={styles.menuText}>Notification</Text>
            </View>
            <ArrowRight />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={logout} style={styles.logout}>
        <Logout />
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
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
  menus: {
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    borderColor: Color.primaryBase,
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  menuInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  membership: {
    backgroundColor: Color.accentBase,
    width: '90%',
    marginTop: 13,
    borderRadius: 12,
    padding: 17,
    alignSelf: 'center',
  },
  membershipText1: {
    color: '#fff',
    fontFamily: FontFamily.defaultBodyBold,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 18,
  },
  membershipText2: {
    color: '#E7E7FF',
    fontSize: 12,
    lineHeight: 18,
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
    fontSize: FontSize.headerH6_size,
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
    marginLeft: 10,
    marginTop: 35,
  },
  todaysExpenditure: {
    fontFamily: FontFamily.headerH9,
    fontWeight: '700',
    color: Color.text01,
    marginLeft: 12,
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
  menuText: {
    color: '#000',
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    width: '85%',
    alignSelf: 'center',
    paddingTop: 10,
  },
  logoutText: {
    fontWeight: '700',
    color: Color.primary03,
  },
});
