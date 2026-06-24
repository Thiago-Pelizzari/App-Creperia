// App.js — Ponto de entrada principal do aplicativo
// Configura a navegação entre as telas: Home, Pedidos e Perfil
// Gerencia o estado global do carrinho de compras

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import OrdersScreen from './screens/OrdersScreen';
import ProfileScreen from './screens/ProfileScreen';
import FooterNav from './components/FooterNav';

export default function App() {
  // Controla qual tela está ativa no momento
  const [activeScreen, setActiveScreen] = useState('home');

  // Estado global do carrinho: array de { ...produto, quantidade }
  const [carrinho, setCarrinho] = useState([]);

  // Adiciona um produto ao carrinho (incrementa quantidade se já existir)
  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prev) => {
      const index = prev.findIndex((item) => item.id === produto.id);
      if (index >= 0) {
        // Produto já existe — incrementa quantidade
        const atualizado = [...prev];
        atualizado[index] = {
          ...atualizado[index],
          quantidade: atualizado[index].quantidade + 1,
        };
        return atualizado;
      }
      // Produto novo — adiciona com quantidade 1
      return [...prev, { ...produto, quantidade: 1 }];
    });
  };

  // Remove uma unidade do produto (remove do carrinho se quantidade chegar a 0)
  const removerDoCarrinho = (produtoId) => {
    setCarrinho((prev) => {
      const index = prev.findIndex((item) => item.id === produtoId);
      if (index < 0) return prev;

      const item = prev[index];
      if (item.quantidade <= 1) {
        // Remove completamente do carrinho
        return prev.filter((_, i) => i !== index);
      }
      // Decrementa quantidade
      const atualizado = [...prev];
      atualizado[index] = {
        ...atualizado[index],
        quantidade: atualizado[index].quantidade - 1,
      };
      return atualizado;
    });
  };

  // Remove o produto inteiro do carrinho independente da quantidade
  const removerItemCompleto = (produtoId) => {
    setCarrinho((prev) => prev.filter((item) => item.id !== produtoId));
  };

  // Renderiza a tela correspondente à aba ativa
  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen onAddToCart={adicionarAoCarrinho} />;
      case 'orders':
        return (
          <OrdersScreen
            carrinho={carrinho}
            onAdd={adicionarAoCarrinho}
            onRemove={removerDoCarrinho}
            onRemoveItem={removerItemCompleto}
          />
        );
      case 'profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen onAddToCart={adicionarAoCarrinho} />;
    }
  };

  // Calcula total de itens no carrinho para o badge
  const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

  return (
    <View style={styles.container}>
      {/* Área principal de conteúdo */}
      <View style={styles.content}>
        {renderScreen()}
      </View>

      {/* Footer fixo na parte inferior */}
      <FooterNav
        activeScreen={activeScreen}
        onNavigate={setActiveScreen}
        cartCount={totalItens}
      />
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
