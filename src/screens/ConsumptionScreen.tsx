import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import { useLanguage } from '../context/LanguageContext';

export default function ConsumptionScreen() {
  const { t } = useLanguage();
  const [bannerVisible, setBannerVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const incomeHeight = 120;
  const expenseHeight = 0;
  const maxBarHeight = 120;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t('consumption.title')}</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Overview Card */}
        <View style={styles.overviewCard}>
          <View style={styles.overviewHeader}>
            <Text style={styles.overviewTitle}>{t('consumption.overview')}</Text>
            <TouchableOpacity style={styles.periodButton}>
              <Text style={styles.periodLabel}>{t('consumption.period')}</Text>
              <Text style={styles.periodValue}>{t('consumption.date')}</Text>
            </TouchableOpacity>
          </View>

          {/* Bar Chart */}
          <View style={styles.chartContainer}>
            <View style={styles.barGroup}>
              <View style={styles.barLabelTop}>
                <Text style={styles.barValue}>3.000 €</Text>
              </View>
              <View style={[styles.bar, { height: incomeHeight, backgroundColor: '#1B7B8B' }]} />
              <Text style={styles.barLabel}>{t('consumption.income')}</Text>
            </View>

            <View style={styles.barGroup}>
              <View style={[styles.barLabelTop, { height: maxBarHeight - expenseHeight }]}>
                <Text style={styles.barValue}>0,00 €</Text>
              </View>
              <View style={[styles.bar, { height: expenseHeight, backgroundColor: '#2A2A2A' }]} />
              <Text style={styles.barLabel}>{t('consumption.expenses')}</Text>
            </View>
          </View>

          {/* Pagination dots */}
          <View style={styles.paginationDots}>
            {[0, 1, 2, 3, 4].map(i => (
              <View
                key={i}
                style={[styles.dot, i === 2 && styles.dotActive]}
              />
            ))}
          </View>

          <TouchableOpacity style={styles.addTransactionLink}>
            <Text style={styles.addTransactionText}>+ {t('consumption.addTransaction')}</Text>
          </TouchableOpacity>
        </View>

        {/* Alert Banner */}
        {bannerVisible && (
          <View style={styles.alertBanner}>
            <View style={styles.alertContent}>
              <Text style={styles.alertTitle}>{t('consumption.addTransaction')}</Text>
              <Text style={styles.alertDesc}>{t('consumption.addTransactionDesc')}</Text>
            </View>
            <TouchableOpacity
              style={styles.alertClose}
              onPress={() => setBannerVisible(false)}
            >
              <Text style={styles.alertCloseText}>✕</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Search */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder={t('consumption.search')}
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Transactions Section */}
        <View style={styles.transactionsSection}>
          <Text style={styles.sectionLabel}>{t('consumption.transactions')}</Text>

          <View style={styles.transactionItem}>
            <View style={styles.transactionLeft}>
              <View style={[styles.transactionIcon, { backgroundColor: '#F0F0F0' }]}>
                <Text style={styles.transactionIconText}>🏧</Text>
              </View>
              <View>
                <Text style={styles.transactionName}>{t('consumption.totalWithdrawal')}</Text>
                <Text style={styles.transactionDate}>03/2025</Text>
              </View>
            </View>
            <Text style={styles.transactionAmountNeg}>0,00 €</Text>
          </View>
        </View>

        {/* Rashodi Section */}
        <View style={styles.rashodiSection}>
          <View style={styles.rashodiHeader}>
            <Text style={styles.rashodiTitle}>{t('consumption.rashodi')}</Text>
            <Text style={styles.rashodiTotal}>0,00 €</Text>
          </View>

          <View style={styles.transactionItem}>
            <View style={styles.transactionLeft}>
              <View style={[styles.transactionIcon, { backgroundColor: '#FFF0F0' }]}>
                <Text style={styles.transactionIconText}>🛒</Text>
              </View>
              <View>
                <Text style={styles.transactionName}>{t('consumption.groceries')}</Text>
                <Text style={styles.transactionDate}>03/2025</Text>
              </View>
            </View>
            <Text style={styles.transactionAmountNeg}>0,00 €</Text>
          </View>
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
    paddingVertical: 16,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  overviewCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  overviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  overviewTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
    flex: 1,
    marginRight: 12,
  },
  periodButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignItems: 'center',
  },
  periodLabel: {
    fontSize: 10,
    color: '#888',
  },
  periodValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1A1A1A',
    marginTop: 2,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 160,
    paddingBottom: 8,
    paddingHorizontal: 20,
  },
  barGroup: {
    alignItems: 'center',
    flex: 1,
  },
  barLabelTop: {
    justifyContent: 'flex-end',
    marginBottom: 4,
  },
  barValue: {
    fontSize: 11,
    fontWeight: '600',
    color: '#555',
    marginBottom: 4,
  },
  bar: {
    width: 56,
    borderRadius: 6,
  },
  barLabel: {
    fontSize: 11,
    color: '#888',
    marginTop: 8,
    fontWeight: '600',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#DDD',
    marginHorizontal: 3,
  },
  dotActive: {
    backgroundColor: '#1B7B8B',
    width: 18,
    borderRadius: 3,
  },
  addTransactionLink: {
    alignSelf: 'center',
  },
  addTransactionText: {
    color: '#1B7B8B',
    fontSize: 14,
    fontWeight: '600',
  },
  alertBanner: {
    backgroundColor: '#1B7B8B',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  alertContent: {
    flex: 1,
    marginRight: 10,
  },
  alertTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  alertDesc: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 13,
    lineHeight: 19,
  },
  alertClose: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertCloseText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 15,
    color: '#1A1A1A',
  },
  transactionsSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#888',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  transactionIconText: {
    fontSize: 18,
  },
  transactionName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1A1A1A',
    letterSpacing: 0.3,
  },
  transactionDate: {
    fontSize: 11,
    color: '#888',
    marginTop: 2,
  },
  transactionAmountNeg: {
    fontSize: 15,
    fontWeight: '700',
    color: '#E31837',
  },
  rashodiSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  rashodiHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  rashodiTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  rashodiTotal: {
    fontSize: 14,
    fontWeight: '700',
    color: '#E31837',
  },
});
