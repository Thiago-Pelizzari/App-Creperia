// App.js - Arquivo principal do aplicativo

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import OrdersScreen from './screens/OrdersScreen';
import ProfileScreen from './screens/ProfileScreen';
import FooterNav from './components/FooterNav';

export default function App() {
  // Tela ativa
  const [activeScreen, setActiveScreen] = useState('home');

  // Carrinho de compras
  const [carrinho, setCarrinho] = useState([]);

  // Adicionar item ao carrinho
  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prev) => {
      const index = prev.findIndex((item) => item.id === produto.id);
      if (index >= 0) {
        // Se já existe, aumenta a quantidade
        const atualizado = [...prev];
        atualizado[index] = {
          ...atualizado[index],
          quantidade: atualizado[index].quantidade + 1,
        };
        return atualizado;
      }
      // Se é novo, adiciona com quantidade 1
      return [...prev, { ...produto, quantidade: 1 }];
    });
  };

  // Remover uma unidade do carrinho
  const removerDoCarrinho = (produtoId) => {
    setCarrinho((prev) => {
      const index = prev.findIndex((item) => item.id === produtoId);
      if (index < 0) return prev;

      const item = prev[index];
      if (item.quantidade <= 1) {
        // Se a quantidade for 1, remove o item
        return prev.filter((_, i) => i !== index);
      }
      // Senão, diminui a quantidade
      const atualizado = [...prev];
      atualizado[index] = {
        ...atualizado[index],
        quantidade: atualizado[index].quantidade - 1,
      };
      return atualizado;
    });
  };

  // Excluir item do carrinho
  const removerItemCompleto = (produtoId) => {
    setCarrinho((prev) => prev.filter((item) => item.id !== produtoId));
  };

  // Mostra a tela selecionada
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

  // Total de itens no carrinho
  const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

  return (
    <View style={styles.container}>
      {/* Conteúdo da tela */}
      <View style={styles.content}>
        {renderScreen()}
      </View>

      {/* Menu inferior */}
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
