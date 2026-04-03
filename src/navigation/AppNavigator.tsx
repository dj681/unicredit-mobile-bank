import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import HomeScreen from '../screens/HomeScreen';
import ConsumptionScreen from '../screens/ConsumptionScreen';
import PaymentsScreen from '../screens/PaymentsScreen';
import ProductsScreen from '../screens/ProductsScreen';
import MoreScreen from '../screens/MoreScreen';

const Tab = createBottomTabNavigator();

interface TabIconProps {
  emoji: string;
  focused: boolean;
}

function TabIcon({ emoji, focused }: TabIconProps) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.6 }}>{emoji}</Text>
    </View>
  );
}

export default function AppNavigator() {
  const { t } = useLanguage();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#E31837',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#eee',
          height: 60,
          paddingBottom: 8,
          paddingTop: 4,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: t('navigation.home'),
          tabBarIcon: ({ focused }) => <TabIcon emoji="🏠" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Consumption"
        component={ConsumptionScreen}
        options={{
          title: t('navigation.consumption'),
          tabBarIcon: ({ focused }) => <TabIcon emoji="📊" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Payments"
        component={PaymentsScreen}
        options={{
          title: t('navigation.payments'),
          tabBarIcon: ({ focused }) => <TabIcon emoji="💸" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          title: t('navigation.products'),
          tabBarIcon: ({ focused }) => <TabIcon emoji="🏪" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          title: t('navigation.more'),
          tabBarIcon: ({ focused }) => <TabIcon emoji="☰" focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
}
