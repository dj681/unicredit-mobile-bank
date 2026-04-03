import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export type MainTabName = 'Home' | 'Consumption' | 'Payments' | 'Products';

interface TabConfig {
  name: MainTabName;
  icon: React.ComponentProps<typeof Ionicons>['name'];
}

const TABS: TabConfig[] = [
  { name: 'Home', icon: 'home' },
  { name: 'Consumption', icon: 'pie-chart' },
  { name: 'Payments', icon: 'arrow-redo' },
  { name: 'Products', icon: 'apps' },
];

interface InPageTabBarProps {
  activeTab: MainTabName;
}

export default function InPageTabBar({ activeTab }: InPageTabBarProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const isActive = tab.name === activeTab;
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tab}
            onPress={() => navigation.navigate(tab.name as never)}
            activeOpacity={0.7}
          >
            <Ionicons
              name={tab.icon}
              size={22}
              color={isActive ? '#E31837' : '#666666'}
            />
            {isActive && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    left: '25%',
    right: '25%',
    height: 2,
    backgroundColor: '#E31837',
    borderRadius: 1,
  },
});
