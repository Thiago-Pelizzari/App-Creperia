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
    nome: 'Crepe Tradicional',
    descricao: 'Massa fina e macia recheada com presunto e queijo.',
    preco: 14.90,
    imagem: { uri: 'https://via.placeholder.com/220x160/C8A96E/1A1209?text=PF' },
  },
  {
    id: '2',
    nome: 'Crepe de Frango com Catupiry',
    descricao: 'Crepe recheado com frango desfiado e catupiry',
    preco: 16.50,
    imagem: { uri: 'https://via.placeholder.com/220x160/D4A060/1A1209?text=🍗' },
  },
  {
    id: '3',
    nome: 'Crepe de Carne',
    descricao: 'Crepe recheado com carne desfiada e molho de tomate.',
    preco: 18.50,
    imagem: { uri: 'https://via.placeholder.com/220x160/B88A50/F5F0E8?text=🍝' },
  },
  {
    id: '4',
    nome: 'Crepe de Banana com Canela',
    descricao: 'Deliciosa combinação de banana fresca e canela polvilhada por cima.',
    preco: 15.90,
    imagem: { uri: 'https://via.placeholder.com/220x160/8FB060/1A1209?text=🥗' },
  },
  {
    id: '5',
    nome: 'Crepe de Chocolate com Morango',
    descricao: 'Massa fina e macia recheada com chocolate e morango fresco.',
    preco: 17.50,
    imagem: { uri: 'https://via.placeholder.com/220x160/C07040/F5F0E8?text=🍔' },
  },
  {
    id: '6',
    nome: 'Crepe Doce de Leite com Banana',
    descricao: 'Doce de leite cremoso com banana fresca.',
    preco: 17.00,
    imagem: { uri: 'https://via.placeholder.com/220x160/D4856A/F5F0E8?text=🍲' },
  },
  {
    id: '7',
    nome: 'Crepe Doce de Sonho de Valsa',
    descricao: 'Massa fina e macia recheada com chocolate e bombom.',
    preco: 17.00,
    imagem: { uri: 'https://via.placeholder.com/220x160/E8C870/1A1209?text=🍳' },
  },
  {
    id: '8',
    nome: 'Torta Alemã',
    descricao: 'Torta alemã gelada, com creme de manteiga e biscoito champanhe',
    preco: 29.90,
    imagem: { uri: 'https://via.placeholder.com/220x160/70A8C8/1A1209?text=' },
  },
  {
    id: '9',
    nome: 'Torta Holandesa',
    descricao: 'Torta holandesa gelada, com creme de manteiga e biscoito champanhe',
    preco: 29.90,
    imagem: { uri: 'https://via.placeholder.com/220x160/E87060/F5F0E8?text=' },
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
