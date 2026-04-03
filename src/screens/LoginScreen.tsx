import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useLanguage } from '../context/LanguageContext';

interface LoginScreenProps {
  onBack: () => void;
  onContinue: () => void;
}

export default function LoginScreen({ onBack, onContinue }: LoginScreenProps) {
  const { t } = useLanguage();
  const [userCode, setUserCode] = useState('');
  const [pin, setPin] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Top bar */}
          <View style={styles.topBar}>
            <TouchableOpacity style={styles.iconButton} onPress={onBack}>
              <Text style={styles.iconButtonText}>←</Text>
            </TouchableOpacity>
            <View style={styles.logoContainer}>
              <Text style={styles.logoText}>UniCredit</Text>
              <View style={styles.logoDot} />
            </View>
            <TouchableOpacity style={styles.iconButton} onPress={onBack}>
              <Text style={styles.iconButtonText}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Title */}
          <View style={styles.titleArea}>
            <Text style={styles.titleText}>{t('login.title')}</Text>
            <View style={styles.titleUnderline} />
          </View>

          {/* Form */}
          <View style={styles.formArea}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>{t('login.userCode')}</Text>
              <TextInput
                style={styles.textInput}
                value={userCode}
                onChangeText={setUserCode}
                placeholder={t('login.userCode')}
                placeholderTextColor="#666"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>{t('login.pin')}</Text>
              <TextInput
                style={styles.textInput}
                value={pin}
                onChangeText={setPin}
                placeholder={t('login.pin')}
                placeholderTextColor="#666"
                secureTextEntry
                keyboardType="number-pad"
              />
            </View>

            <TouchableOpacity style={styles.requestLink}>
              <Text style={styles.requestLinkText}>{t('login.requestAccess')}</Text>
            </TouchableOpacity>
          </View>

          {/* Bottom */}
          <View style={styles.bottomArea}>
            <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
              <Text style={styles.continueButtonText}>{t('login.continue')}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.backButton} onPress={onBack}>
              <Text style={styles.backButtonText}>{t('login.back')}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '400',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  logoDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#E31837',
    marginLeft: 2,
    marginBottom: 8,
  },
  titleArea: {
    marginTop: 32,
    marginBottom: 32,
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
  },
  titleUnderline: {
    width: 48,
    height: 3,
    backgroundColor: '#E31837',
    borderRadius: 2,
    marginTop: 8,
  },
  formArea: {
    flex: 1,
  },
  inputGroup: {
    marginBottom: 24,
  },
  inputLabel: {
    color: '#AAAAAA',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  textInput: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: '#FFFFFF',
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  requestLink: {
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  requestLinkText: {
    color: '#1B7B8B',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  bottomArea: {
    paddingVertical: 32,
    gap: 12,
  },
  continueButton: {
    backgroundColor: '#E31837',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  backButton: {
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  backButtonText: {
    color: '#AAAAAA',
    fontSize: 16,
    fontWeight: '600',
  },
});
