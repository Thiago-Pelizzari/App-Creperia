// screens/HomeScreen.js — Tela principal: header + cardápio
// Exibe o Header fixo e a lista rolável de produtos usando FlatList

import React from 'react';
import { View, FlatList, Text, StyleSheet, StatusBar } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

// ── Dados do cardápio (10 itens obrigatórios) ──
// Imagens via placeholder; substitua por { uri: require('../assets/produto1.jpg') }
const CARDAPIO = [
  {
    id: '1',
    nome: 'Prato Feito Tradicional',
    descricao: 'Arroz, feijão, bife grelhado, farofa e salada',
    preco: 22.90,
    imagem: { uri: 'https://via.placeholder.com/220x160/C8A96E/1A1209?text=PF' },
  },
  {
    id: '2',
    nome: 'Frango Assado com Batatas',
    descricao: 'Frango assado ao alecrim com batatas rústicas e alho',
    preco: 28.50,
    imagem: { uri: 'https://via.placeholder.com/220x160/D4A060/1A1209?text=🍗' },
  },
  {
    id: '3',
    nome: 'Macarrão à Bolonhesa',
    descricao: 'Espaguete ao molho bolonhesa caseiro com parmesão',
    preco: 24.00,
    imagem: { uri: 'https://via.placeholder.com/220x160/B88A50/F5F0E8?text=🍝' },
  },
  {
    id: '4',
    nome: 'Salada Caesar Completa',
    descricao: 'Alface, frango, croutons, parmesão e molho caesar',
    preco: 19.90,
    imagem: { uri: 'https://via.placeholder.com/220x160/8FB060/1A1209?text=🥗' },
  },
  {
    id: '5',
    nome: 'Hambúrguer Artesanal',
    descricao: 'Pão brioche, carne 180g, queijo prato, cebola caramelada',
    preco: 32.00,
    imagem: { uri: 'https://via.placeholder.com/220x160/C07040/F5F0E8?text=🍔' },
  },
  {
    id: '6',
    nome: 'Sopa do Dia',
    descricao: 'Sopa cremosa com legumes da estação e torrada',
    preco: 16.50,
    imagem: { uri: 'https://via.placeholder.com/220x160/D4856A/F5F0E8?text=🍲' },
  },
  {
    id: '7',
    nome: 'Omelete de Queijo e Presunto',
    descricao: 'Omelete recheada com queijo mussarela e presunto fatiado',
    preco: 18.00,
    imagem: { uri: 'https://via.placeholder.com/220x160/E8C870/1A1209?text=🍳' },
  },
  {
    id: '8',
    nome: 'Filé de Peixe Grelhado',
    descricao: 'Filé de tilápia grelhado, limão siciliano e ervas finas',
    preco: 34.90,
    imagem: { uri: 'https://via.placeholder.com/220x160/70A8C8/1A1209?text=🐟' },
  },
  {
    id: '9',
    nome: 'Pizza Margherita (Individual)',
    descricao: 'Molho de tomate, mussarela e manjericão fresco',
    preco: 29.90,
    imagem: { uri: 'https://via.placeholder.com/220x160/E87060/F5F0E8?text=🍕' },
  },
  {
    id: '10',
    nome: 'Brownie com Sorvete',
    descricao: 'Brownie de chocolate quente com sorvete de creme e calda',
    preco: 14.90,
    imagem: { uri: 'https://via.placeholder.com/220x160/5A3020/F5F0E8?text=🍫' },
  },
];

export default function HomeScreen() {
  // Cabeçalho da lista: header fixo + título da seção de cardápio
  const ListHeader = () => (
    <>
      {/* StatusBar escura para combinar com o header */}
      <StatusBar barStyle="light-content" backgroundColor="#1A1209" />
      <Header />
      <View style={styles.secaoCardapio}>
        <Text style={styles.tituloCardapio}>Cardápio</Text>
        <Text style={styles.subtituloCardapio}>{CARDAPIO.length} opções disponíveis</Text>
      </View>
    </>
  );

  return (
    <FlatList
      data={CARDAPIO}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductCard produto={item} />}
      ListHeaderComponent={ListHeader}
      ListFooterComponent={<View style={{ height: 16 }} />}
      style={styles.lista}
      showsVerticalScrollIndicator={false}
      // Evita que o FlatList pule para cima ao receber novos dados
      removeClippedSubviews={false}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    flex: 1,
    backgroundColor: '#F5F0E8',
  },
  secaoCardapio: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
  },
  tituloCardapio: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1A1209',
    letterSpacing: 0.3,
  },
  subtituloCardapio: {
    fontSize: 12,
    color: '#7A6A55',
    marginTop: 2,
  },
});
