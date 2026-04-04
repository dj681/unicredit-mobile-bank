import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const tabIcons: Record<string, ImageSourcePropType> = {
  Home: require('../assets/icons/home.png'),
  Spending: require('../assets/icons/spending.png'),
  Payments: require('../assets/icons/payments.png'),
  Offers: require('../assets/icons/offers.png'),
  More: require('../assets/icons/more.png'),
};

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title ?? route.name;
        const isFocused = state.index === index;
        const iconSource = tabIcons[route.name];

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

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tab}
            onPress={onPress}
            activeOpacity={0.7}
          >
            {iconSource && (
              <Image
                source={iconSource}
                accessibilityLabel={route.name}
                style={[
                  styles.icon,
                  isFocused ? styles.iconActive : styles.iconInactive,
                ]}
              />
            )}
            <Text style={[styles.label, isFocused && styles.labelActive]}>
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
    borderTopWidth: 0,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    minHeight: 44,
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconActive: {
    opacity: 1,
    tintColor: '#E31837',
  },
  iconInactive: {
    opacity: 0.55,
  },
  label: {
    fontSize: 10,
    color: '#999999',
    marginTop: 4,
  },
  labelActive: {
    color: '#E31837',
    fontWeight: '600',
  },
});