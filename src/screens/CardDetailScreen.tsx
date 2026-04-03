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

interface CardDetailScreenProps {
  onBack: () => void;
}

export default function CardDetailScreen({ onBack }: CardDetailScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Kartice</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Card Holder & Number */}
        <View style={styles.cardSection}>
          <Text style={styles.cardHolderName}>JOHN DOE</Text>
          <Text style={styles.cardNumberMasked}>•••• •••• •••• 2828</Text>
        </View>

        {/* Visual Card */}
        <View style={styles.visualCard}>
          <View style={styles.visualCardInner}>
            <View style={styles.vcHeader}>
              <Text style={styles.vcBankName}>UniCredit Bank</Text>
              <View style={styles.vcChip} />
            </View>
            <View style={styles.vcBody}>
              <Text style={styles.vcCardNumber}>•••• •••• •••• 2828</Text>
            </View>
            <View style={styles.vcFooter}>
              <View style={styles.vcFooterLeft}>
                <Text style={styles.vcLabel}>TITULAIRE</Text>
                <Text style={styles.vcHolderName}>JOHN DOE</Text>
              </View>
              <View style={styles.vcFooterRight}>
                <Text style={styles.vcLabel}>EXPIRY</Text>
                <Text style={styles.vcExpiry}>03/28</Text>
              </View>
              <View style={styles.vcMastercardBadge}>
                <View style={styles.mcCircleLeft} />
                <View style={styles.mcCircleRight} />
              </View>
            </View>
          </View>
        </View>

        {/* Card Action Buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIcon}>
              <Text style={styles.actionIconText}>ℹ</Text>
            </View>
            <Text style={styles.actionLabel}>Detalji o kartici</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIcon}>
              <Text style={styles.actionIconText}>⚙</Text>
            </View>
            <Text style={styles.actionLabel}>Postavke kartica</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Pronađi"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterIcon}>≡</Text>
          </TouchableOpacity>
        </View>

        {/* Date Label */}
        <Text style={styles.dateLabel}>03/2025</Text>

        {/* Empty state — 0€ spending */}
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>Nema transakcija</Text>
          <Text style={styles.emptyStateSubText}>Potrošnja: 0,00 €</Text>
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
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  backArrow: {
    fontSize: 32,
    color: '#1A1A1A',
    lineHeight: 36,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  cardSection: {
    marginBottom: 12,
  },
  cardHolderName: {
    fontSize: 13,
    fontWeight: '700',
    color: '#555',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  cardNumberMasked: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1A1A1A',
    letterSpacing: 2,
  },
  visualCard: {
    marginBottom: 20,
    borderRadius: 14,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 6,
  },
  visualCardInner: {
    backgroundColor: '#E31837',
    height: 160,
    borderRadius: 14,
    padding: 16,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  vcHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vcChip: {
    width: 32,
    height: 24,
    borderRadius: 4,
    backgroundColor: '#FFD700',
    opacity: 0.85,
  },
  vcBankName: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  vcBody: {
    flex: 1,
    justifyContent: 'center',
  },
  vcCardNumber: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 2,
  },
  vcFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  vcFooterLeft: {
    flex: 1,
  },
  vcFooterRight: {
    flex: 1,
    marginLeft: 12,
  },
  vcLabel: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: 9,
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  vcHolderName: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  vcExpiry: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  vcMastercardBadge: {
    flexDirection: 'row',
  },
  mcCircleLeft: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FF6B35',
    opacity: 0.9,
  },
  mcCircleRight: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFB800',
    marginLeft: -10,
    opacity: 0.9,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  actionButton: {
    alignItems: 'center',
    flex: 1,
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  actionIconText: {
    fontSize: 18,
    color: '#1A1A1A',
  },
  actionLabel: {
    fontSize: 12,
    color: '#555',
    fontWeight: '500',
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#E8E8E8',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 16,
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
  filterButton: {
    paddingLeft: 8,
  },
  filterIcon: {
    fontSize: 20,
    color: '#555',
  },
  dateLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 12,
  },
  emptyState: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  emptyStateText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#888',
    marginBottom: 6,
  },
  emptyStateSubText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
  },
});
