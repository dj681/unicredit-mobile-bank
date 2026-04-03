import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useLanguage } from '../context/LanguageContext';
import CustomTabBar from './CustomTabBar';
import HomeScreen from '../screens/HomeScreen';
import ConsumptionScreen from '../screens/ConsumptionScreen';
import PaymentsScreen from '../screens/PaymentsScreen';
import ProductsScreen from '../screens/ProductsScreen';
import MoreScreen from '../screens/MoreScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const { t } = useLanguage();

  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: t('navigation.home') }}
      />
      <Tab.Screen
        name="Consumption"
        component={ConsumptionScreen}
        options={{ title: t('navigation.consumption') }}
      />
      <Tab.Screen
        name="Payments"
        component={PaymentsScreen}
        options={{ title: t('navigation.payments') }}
      />
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{ title: t('navigation.products') }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{ title: t('navigation.more') }}
      />
    </Tab.Navigator>
  );
}
