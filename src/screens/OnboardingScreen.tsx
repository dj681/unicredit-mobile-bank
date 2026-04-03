import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { useLanguage } from '../context/LanguageContext';

const { width } = Dimensions.get('window');

interface OnboardingScreenProps {
  onLogin: () => void;
}

export default function OnboardingScreen({ onLogin }: OnboardingScreenProps) {
  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>UniCredit</Text>
          <View style={styles.logoDot} />
        </View>
        <Text style={styles.bankLabel}>Mobile Bank</Text>
      </View>

      <View style={styles.cardArea}>
        <View style={styles.cardWrapper}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardBankName}>UniCredit</Text>
              <View style={styles.cardChip} />
            </View>
            <View style={styles.cardNumberRow}>
              <Text style={styles.cardNumber}>•••• •••• •••• 4821</Text>
            </View>
            <View style={styles.cardFooter}>
              <View>
                <Text style={styles.cardLabel}>CARD HOLDER</Text>
                <Text style={styles.cardValue}>JOHN DOE</Text>
              </View>
              <View>
                <Text style={styles.cardLabel}>EXPIRES</Text>
                <Text style={styles.cardValue}>12/28</Text>
              </View>
              <View style={styles.cardBrand}>
                <View style={styles.brandCircleLeft} />
                <View style={styles.brandCircleRight} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.cardWrapperBack}>
          <View style={styles.cardBack}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardBankNameDark}>UniCredit</Text>
              <View style={styles.cardChipDark} />
            </View>
            <View style={styles.cardNumberRow}>
              <Text style={styles.cardNumberDark}>•••• •••• •••• 3654</Text>
            </View>
            <View style={styles.cardFooter}>
              <View>
                <Text style={styles.cardLabelDark}>CARD HOLDER</Text>
                <Text style={styles.cardValueDark}>JANE DOE</Text>
              </View>
              <View>
                <Text style={styles.cardLabelDark}>EXPIRES</Text>
                <Text style={styles.cardValueDark}>09/27</Text>
              </View>
              <View style={styles.cardBrand}>
                <View style={styles.brandCircleLeftDark} />
                <View style={styles.brandCircleRightDark} />
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.textArea}>
        <Text style={styles.welcomeText}>{t('onboarding.welcome')}</Text>
        <Text style={styles.subtitleText}>{t('onboarding.subtitle')}</Text>
        <Text style={styles.descriptionText}>{t('onboarding.description')}</Text>
      </View>

      <View style={styles.bottomArea}>
        <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
          <Text style={styles.loginButtonText}>{t('onboarding.loginButton')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '700',
    letterSpacing: 1,
  },
  logoDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E31837',
    marginLeft: 3,
    marginBottom: 10,
  },
  bankLabel: {
    color: '#999',
    fontSize: 13,
    letterSpacing: 3,
    marginTop: 2,
    textTransform: 'uppercase',
  },
  cardArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  cardWrapper: {
    position: 'absolute',
    transform: [{ rotate: '-8deg' }, { translateY: -20 }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 10,
    zIndex: 2,
  },
  cardWrapperBack: {
    position: 'absolute',
    transform: [{ rotate: '8deg' }, { translateY: 20 }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    zIndex: 1,
  },
  card: {
    width: width * 0.78,
    height: 190,
    borderRadius: 16,
    backgroundColor: '#E31837',
    padding: 20,
    justifyContent: 'space-between',
  },
  cardBack: {
    width: width * 0.78,
    height: 190,
    borderRadius: 16,
    backgroundColor: '#1B7B8B',
    padding: 20,
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardBankName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  cardBankNameDark: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  cardChip: {
    width: 36,
    height: 28,
    borderRadius: 5,
    backgroundColor: '#FFD700',
    opacity: 0.9,
  },
  cardChipDark: {
    width: 36,
    height: 28,
    borderRadius: 5,
    backgroundColor: '#FFD700',
    opacity: 0.9,
  },
  cardNumberRow: {
    marginTop: 10,
  },
  cardNumber: {
    color: '#FFFFFF',
    fontSize: 16,
    letterSpacing: 3,
    fontWeight: '600',
  },
  cardNumberDark: {
    color: '#FFFFFF',
    fontSize: 16,
    letterSpacing: 3,
    fontWeight: '600',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  cardLabel: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 9,
    letterSpacing: 1,
  },
  cardValue: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 2,
  },
  cardLabelDark: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 9,
    letterSpacing: 1,
  },
  cardValueDark: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 2,
  },
  cardBrand: {
    flexDirection: 'row',
  },
  brandCircleLeft: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FF6B35',
    opacity: 0.9,
  },
  brandCircleRight: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFB800',
    marginLeft: -10,
    opacity: 0.9,
  },
  brandCircleLeftDark: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FF6B35',
    opacity: 0.9,
  },
  brandCircleRightDark: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFB800',
    marginLeft: -10,
    opacity: 0.9,
  },
  textArea: {
    paddingHorizontal: 30,
    paddingBottom: 20,
    alignItems: 'center',
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitleText: {
    color: '#E31837',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  descriptionText: {
    color: '#AAAAAA',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
  },
  bottomArea: {
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  loginButton: {
    backgroundColor: '#E31837',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
