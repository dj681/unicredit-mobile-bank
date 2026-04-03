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

interface ProfileScreenProps {
  onBack: () => void;
}

const PROFILE = {
  firstName: 'John',
  lastName: 'Doe',
  phone: '+90 555 123 45 67',
  email: 'john.doe@unicredit.com',
  address: 'Bağcılar Mahallesi, Atatürk Caddesi No:12, 34200 İstanbul, Türkiye',
  dob: '15/08/1985',
  iban: 'TR33 0006 1005 1978 6457 8413 26',
  clientId: 'UC-2025-001234',
};

export default function ProfileScreen({ onBack }: ProfileScreenProps) {
  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('profile.title')}</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Avatar */}
        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
          <Text style={styles.fullName}>{PROFILE.firstName} {PROFILE.lastName}</Text>
          <Text style={styles.clientId}>{t('profile.clientId')}: {PROFILE.clientId}</Text>
        </View>

        {/* Personal Information */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t('profile.personalInfo')}</Text>

          <ProfileRow label={t('profile.firstName')} value={PROFILE.firstName} />
          <ProfileRow label={t('profile.lastName')} value={PROFILE.lastName} />
          <ProfileRow label={t('profile.dob')} value={PROFILE.dob} />
        </View>

        {/* Contact */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t('profile.contact')}</Text>

          <ProfileRow label={t('profile.phone')} value={PROFILE.phone} />
          <ProfileRow label={t('profile.email')} value={PROFILE.email} />
          <ProfileRow label={t('profile.address')} value={PROFILE.address} last />
        </View>

        {/* Bank Details */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t('profile.bankDetails')}</Text>

          <ProfileRow label={t('profile.iban')} value={PROFILE.iban} last />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

interface ProfileRowProps {
  label: string;
  value: string;
  last?: boolean;
}

function ProfileRow({ label, value, last }: ProfileRowProps) {
  return (
    <View style={[styles.row, last && styles.rowLast]}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
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
  avatarSection: {
    alignItems: 'center',
    paddingVertical: 28,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#E31837',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: '#E31837',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '700',
  },
  fullName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  clientId: {
    fontSize: 13,
    color: '#888',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    marginBottom: 14,
    paddingHorizontal: 16,
    paddingTop: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#E31837',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  row: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  rowLast: {
    borderBottomWidth: 0,
    paddingBottom: 14,
  },
  rowLabel: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  rowValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A1A1A',
  },
});
