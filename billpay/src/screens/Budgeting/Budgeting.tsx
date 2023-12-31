import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Color,
  FontSize,
  FontFamily,
  Border,
  Padding,
} from '../../common/GlobalStyles';
import {Notification} from '../../icons/Notification';
import {OpenEye} from '../../icons';
import SubSection from '../../components/Home/SubSection';
import BillCard from '../../components/Home/BillCard';
import {PlusButton} from '../../icons/PlusButton';
import PlanCard from '../../components/Budgeting/PlanCard';

const Budgeting = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView contentContainerStyle={styles.homeScreen}>
      <View style={[styles.headerSection, styles.shortcutsPosition]}>
        <View>
          <Text style={[styles.helloGoodness, styles.viewTypo]}>Budgeting</Text>
          <Text style={[styles.welcomeBackDont, styles.labelSpaceBlock]}>
            Track all your bills and be on time on every payment
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.iconlycurvedlightnotificati, styles.iconLayout]}>
          <Notification />
        </TouchableOpacity>
      </View>
      <View style={[styles.banners, styles.bannersLayout1]}>
        <View style={[styles.bannersChild, styles.bannersLayout]} />
        <View style={[styles.bannersItem, styles.bannersLayout]} />
        <View style={styles.totalBalance}>
          <View style={styles.totalBalanceParent}>
            <Text style={styles.totalBalance1}>Total balance</Text>
            <TouchableOpacity
              style={[
                styles.iconlycurvedlightshow,
                styles.iconlycurvedlightshowLayout,
              ]}>
              <OpenEye fill={'#fff'} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>$2400.00</Text>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add income</Text>
            <PlusButton />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add Spending</Text>
            <PlusButton />
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.billsUpdates1, {marginTop: 10}]}>
        <SubSection text="My plan" navigation={navigation} link="MyPlan" />
        <View style={[styles.upComingBills1, styles.bannersLayout1]}>
          <PlanCard
            link="link"
            deadline="23/08/2023 "
            status="Pending"
            title="Electricity payment"
            amount={2400.0}
            perentage={60}
          />
        </View>
      </View>
      <View style={[styles.billsUpdates1, {marginTop: 20}]}>
        <SubSection
          text="Transaction history"
          navigation={navigation}
          link="TransactionHistory"
        />
        <View
          style={[
            styles.upComingBills1,
            styles.bannersLayout1,
            {backgroundColor: Color.text05, paddingVertical: 10},
          ]}>
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

const styles = StyleSheet.create({
  upComingBills1: {
    width: 327,
    paddingHorizontal: Padding.p_4xs,
    marginTop: 11,
  },
  buttonGroup: {
    marginTop: 60,
    marginLeft: 20,
    flexDirection: 'row',
    gap: 15,
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
  shortcutsPosition: {
    marginLeft: 23,
  },
  shortCutsTypo: {
    color: Color.text01,
    fontSize: FontSize.bodyMedium1_size,
    fontFamily: FontFamily.bodyMedium1,
    fontWeight: '700',
    lineHeight: 22,
  },
  bannersLayout1: {
    borderRadius: Border.br_xl,
    overflow: 'hidden',
  },
  bannersLayout: {
    opacity: 0.5,
    height: 67,
    width: 139,
    borderTopRightRadius: Border.br_11xl,
    position: 'absolute',
  },
  viewTypo: {
    color: Color.accentBase,
    fontFamily: FontFamily.bodyMedium,
    fontWeight: '700',
    textAlign: 'left',
  },
  labelSpaceBlock: {
    marginTop: 4,
    fontSize: FontSize.bodyLight_size,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  totalBalance1: {
    textAlign: 'right',
    color: Color.systemBackgroundLightPrimary,
    lineHeight: 20,
    fontSize: FontSize.bodyLight_size,
    fontFamily: FontFamily.bodyMedium1,
    fontWeight: '600',
  },
  iconlycurvedlightshowLayout: {
    height: 16,
    width: 16,
  },
  text: {
    fontFamily: FontFamily.bodyMedium,
    fontWeight: '700',
    lineHeight: 32,
    fontSize: FontSize.headerH6_size,
    marginLeft: 8,
    textAlign: 'right',
    color: Color.systemBackgroundLightPrimary,
  },
  totalBalanceParent: {
    width: 102,
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
  },
  totalBalance: {
    top: 8,
    left: 13,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  banners: {
    marginHorizontal: 15,
    backgroundColor: Color.accentBase,
    width: 330,
    height: 120,
  },
  homeScreen: {
    width: '100%',
    /* minHeight: Dimensions.get('screen').height, */
    backgroundColor: Color.systemBackgroundLightPrimary,
    paddingBottom: 20,
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
  iconlycurvedlightnotificati: {
    marginLeft: 89,
  },
  headerSection: {
    marginTop: 43,
    flexDirection: 'row',
  },
  billsUpdates1: {
    left: 13,
  },
  bannersChild: {
    top: 74,
    left: -24,
    backgroundColor: Color.colorLightsteelblue,
  },
  bannersItem: {
    top: 48,
    left: 330,
    backgroundColor: Color.colorThistle,
    transform: [
      {
        rotate: '-179.77deg',
      },
    ],
  },
  iconlycurvedlightshow: {
    marginLeft: 8,
  },
  shortcuts: {
    marginVertical: 25,
  },
  shortCuts: {
    textAlign: 'left',
    marginLeft: 12,
  },
  billManagementParent: {
    marginTop: 7,
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: '600',
  },
});

export default Budgeting;
