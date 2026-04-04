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
import TopNavigationBar from '../components/TopNavigationBar';

interface ProductCard {
  icon: string;
  titleKey: string;
  color: string;
  lightColor: string;
}

const productCards: ProductCard[] = [
  {
    icon: '🏦',
    titleKey: 'products.accounts',
    color: '#2C5F7F',
    lightColor: '#D6EAF5',
  },
  {
    icon: '💳',
    titleKey: 'products.cards',
    color: '#8B0000',
    lightColor: '#F5D6D6',
  },
  {
    icon: '💰',
    titleKey: 'products.credits',
    color: '#A85A7F',
    lightColor: '#F5D6EA',
  },
  {
    icon: '🐖',
    titleKey: 'products.savings',
    color: '#5A7A8A',
    lightColor: '#D6E8F0',
  },
];

export default function ProductsScreen() {
  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar />
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>{t('products.products')}</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionBtn}>
              <Text style={styles.actionBtnText}>📞</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <Text style={styles.actionBtnText}>✉️</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.headerSubtitle}>{t('products.title')}</Text>
      </View>

      <InPageTabBar activeTab="Products" />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <>
            <View style={styles.grid}>
              {productCards.map((card, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.productCard, { backgroundColor: card.color }]}
                  activeOpacity={0.8}
                >
                  <View style={[styles.iconCircle, { backgroundColor: 'rgba(255,255,255,0.15)' }]}>
                    <Text style={styles.productIcon}>{card.icon}</Text>
                  </View>
                  <Text style={styles.productTitle}>{t(card.titleKey)}</Text>
                  <View style={styles.arrowRow}>
                    <Text style={styles.productArrow}>→</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            {/* Info Banner */}
            <View style={styles.infoBanner}>
              <Text style={styles.infoBannerIcon}>ℹ️</Text>
              <Text style={styles.infoBannerText}>
                {t('products.title')}
              </Text>
            </View>
          </>
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
  productCard: {
    width: '47.5%',
    borderRadius: 16,
    padding: 20,
    aspectRatio: 1,
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: '#DDDDDD',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productIcon: {
    fontSize: 24,
  },
  productTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 12,
  },
  arrowRow: {
    alignItems: 'flex-end',
  },
  productArrow: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 20,
  },
  infoBanner: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#EEEEEE',
  },
  infoBannerIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  infoBannerText: {
    flex: 1,
    fontSize: 13,
    color: '#555',
    lineHeight: 20,
  },
});
