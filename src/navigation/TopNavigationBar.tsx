import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import ProfileScreen from '../screens/ProfileScreen';
import { PROFILE } from '../data/profile';

export default function TopNavigationBar() {
  const { t } = useLanguage();
  const [profileVisible, setProfileVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setProfileVisible(true)}
        activeOpacity={0.85}
      >
        {/* Logo */}
        <View style={styles.logoRow}>
          <Text style={styles.logoText}>UniCredit</Text>
          <View style={styles.logoDot} />
        </View>

        {/* Greeting */}
        <Text style={styles.greeting}>
          {t('profile.greeting')} {PROFILE.firstName}
        </Text>

        {/* Avatar */}
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {PROFILE.firstName[0]}{PROFILE.lastName[0]}
          </Text>
        </View>
      </TouchableOpacity>

      <Modal
        visible={profileVisible}
        animationType="slide"
        onRequestClose={() => setProfileVisible(false)}
      >
        <ProfileScreen onBack={() => setProfileVisible(false)} />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  logoText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  logoDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#E31837',
    marginLeft: 2,
    marginTop: 2,
  },
  greeting: {
    fontSize: 13,
    color: '#555555',
    fontWeight: '500',
    marginRight: 12,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E31837',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
});
