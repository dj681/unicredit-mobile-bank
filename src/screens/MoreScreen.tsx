import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useLanguage } from '../context/LanguageContext';

interface MoreOption {
  icon: string;
  titleKey: string;
}

const moreOptions: MoreOption[] = [
  { icon: '📞', titleKey: 'more.contact' },
  { icon: '📄', titleKey: 'more.documents' },
  { icon: '⚙️', titleKey: 'more.settings' },
  { icon: '📝', titleKey: 'more.terms' },
];

export default function MoreScreen() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>{t('more.more')}</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionBtn}>
              <Text style={styles.actionBtnText}>📞</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <Text style={styles.actionBtnText}>✉️</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <Text style={styles.actionBtnText}>↗</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.headerSubtitle}>{t('more.title')}</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Options Grid */}
        <View style={styles.grid}>
          {moreOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionCard}
              activeOpacity={0.75}
            >
              <View style={styles.optionIconContainer}>
                <Text style={styles.optionIcon}>{option.icon}</Text>
              </View>
              <Text style={styles.optionTitle}>{t(option.titleKey)}</Text>
              <Text style={styles.optionArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Language Selector */}
        <View style={styles.languageSection}>
          <View style={styles.languageSectionHeader}>
            <Text style={styles.languageSectionIcon}>🌐</Text>
            <Text style={styles.languageSectionTitle}>{t('more.languageSelection')}</Text>
          </View>

          <TouchableOpacity
            style={[
              styles.languageOption,
              language === 'tr' && styles.languageOptionActive,
            ]}
            onPress={() => setLanguage('tr')}
            activeOpacity={0.75}
          >
            <Text style={styles.flagEmoji}>🇹🇷</Text>
            <Text
              style={[
                styles.languageOptionText,
                language === 'tr' && styles.languageOptionTextActive,
              ]}
            >
              {t('more.turkish')}
            </Text>
            <View
              style={[
                styles.radioCircle,
                language === 'tr' && styles.radioCircleActive,
              ]}
            >
              {language === 'tr' && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>

          <View style={styles.languageDivider} />

          <TouchableOpacity
            style={[
              styles.languageOption,
              language === 'en' && styles.languageOptionActive,
            ]}
            onPress={() => setLanguage('en')}
            activeOpacity={0.75}
          >
            <Text style={styles.flagEmoji}>🇬🇧</Text>
            <Text
              style={[
                styles.languageOptionText,
                language === 'en' && styles.languageOptionTextActive,
              ]}
            >
              {t('more.english')}
            </Text>
            <View
              style={[
                styles.radioCircle,
                language === 'en' && styles.radioCircleActive,
              ]}
            >
              {language === 'en' && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>
        </View>

        {/* App Info */}
        <View style={styles.appInfo}>
          <View style={styles.appLogoRow}>
            <Text style={styles.appLogoText}>UniCredit</Text>
            <View style={styles.appLogoDot} />
          </View>
          <Text style={styles.appVersion}>Mobile Bank v1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  actionBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtnText: {
    fontSize: 15,
  },
  headerSubtitle: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 13,
    lineHeight: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 16,
  },
  optionCard: {
    width: '47.5%',
    backgroundColor: '#E8E8E8',
    borderRadius: 14,
    padding: 18,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    minHeight: 110,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  optionIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  optionIcon: {
    fontSize: 20,
  },
  optionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A1A1A',
    flex: 1,
  },
  optionArrow: {
    fontSize: 20,
    color: '#999',
    alignSelf: 'flex-end',
    fontWeight: '300',
  },
  languageSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  languageSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  languageSectionIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  languageSectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderRadius: 10,
  },
  languageOptionActive: {
    backgroundColor: '#F0F8FA',
  },
  flagEmoji: {
    fontSize: 22,
    marginRight: 12,
  },
  languageOptionText: {
    flex: 1,
    fontSize: 15,
    color: '#555',
    fontWeight: '500',
  },
  languageOptionTextActive: {
    color: '#1B7B8B',
    fontWeight: '700',
  },
  radioCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#CCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCircleActive: {
    borderColor: '#1B7B8B',
  },
  radioInner: {
    width: 11,
    height: 11,
    borderRadius: 5.5,
    backgroundColor: '#1B7B8B',
  },
  languageDivider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginVertical: 4,
  },
  appInfo: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  appLogoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appLogoText: {
    color: '#888',
    fontSize: 16,
    fontWeight: '700',
  },
  appLogoDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#E31837',
    marginLeft: 2,
    marginBottom: 5,
  },
  appVersion: {
    color: '#BBB',
    fontSize: 12,
    marginTop: 4,
  },
});
