// Tela do Carrinho

import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function OrdersScreen({ carrinho, onAdd, onRemove, onRemoveItem }) {
  // Calcula o valor total
  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );
  const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

  // Desenha o item no carrinho
  const renderItem = ({ item }) => (
    <View style={styles.cardItem}>
      {/* Imagem */}
      <Image source={item.imagem} style={styles.imagemItem} resizeMode="cover" />

      {/* Detalhes do item */}
      <View style={styles.infoItem}>
        <View style={styles.infoTopo}>
          <Text style={styles.nomeItem} numberOfLines={1}>{item.nome}</Text>
          {/* Excluir item */}
          <TouchableOpacity
            onPress={() => onRemoveItem(item.id)}
            style={styles.btnRemoverItem}
            activeOpacity={0.7}
          >
            <Text style={styles.btnRemoverTexto}>✕</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.precoUnitario}>
          R$ {item.preco.toFixed(2)} cada
        </Text>

        {/* Botões de quantidade */}
        <View style={styles.controleQuantidade}>
          <View style={styles.botoesQtd}>
            <TouchableOpacity
              style={styles.btnQtd}
              onPress={() => onRemove(item.id)}
              activeOpacity={0.7}
            >
              <Text style={styles.btnQtdTexto}>−</Text>
            </TouchableOpacity>

            <View style={styles.qtdContainer}>
              <Text style={styles.qtdTexto}>{item.quantidade}</Text>
            </View>

            <TouchableOpacity
              style={styles.btnQtd}
              onPress={() => onAdd(item)}
              activeOpacity={0.7}
            >
              <Text style={styles.btnQtdTexto}>+</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.subtotalItem}>
            R$ {(item.preco * item.quantidade).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );

  // Tela se o carrinho estiver vazio
  if (carrinho.length === 0) {
    return (
      <View style={styles.containerVazio}>
        <StatusBar barStyle="dark-content" backgroundColor="#F5F0E8" />
        <Text style={styles.iconeVazio}>🛒</Text>
        <Text style={styles.tituloVazio}>Seu carrinho está vazio</Text>
        <Text style={styles.subtituloVazio}>
          Adicione itens do cardápio para{'\n'}
          começar seu pedido!
        </Text>
      </View>
    );
  }

  // Tela do carrinho com produtos
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F0E8" />

      {/* Cabeçalho */}
      <View style={styles.headerCarrinho}>
        <Text style={styles.tituloCarrinho}>🛒 Meu Carrinho</Text>
        <Text style={styles.subtituloCarrinho}>
          {totalItens} {totalItens === 1 ? 'item' : 'itens'}
        </Text>
      </View>

      {/* Lista de produtos */}
      <FlatList
        data={carrinho}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listaContent}
      />

      {/* Rodapé com o total */}
      <View style={styles.rodapeTotal}>
        <View style={styles.linhaTotal}>
          <Text style={styles.labelTotal}>Total</Text>
          <Text style={styles.valorTotal}>R$ {total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.btnFinalizar} activeOpacity={0.85}>
          <Text style={styles.btnFinalizarTexto}>Finalizar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0E8',
  },
  containerVazio: {
    flex: 1,
    backgroundColor: '#F5F0E8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    gap: 8,
  },
  iconeVazio: {
    fontSize: 56,
    marginBottom: 8,
  },
  tituloVazio: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1A1209',
    letterSpacing: 0.3,
  },
  subtituloVazio: {
    fontSize: 14,
    color: '#7A6A55',
    textAlign: 'center',
    lineHeight: 22,
  },
  headerCarrinho: {
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 16,
    backgroundColor: '#1A1209',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  tituloCarrinho: {
    fontSize: 24,
    fontWeight: '800',
    color: '#F5F0E8',
    letterSpacing: 0.3,
  },
  subtituloCarrinho: {
    fontSize: 13,
    color: '#A89070',
    marginTop: 4,
  },
  listaContent: {
    paddingTop: 16,
    paddingBottom: 8,
  },
  cardItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    overflow: 'hidden',
    flexDirection: 'row',
    shadowColor: '#1A1209',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#EDE8DF',
  },
  imagemItem: {
    width: 100,
    height: 110,
  },
  infoItem: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  infoTopo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  nomeItem: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1A1209',
    letterSpacing: 0.2,
    flex: 1,
    marginRight: 8,
  },
  btnRemoverItem: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FEE2E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnRemoverTexto: {
    fontSize: 12,
    fontWeight: '700',
    color: '#EF4444',
  },
  precoUnitario: {
    fontSize: 12,
    color: '#7A6A55',
    marginTop: 2,
  },
  controleQuantidade: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  botoesQtd: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 0,
  },
  btnQtd: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#1A1209',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnQtdTexto: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F5F0E8',
  },
  qtdContainer: {
    width: 36,
    alignItems: 'center',
  },
  qtdTexto: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1A1209',
  },
  subtotalItem: {
    fontSize: 17,
    fontWeight: '800',
    color: '#C8A96E',
    letterSpacing: 0.3,
  },
  rodapeTotal: {
    backgroundColor: '#1A1209',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  linhaTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  labelTotal: {
    fontSize: 18,
    fontWeight: '600',
    color: '#A89070',
    letterSpacing: 0.3,
  },
  valorTotal: {
    fontSize: 26,
    fontWeight: '800',
    color: '#C8A96E',
    letterSpacing: 0.5,
  },
  btnFinalizar: {
    backgroundColor: '#C8A96E',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  btnFinalizarTexto: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1A1209',
    letterSpacing: 0.5,
  },
});
