import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLanguage } from '../context/LanguageContext';

export type ProfileTab = 'personal' | 'professional';

interface ProfessionalTabBarProps {
  activeTab: ProfileTab;
  onTabChange: (tab: ProfileTab) => void;
}

export default function ProfessionalTabBar({ activeTab, onTabChange }: ProfessionalTabBarProps) {
  const { t } = useLanguage();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'personal' && styles.tabActive]}
        onPress={() => onTabChange('personal')}
        activeOpacity={0.7}
      >
        <Text style={[styles.tabText, activeTab === 'personal' && styles.tabTextActive]}>
          {t('common.personal')}
        </Text>
        {activeTab === 'personal' && <View style={styles.activeIndicator} />}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, activeTab === 'professional' && styles.tabActive]}
        onPress={() => onTabChange('professional')}
        activeOpacity={0.7}
      >
        <Text style={[styles.tabText, activeTab === 'professional' && styles.tabTextActive]}>
          {t('common.professional')}
        </Text>
        {activeTab === 'professional' && <View style={styles.activeIndicator} />}
      </TouchableOpacity>
    </View>
  );
}

export function ProfessionalEmptyState() {
  const { t } = useLanguage();
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>{t('common.noProfessionalAccounts')}</Text>
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
  tabActive: {
    backgroundColor: '#FAFAFA',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#888888',
  },
  tabTextActive: {
    color: '#E31837',
    fontWeight: '700',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    left: '20%',
    right: '20%',
    height: 2,
    backgroundColor: '#E31837',
    borderRadius: 1,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    paddingHorizontal: 32,
  },
  emptyText: {
    fontSize: 15,
    color: '#888',
    textAlign: 'center',
    lineHeight: 22,
  },
});
