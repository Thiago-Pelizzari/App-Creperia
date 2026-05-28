// components/FooterNav.js — Barra de navegação fixa na parte inferior
// Contém três abas: Home, Pedidos e Perfil

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Definição dos itens do footer
const ITENS_NAV = [
  { id: 'home',    icone: '🏠', label: 'Início'   },
  { id: 'orders',  icone: '📋', label: 'Pedidos'  },
  { id: 'profile', icone: '👤', label: 'Perfil'   },
];

export default function FooterNav({ activeScreen, onNavigate }) {
  return (
    <View style={styles.footer}>
      {ITENS_NAV.map((item) => {
        const ativo = activeScreen === item.id;
        return (
          <TouchableOpacity
            key={item.id}
            style={styles.item}
            onPress={() => onNavigate(item.id)}
            activeOpacity={0.7}
          >
            {/* Indicador de aba ativa */}
            {ativo && <View style={styles.indicador} />}

            <Text style={[styles.icone, ativo && styles.iconeAtivo]}>
              {item.icone}
            </Text>
            <Text style={[styles.label, ativo && styles.labelAtivo]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    backgroundColor: '#1A1209',
    paddingBottom: 24, // espaço para home indicator (iOS)
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#3D2B12',
    // Sombra para destacar o footer
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    paddingTop: 4,
  },

  // Linha dourada na aba ativa
  indicador: {
    position: 'absolute',
    top: -10,
    width: 28,
    height: 3,
    backgroundColor: '#C8A96E',
    borderRadius: 2,
  },

  icone: {
    fontSize: 22,
    opacity: 0.45,
  },
  iconeAtivo: {
    opacity: 1,
  },
  label: {
    fontSize: 10,
    color: '#A89070',
    marginTop: 3,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  labelAtivo: {
    color: '#C8A96E',
    fontWeight: '700',
  },
});
