// screens/OrdersScreen.js — Tela de pedidos (placeholder)
// Layout reservado; a lógica do carrinho será implementada posteriormente

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      {/* Ícone e mensagem de placeholder */}
      <Text style={styles.icone}>📋</Text>
      <Text style={styles.titulo}>Meus Pedidos</Text>
      <Text style={styles.subtitulo}>
        A lógica do carrinho e histórico de pedidos{'\n'}
        será implementada em breve.
      </Text>

      {/* Caixas decorativas simulando cards de pedido */}
      {[1, 2, 3].map((i) => (
        <View key={i} style={styles.cardPlaceholder}>
          <View style={styles.placeholderLinha} />
          <View style={[styles.placeholderLinha, { width: '60%', opacity: 0.4 }]} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0E8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    gap: 8,
  },
  icone: {
    fontSize: 48,
    marginBottom: 8,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1A1209',
    letterSpacing: 0.3,
  },
  subtitulo: {
    fontSize: 13,
    color: '#7A6A55',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  cardPlaceholder: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    gap: 8,
    borderWidth: 1,
    borderColor: '#EDE8DF',
    opacity: 0.6,
  },
  placeholderLinha: {
    height: 10,
    backgroundColor: '#DDD6CC',
    borderRadius: 5,
    width: '85%',
  },
});
