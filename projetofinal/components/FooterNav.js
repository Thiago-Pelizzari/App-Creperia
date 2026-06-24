// Barra de navegação

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Itens do menu
const ITENS_NAV = [
  { id: 'home',    icone: '🏠', label: 'Início'   },
  { id: 'orders',  icone: '🛒', label: 'Carrinho' },
  { id: 'profile', icone: '👤', label: 'Perfil'   },
];

export default function FooterNav({ activeScreen, onNavigate, cartCount = 0 }) {
  return (
    <View style={styles.footer}>
      {ITENS_NAV.map((item) => {
        const ativo = activeScreen === item.id;
        const mostrarBadge = item.id === 'orders' && cartCount > 0;

        return (
          <TouchableOpacity
            key={item.id}
            style={styles.item}
            onPress={() => onNavigate(item.id)}
            activeOpacity={0.7}
          >
            {/* Indicador da tela ativa */}
            {ativo && <View style={styles.indicador} />}

            {/* Área do ícone */}
            <View style={styles.iconeContainer}>
              <Text style={[styles.icone, ativo && styles.iconeAtivo]}>
                {item.icone}
              </Text>

              {/* Contador do carrinho */}
              {mostrarBadge && (
                <View style={styles.badge}>
                  <Text style={styles.badgeTexto}>
                    {cartCount > 99 ? '99+' : cartCount}
                  </Text>
                </View>
              )}
            </View>

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
    paddingBottom: 24,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#3D2B12',
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
  indicador: {
    position: 'absolute',
    top: -10,
    width: 28,
    height: 3,
    backgroundColor: '#C8A96E',
    borderRadius: 2,
  },
  iconeContainer: {
    position: 'relative',
  },
  icone: {
    fontSize: 22,
    opacity: 0.45,
  },
  iconeAtivo: {
    opacity: 1,
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -12,
    backgroundColor: '#EF4444',
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
    borderWidth: 2,
    borderColor: '#1A1209',
  },
  badgeTexto: {
    fontSize: 10,
    fontWeight: '800',
    color: '#FFFFFF',
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
