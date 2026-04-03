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
import InPageTabBar from '../components/InPageTabBar';
import ProfessionalTabBar, { ProfileTab, ProfessionalEmptyState } from '../components/ProfessionalTabBar';

interface PaymentOption {
  icon: string;
  titleKey: string;
  descKey: string;
  color: string;
}

const paymentOptions: PaymentOption[] = [
  {
    icon: '💳',
    titleKey: 'payments.newPayment',
    descKey: 'payments.newPaymentDesc',
    color: '#1B7B8B',
  },
  {
    icon: '🔄',
    titleKey: 'payments.fundTransfer',
    descKey: 'payments.fundTransferDesc',
    color: '#2C5F7F',
  },
  {
    icon: '📄',
    titleKey: 'payments.eBills',
    descKey: 'payments.eBillsDesc',
    color: '#5A4A8A',
  },
  {
    icon: '📋',
    titleKey: 'payments.standingOrders',
    descKey: 'payments.standingOrdersDesc',
    color: '#7A4A6A',
  },
  {
    icon: '📷',
    titleKey: 'payments.qrPayment',
    descKey: 'payments.qrPaymentDesc',
    color: '#2A6A4A',
  },
];

export default function PaymentsScreen() {
  const { t } = useLanguage();
  const [profileTab, setProfileTab] = React.useState<ProfileTab>('personal');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>{t('payments.payments')}</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionBtn}>
              <Text style={styles.actionBtnText}>📞</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <Text style={styles.actionBtnText}>✉️</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <Text style={styles.actionBtnText}>❓</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.headerSubtitle}>{t('payments.title')}</Text>
      </View>

      <InPageTabBar activeTab="Payments" />
      <ProfessionalTabBar activeTab={profileTab} onTabChange={setProfileTab} />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {profileTab === 'professional' ? (
          <ProfessionalEmptyState />
        ) : (
          <>
            {paymentOptions.map((option, index) => (
              <TouchableOpacity key={index} style={styles.optionCard} activeOpacity={0.75}>
                <View style={[styles.optionIconWrapper, { backgroundColor: option.color }]}>
                  <Text style={styles.optionIcon}>{option.icon}</Text>
                </View>
                <View style={styles.optionTextArea}>
                  <Text style={styles.optionTitle}>{t(option.titleKey)}</Text>
                  <Text style={styles.optionDesc} numberOfLines={2}>
                    {t(option.descKey)}
                  </Text>
                </View>
                <View style={styles.optionArrowContainer}>
                  <Text style={styles.optionArrow}>›</Text>
                </View>
              </TouchableOpacity>
            ))}
          </>
        )}
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
  optionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  optionIconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  optionIcon: {
    fontSize: 22,
  },
  optionTextArea: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  optionDesc: {
    fontSize: 12,
    color: '#888',
    lineHeight: 18,
  },
  optionArrowContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  optionArrow: {
    fontSize: 20,
    color: '#999',
    fontWeight: '300',
    lineHeight: 24,
  },
});
