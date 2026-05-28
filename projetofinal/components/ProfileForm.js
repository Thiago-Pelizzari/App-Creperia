// components/ProfileForm.js — Formulário de dados do usuário
// Campos: nome, telefone, endereço completo (layout apenas)

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function ProfileForm() {
  // Estado local dos campos (sem persistência — apenas layout)
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
  });

  const atualizar = (campo, valor) => setForm((prev) => ({ ...prev, [campo]: valor }));

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {/* Cabeçalho da tela */}
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Meu Perfil</Text>
        <Text style={styles.subtitulo}>Preencha seus dados para entregas</Text>
      </View>

      {/* ── Seção: Dados pessoais ── */}
      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>Dados Pessoais</Text>

        <Campo
          label="Nome completo"
          placeholder="Seu nome completo"
          valor={form.nome}
          onChange={(v) => atualizar('nome', v)}
          autoCapitalize="words"
        />
        <Campo
          label="Telefone"
          placeholder="(00) 00000-0000"
          valor={form.telefone}
          onChange={(v) => atualizar('telefone', v)}
          keyboardType="phone-pad"
        />
      </View>

      {/* ── Seção: Endereço ── */}
      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>Endereço de Entrega</Text>

        <Campo
          label="Logradouro"
          placeholder="Rua, Avenida, Travessa..."
          valor={form.logradouro}
          onChange={(v) => atualizar('logradouro', v)}
          autoCapitalize="words"
        />

        {/* Número e Complemento na mesma linha */}
        <View style={styles.linhaDouble}>
          <View style={{ flex: 0.4 }}>
            <Campo
              label="Número"
              placeholder="Nº"
              valor={form.numero}
              onChange={(v) => atualizar('numero', v)}
              keyboardType="numeric"
            />
          </View>
          <View style={{ flex: 0.55 }}>
            <Campo
              label="Complemento"
              placeholder="Apto, Bloco..."
              valor={form.complemento}
              onChange={(v) => atualizar('complemento', v)}
            />
          </View>
        </View>

        <Campo
          label="Bairro"
          placeholder="Nome do bairro"
          valor={form.bairro}
          onChange={(v) => atualizar('bairro', v)}
          autoCapitalize="words"
        />
      </View>

      {/* Botão salvar — layout apenas, sem persistência */}
      <TouchableOpacity style={styles.btnSalvar} activeOpacity={0.8}>
        <Text style={styles.btnSalvarTexto}>Salvar dados</Text>
      </TouchableOpacity>

      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

// ── Componente auxiliar interno: campo de formulário ──
function Campo({ label, placeholder, valor, onChange, keyboardType, autoCapitalize }) {
  return (
    <View style={campoStyles.container}>
      <Text style={campoStyles.label}>{label}</Text>
      <TextInput
        style={campoStyles.input}
        placeholder={placeholder}
        placeholderTextColor="#B0A090"
        value={valor}
        onChangeText={onChange}
        keyboardType={keyboardType || 'default'}
        autoCapitalize={autoCapitalize || 'none'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0E8',
  },
  conteudo: {
    padding: 20,
  },
  cabecalho: {
    marginBottom: 24,
  },
  titulo: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1A1209',
    letterSpacing: 0.3,
  },
  subtitulo: {
    fontSize: 13,
    color: '#7A6A55',
    marginTop: 4,
  },
  secao: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    gap: 4,
    shadowColor: '#1A1209',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#EDE8DF',
  },
  tituloSecao: {
    fontSize: 12,
    fontWeight: '700',
    color: '#C8A96E',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  linhaDouble: {
    flexDirection: 'row',
    gap: 12,
  },
  btnSalvar: {
    backgroundColor: '#1A1209',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  btnSalvarTexto: {
    fontSize: 15,
    fontWeight: '700',
    color: '#C8A96E',
    letterSpacing: 0.5,
  },
});

const campoStyles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
    color: '#7A6A55',
    marginBottom: 5,
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: '#F5F0E8',
    borderWidth: 1,
    borderColor: '#DDD6CC',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 11,
    fontSize: 14,
    color: '#1A1209',
  },
});
