import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Modal,
} from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import CardDetailScreen from './CardDetailScreen';
import InPageTabBar from '../components/InPageTabBar';
import TopNavigationBar from '../navigation/TopNavigationBar';

export default function HomeScreen() {
  const { t } = useLanguage();
  const [accountsExpanded, setAccountsExpanded] = useState(true);
  const [cardsExpanded, setCardsExpanded] = useState(true);
  const [cardDetailVisible, setCardDetailVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar />
      <InPageTabBar activeTab="Home" />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <>
        <View style={styles.balanceCard}>
          <View style={styles.balanceCardInner}>
            <View style={styles.balanceRow}>
              <View>
                <Text style={styles.balanceLabel}>{t('home.currentBalance')}</Text>
                <Text style={styles.balanceAmount}>100,00 €</Text>
              </View>
              <View style={styles.cardChip} />
            </View>
            <View style={styles.divider} />
            <View style={styles.balanceRow}>
              <View>
                <Text style={styles.balanceLabel}>{t('home.availableFunds')}</Text>
                <Text style={styles.fundsAmount}>1.000,00 €</Text>
              </View>
              <View style={styles.cardBrand}>
                <View style={styles.brandCircleLeft} />
                <View style={styles.brandCircleRight} />
              </View>
            </View>
          </View>
          <View style={styles.balanceCardDecor} />
        </View>

        {/* Accounts Section */}
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.sectionHeader}
            onPress={() => setAccountsExpanded(!accountsExpanded)}
          >
            <View style={styles.sectionTitleRow}>
              <View style={styles.sectionIcon}>
                <Text style={styles.sectionIconText}>🏦</Text>
              </View>
              <Text style={styles.sectionTitle}>{t('home.accounts')}</Text>
            </View>
            <Text style={styles.chevron}>{accountsExpanded ? '▲' : '▼'}</Text>
          </TouchableOpacity>

          {accountsExpanded && (
            <View style={styles.sectionContent}>
              <View style={styles.accountItem}>
                <View style={styles.accountLeft}>
                  <View style={styles.accountIconContainer}>
                    <Text style={styles.accountIcon}>💳</Text>
                  </View>
                  <View>
                    <Text style={styles.accountName}>{t('home.currentAccount')}</Text>
                    <Text style={styles.accountNumber}>TR33 0006 1005 1978 6457 8413 26</Text>
                  </View>
                </View>
                <View style={styles.accountRight}>
                  <Text style={styles.accountBalance}>1.000,00</Text>
                  <Text style={styles.accountCurrency}>€</Text>
                </View>
              </View>
            </View>
          )}
        </View>

        {/* Cards Section */}
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.sectionHeader}
            onPress={() => setCardsExpanded(!cardsExpanded)}
          >
            <View style={styles.sectionTitleRow}>
              <View style={styles.sectionIcon}>
                <Text style={styles.sectionIconText}>💳</Text>
              </View>
              <Text style={styles.sectionTitle}>{t('home.cards')}</Text>
            </View>
            <Text style={styles.chevron}>{cardsExpanded ? '▲' : '▼'}</Text>
          </TouchableOpacity>

          {cardsExpanded && (
            <View style={styles.sectionContent}>
              <TouchableOpacity
                style={styles.cardItem}
                onPress={() => setCardDetailVisible(true)}
                activeOpacity={0.7}
              >
                <View style={styles.miniCard}>
                  <Text style={styles.miniCardBank}>UniCredit</Text>
                  <Text style={styles.miniCardNumber}>•••• 2828</Text>
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardName}>{t('home.debitCard')}</Text>
                  <Text style={styles.cardDetail}>•••• •••• •••• 2828</Text>
                  <View style={styles.cardBadge}>
                    <Text style={styles.cardBadgeText}>VISA</Text>
                  </View>
                </View>
                <View style={styles.cardRight}>
                  <Text style={styles.cardBalanceLabel}>{t('home.balance')}</Text>
                  <Text style={styles.cardBalance}>100,00</Text>
                  <Text style={styles.cardCurrency}>€</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
          </>
        </ScrollView>

      {/* Card Detail Modal */}
      <Modal
        visible={cardDetailVisible}
        animationType="slide"
        onRequestClose={() => setCardDetailVisible(false)}
      >
        <CardDetailScreen onBack={() => setCardDetailVisible(false)} />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  balanceCard: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  balanceCardInner: {
    backgroundColor: '#1B3A4B',
    padding: 20,
  },
  balanceCardDecor: {
    height: 6,
    backgroundColor: '#E31837',
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  balanceLabel: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: 12,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
  },
  fundsAmount: {
    color: '#4CD8C0',
    fontSize: 22,
    fontWeight: '700',
  },
  cardChip: {
    width: 38,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#FFD700',
    opacity: 0.85,
  },
  cardBrand: {
    flexDirection: 'row',
  },
  brandCircleLeft: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FF6B35',
    opacity: 0.9,
  },
  brandCircleRight: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFB800',
    marginLeft: -10,
    opacity: 0.9,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.15)',
    marginVertical: 4,
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    marginBottom: 14,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  sectionIconText: {
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  chevron: {
    color: '#999',
    fontSize: 12,
  },
  sectionContent: {
    padding: 16,
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  accountLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  accountIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EBF4F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  accountIcon: {
    fontSize: 18,
  },
  accountName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  accountNumber: {
    fontSize: 11,
    color: '#888',
    marginTop: 2,
  },
  accountRight: {
    alignItems: 'flex-end',
  },
  accountBalance: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  accountCurrency: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  miniCard: {
    width: 52,
    height: 36,
    borderRadius: 6,
    backgroundColor: '#E31837',
    padding: 5,
    justifyContent: 'space-between',
    marginRight: 12,
  },
  miniCardBank: {
    color: '#FFFFFF',
    fontSize: 7,
    fontWeight: '700',
  },
  miniCardNumber: {
    color: '#FFFFFF',
    fontSize: 8,
    letterSpacing: 1,
  },
  cardInfo: {
    flex: 1,
  },
  cardName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  cardDetail: {
    fontSize: 11,
    color: '#888',
    marginTop: 2,
    letterSpacing: 1,
  },
  cardBadge: {
    backgroundColor: '#1B7B8B',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  cardBadgeText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
  },
  cardRight: {
    alignItems: 'flex-end',
  },
  cardBalanceLabel: {
    fontSize: 10,
    color: '#888',
  },
  cardBalance: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
    marginTop: 2,
  },
  cardCurrency: {
    fontSize: 11,
    color: '#888',
    marginTop: 1,
  },
});
