import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import ProfileScreen from '../screens/ProfileScreen';

const PROFILE_FIRST_NAME = 'John';
const PROFILE_INITIALS = 'JD';

export default function TopNavigationBar() {
  const [profileVisible, setProfileVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setProfileVisible(true)}
        activeOpacity={0.7}
      >
        <View style={styles.content}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{PROFILE_INITIALS}</Text>
          </View>
          <View style={styles.textGroup}>
            <Text style={styles.greeting}>Bonjour,</Text>
            <Text style={styles.name}>{PROFILE_FIRST_NAME}</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
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
    backgroundColor: '#E31837',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  textGroup: {
    flex: 1,
  },
  greeting: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 11,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  chevron: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 24,
    fontWeight: '300',
    lineHeight: 28,
  },
});
