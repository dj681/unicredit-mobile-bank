import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLanguage } from '../context/LanguageContext';
import HomeScreen from '../screens/HomeScreen';
import ConsumptionScreen from '../screens/ConsumptionScreen';
import PaymentsScreen from '../screens/PaymentsScreen';
import ProductsScreen from '../screens/ProductsScreen';
import MoreScreen from '../screens/MoreScreen';

const Tab = createBottomTabNavigator();

type IoniconsName = React.ComponentProps<typeof Ionicons>['name'];

interface TabIconProps {
  name: IoniconsName;
  color: string;
  size: number;
}

function TabIcon({ name, color, size }: TabIconProps) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Ionicons name={name} size={size} color={color} />
    </View>
  );
}

function HomeTabIcon({ color, size }: { color: string; size: number }) {
  return (
    <View style={styles.homeIconWrapper}>
      <View style={styles.homeIconCircle}>
        <Ionicons name="home" size={size + 4} color="#FFFFFF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeIconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    top: -18,
  },
  homeIconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E31837',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#E31837',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
});

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
          height: 75,
          paddingBottom: 10,
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
          tabBarIcon: ({ color, size }) => <HomeTabIcon color={color} size={size} />,
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
            marginTop: 12,
          },
        }}
      />
      <Tab.Screen
        name="Consumption"
        component={ConsumptionScreen}
        options={{
          title: t('navigation.consumption'),
          tabBarIcon: ({ color, size }) => <TabIcon name="pie-chart" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Payments"
        component={PaymentsScreen}
        options={{
          title: t('navigation.payments'),
          tabBarIcon: ({ color, size }) => <TabIcon name="arrow-redo" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          title: t('navigation.products'),
          tabBarIcon: ({ color, size }) => <TabIcon name="apps" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          title: t('navigation.more'),
          tabBarIcon: ({ color, size }) => <TabIcon name="ellipsis-vertical" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
