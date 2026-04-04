import React from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

interface TabIconProps {
  name: string;
  color?: string;
  size?: number;
  opacity?: number;
}

export function TabIcon({ name, color = '#000000', size = 24, opacity = 1 }: TabIconProps) {
  const strokeProps = {
    stroke: color,
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    fill: 'none',
  };

  switch (name) {
    case 'Home':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" opacity={opacity}>
          <Path {...strokeProps} d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z" />
          <Path {...strokeProps} d="M9 21V12h6v9" />
        </Svg>
      );
    case 'Spending':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" opacity={opacity}>
          <Rect {...strokeProps} x="2" y="7" width="20" height="14" rx="2" />
          <Path {...strokeProps} d="M16 3l-4 4-4-4" />
          <Circle cx="17" cy="14" r="1" fill={color} stroke="none" />
        </Svg>
      );
    case 'Payments':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" opacity={opacity}>
          <Path {...strokeProps} d="M5 9l3-3 3 3M8 6v10" />
          <Path {...strokeProps} d="M19 15l-3 3-3-3M16 18V8" />
        </Svg>
      );
    case 'Offers':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" opacity={opacity}>
          <Path
            {...strokeProps}
            d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"
          />
          <Circle cx="7" cy="7" r="1" fill={color} stroke="none" />
        </Svg>
      );
    case 'More':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" opacity={opacity}>
          <Path {...strokeProps} d="M3 6h18M3 12h18M3 18h18" />
        </Svg>
      );
    default:
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" opacity={opacity}>
          <Circle cx="12" cy="12" r="4" fill={color} stroke="none" />
        </Svg>
      );
  }
}
