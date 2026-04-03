import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const ACTIVE_COLOR = '#007B8F';
const INACTIVE_COLOR = '#888888';

type IoniconsName = React.ComponentProps<typeof Ionicons>['name'];

function getTabIcon(routeName: string, focused: boolean): IoniconsName {
  switch (routeName) {
    case 'Home':
      return focused ? 'home' : 'home-outline';
    case 'Consumption':
      return focused ? 'pie-chart' : 'pie-chart-outline';
    case 'Payments':
      return focused ? 'arrow-redo' : 'arrow-redo-outline';
    case 'Products':
      return focused ? 'apps' : 'apps-outline';
    case 'More':
      return focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline';
    default:
      return 'help-circle-outline';
  }
}

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const label = String(options.title ?? route.name);
        const iconName = getTabIcon(route.name, isFocused);

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}
            activeOpacity={0.75}
          >
            <View style={styles.indicatorSlot}>
              {isFocused && <View style={styles.activeIndicator} />}
            </View>
            <Ionicons
              name={iconName}
              size={24}
              color={isFocused ? ACTIVE_COLOR : INACTIVE_COLOR}
            />
            <Text
              style={[
                styles.label,
                {
                  color: isFocused ? ACTIVE_COLOR : INACTIVE_COLOR,
                  fontWeight: isFocused ? '700' : '500',
                },
              ]}
              numberOfLines={1}
            >
              {label}
            </Text>
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
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    height: 72,
    paddingBottom: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  indicatorSlot: {
    width: '100%',
    height: 3,
    alignItems: 'center',
    marginBottom: 8,
  },
  activeIndicator: {
    width: 32,
    height: 3,
    backgroundColor: ACTIVE_COLOR,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  label: {
    fontSize: 11,
    marginTop: 5,
    letterSpacing: 0.1,
  },
});
