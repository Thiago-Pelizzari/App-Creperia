// screens/ProfileScreen.js — Tela de perfil do usuário
// Renderiza o componente ProfileForm dentro de uma área segura

import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import ProfileForm from '../components/ProfileForm';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F0E8" />
      <ProfileForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0E8',
    paddingTop: 52, // espaço para a status bar
  },
});
