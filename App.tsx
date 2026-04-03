import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { LanguageProvider } from './src/context/LanguageContext';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import AppNavigator from './src/navigation/AppNavigator';

type AppScreen = 'onboarding' | 'login' | 'main';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('onboarding');

  return (
    <LanguageProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        {currentScreen === 'onboarding' && (
          <OnboardingScreen onLogin={() => setCurrentScreen('login')} />
        )}
        {currentScreen === 'login' && (
          <LoginScreen
            onBack={() => setCurrentScreen('onboarding')}
            onContinue={() => setCurrentScreen('main')}
          />
        )}
        {currentScreen === 'main' && <AppNavigator />}
      </NavigationContainer>
    </LanguageProvider>
  );
}
