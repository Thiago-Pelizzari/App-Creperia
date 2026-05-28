// App.js — Ponto de entrada principal do aplicativo
// Configura a navegação entre as telas: Home, Pedidos e Perfil

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import OrdersScreen from './screens/OrdersScreen';
import ProfileScreen from './screens/ProfileScreen';
import FooterNav from './components/FooterNav';

export default function App() {
  // Controla qual tela está ativa no momento
  const [activeScreen, setActiveScreen] = useState('home');

  // Renderiza a tela correspondente à aba ativa
  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen />;
      case 'orders':
        return <OrdersScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Área principal de conteúdo */}
      <View style={styles.content}>
        {renderScreen()}
      </View>

      {/* Footer fixo na parte inferior */}
      <FooterNav activeScreen={activeScreen} onNavigate={setActiveScreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0E8',
  },
  content: {
    flex: 1,
  },
});
