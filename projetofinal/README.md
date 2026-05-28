# projetofinal — Sistema de Pedidos

## Aluno
> Preencha aqui seu nome completo

## Descrição
Aplicativo de pedidos para o estabelecimento **Cantina do Sabor**, desenvolvido em React Native com Expo.

## Como testar
1. Acesse [snack.expo.dev](https://snack.expo.dev)
2. Crie um novo projeto com o nome `projetofinal`
3. Faça upload de todos os arquivos mantendo a estrutura de pastas
4. Execute no simulador ou leia o QR Code no app Expo Go

## Estrutura de arquivos
```
projetofinal/
├── App.js                    ← Entrada principal + navegação por abas
├── package.json
├── README.md
├── assets/
│   ├── logo.png              ← Logo do estabelecimento (substituir)
│   ├── produto1.jpg          ← Imagens dos produtos (substituir)
│   └── ...produto10.jpg
├── components/
│   ├── Header.js             ← Header fixo: logo, info, horários, status
│   ├── ProductCard.js        ← Card reutilizável de produto
│   ├── FooterNav.js          ← Barra de navegação fixa inferior
│   └── ProfileForm.js        ← Formulário de dados do usuário
└── screens/
    ├── HomeScreen.js         ← Tela principal com cardápio (FlatList)
    ├── OrdersScreen.js       ← Tela de pedidos (placeholder)
    └── ProfileScreen.js      ← Tela de perfil
```

## Substituindo imagens
Para usar imagens locais, substitua as URLs nos arquivos de dados:
```js
// Em screens/HomeScreen.js, mude de:
imagem: { uri: 'https://...' }
// Para:
imagem: require('../assets/produto1.jpg')
```

## Requisitos atendidos
- [x] Header fixo com logo, nome, endereço e telefone
- [x] Horários de funcionamento em painel expansível (acordeão)
- [x] Indicador Aberto/Fechado baseado no dia e horário atual
- [x] Cardápio com 10 itens usando FlatList e ProductCard reutilizável
- [x] Footer fixo com 3 abas: Home, Pedidos, Perfil
- [x] Formulário de perfil com todos os campos solicitados
