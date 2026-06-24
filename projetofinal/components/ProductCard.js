// components/ProductCard.js — Card reutilizável de produto do cardápio
// Exibe imagem, nome, descrição, preço e botão "Adicionar ao carrinho"

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProductCard({ produto, onAddToCart }) {
  // Controla feedback visual do botão ao pressionar
  const [pressionado, setPressionado] = useState(false);

  const handleAdicionar = () => {
    // Chama a função do carrinho passada pelo App
    if (onAddToCart) {
      onAddToCart(produto);
    }
    // Feedback visual temporário
    setPressionado(true);
    setTimeout(() => setPressionado(false), 800);
  };

  return (
    <View style={styles.card}>
      {/* Imagem do produto */}
      <Image source={produto.imagem} style={styles.imagem} resizeMode="cover" />

      {/* Informações do produto */}
      <View style={styles.info}>
        <Text style={styles.nome} numberOfLines={1}>{produto.nome}</Text>
        <Text style={styles.descricao} numberOfLines={2}>{produto.descricao}</Text>

        {/* Rodapé do card: preço + botão */}
        <View style={styles.rodape}>
          <Text style={styles.preco}>R$ {produto.preco.toFixed(2)}</Text>

          <TouchableOpacity
            style={[styles.btnAdicionar, pressionado && styles.btnAdicionarAtivo]}
            onPress={handleAdicionar}
            activeOpacity={0.85}
          >
            <Text style={styles.btnTexto}>
              {pressionado ? '✓ Adicionado' : '+ Carrinho'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    overflow: 'hidden',
    flexDirection: 'row',
    // Sombra do card
    shadowColor: '#1A1209',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#EDE8DF',
  },

  // ── Imagem ──
  imagem: {
    width: 110,
    height: 110,
  },

  // ── Informações ──
  info: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  nome: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1A1209',
    letterSpacing: 0.2,
  },
  descricao: {
    fontSize: 12,
    color: '#7A6A55',
    lineHeight: 16,
    marginTop: 3,
  },

  // ── Rodapé: preço + botão ──
  rodape: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  preco: {
    fontSize: 17,
    fontWeight: '800',
    color: '#C8A96E',
    letterSpacing: 0.3,
  },
  btnAdicionar: {
    backgroundColor: '#1A1209',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  btnAdicionarAtivo: {
    backgroundColor: '#22C55E',
  },
  btnTexto: {
    fontSize: 11,
    fontWeight: '700',
    color: '#F5F0E8',
    letterSpacing: 0.5,
  },
});
