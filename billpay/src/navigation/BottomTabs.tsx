import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import BillPayment from '../screens/BillPayment/BillPayment';
import Budgeting from '../screens/Budgeting/Budgeting';
import Profile from '../screens/Profile/Profile';
import React from 'react';
import {HomeIcon} from '../icons/HomeIcon';
import {CardIcon} from '../icons/CardIcon';
import {Wallet} from '../icons/WalletIcon';
import {ProfileIcon} from '../icons/ProfileIcon';
import HomeNavigationContainer from './HomeNavStack';
import BudgetingNavigationContainer from './BudgetingNavStack';
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {height: 70},
        tabBarItemStyle: {paddingBottom: 15},
        tabBarLabelStyle: {color: '#646464', fontWeight: '700', fontSize: 12},
        tabBarActiveTintColor: '#3A5A67',
      }}>
      <Tab.Screen
        name="HomeContainer"
        component={HomeNavigationContainer}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <HomeIcon stroke={color || '#646464'} />
          ),
        }}
      />
      <Tab.Screen
        name="BillPayment"
        component={BillPayment}
        options={{
          tabBarLabel: 'Bill Payment',
          tabBarIcon: ({color, size}) => (
            <CardIcon height={14} fill={color || '#646464'} />
          ),
        }}
      />
      <Tab.Screen
        name="BudgetingContainer"
        component={BudgetingNavigationContainer}
        options={{
          tabBarIcon: ({color, size}) => <Wallet stroke={color || '#646464'} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <ProfileIcon stroke={color || '#646464'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabs;
