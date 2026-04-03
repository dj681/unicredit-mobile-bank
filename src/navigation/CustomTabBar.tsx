import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const ACTIVE_COLOR = '#007B8F';
const INACTIVE_COLOR = '#AAAAAA';

type IoniconsName = React.ComponentProps<typeof Ionicons>['name'];

function getTabIcon(routeName: string, focused: boolean): IoniconsName {
  switch (routeName) {
    case 'Home':
      return focused ? 'home' : 'home-outline';
    case 'Spending':
      return focused ? 'pie-chart' : 'pie-chart-outline';
    case 'Payments':
      return focused ? 'card' : 'card-outline';
    case 'Offers':
      return focused ? 'apps' : 'apps-outline';
    case 'More':
      return focused ? 'information-circle' : 'information-circle-outline';
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
            <Ionicons
              name={iconName}
              size={26}
              color={isFocused ? ACTIVE_COLOR : INACTIVE_COLOR}
            />
            <Text
              style={[
                styles.label,
                {
                  color: isFocused ? ACTIVE_COLOR : INACTIVE_COLOR,
                  fontWeight: isFocused ? '700' : '400',
                },
              ]}
              numberOfLines={1}
            >
              {label}
            </Text>
            {isFocused && <View style={styles.activeIndicator} />}
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 12,
    paddingBottom: 16,
    paddingHorizontal: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 16,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    gap: 4,
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    width: 24,
    height: 3,
    backgroundColor: ACTIVE_COLOR,
    borderRadius: 2,
  },
  label: {
    fontSize: 10,
    letterSpacing: 0.2,
  },
});
