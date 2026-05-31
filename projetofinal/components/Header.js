// components/Header.js — Cabeçalho fixo do app
// Exibe logo, nome, endereço e telefone do estabelecimento
// Contém também o painel expansível com horários e o indicador Aberto/Fechado

import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  StyleSheet,
  ScrollView,
} from 'react-native';

// Tabela de horários de funcionamento por dia da semana
const HORARIOS = [
  { dia: 'Domingo', abertura: '08:00', fechamento: '14:00' },
  { dia: 'Segunda', abertura: '08:00', fechamento: '18:00' },
  { dia: 'Terça', abertura: '08:00', fechamento: '18:00' },
  { dia: 'Quarta', abertura: '08:00', fechamento: '18:00' },
  { dia: 'Quinta', abertura: '08:00', fechamento: '18:00' },
  { dia: 'Sexta', abertura: '08:00', fechamento: '20:00' },
  { dia: 'Sábado', abertura: '08:00', fechamento: '20:00' },
];

// Verifica se o estabelecimento está aberto no momento atual
function verificarAberto() {
  const agora = new Date();
  const diaSemana = agora.getDay(); // 0 = Domingo, 1 = Segunda...
  const horario = HORARIOS[diaSemana];

  const [hAb, mAb] = horario.abertura.split(':').map(Number);
  const [hFe, mFe] = horario.fechamento.split(':').map(Number);

  const minutosAgora = agora.getHours() * 60 + agora.getMinutes();
  const minutosAbertura = hAb * 60 + mAb;
  const minutosFechamento = hFe * 60 + mFe;

  return minutosAgora >= minutosAbertura && minutosAgora < minutosFechamento;
}

export default function Header() {
  const [painelAberto, setPainelAberto] = useState(false);
  const estaAberto = verificarAberto();

  return (
    <View style={styles.wrapper}>
      {/* ── Topo: logo + info do estabelecimento ── */}
      <View style={styles.headerMain}>
        <View style={styles.logoContainer}>
          {/* Logo do estabelecimento — substitua pelo arquivo em assets/logo.png */}
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.nomeEstabelecimento}>Creperia do BIG</Text>
          <Text style={styles.infoTexto}>📍 Rua das Flores, 420 — Centro</Text>
          <Text style={styles.infoTexto}>📞 (14) 98129-1538</Text>
        </View>

        {/* Indicador Aberto / Fechado */}
        <View style={[styles.badge, estaAberto ? styles.badgeAberto : styles.badgeFechado]}>
          <View style={[styles.badgeDot, { backgroundColor: estaAberto ? '#22C55E' : '#EF4444' }]} />
          <Text style={[styles.badgeTexto, { color: estaAberto ? '#15803D' : '#B91C1C' }]}>
            {estaAberto ? 'Aberto' : 'Fechado'}
          </Text>
        </View>
      </View>

      {/* ── Botão para abrir/fechar painel de horários ── */}
      <TouchableOpacity
        style={styles.btnHorarios}
        onPress={() => setPainelAberto(!painelAberto)}
        activeOpacity={0.75}
      >
        <Text style={styles.btnHorariosTexto}>
          {painelAberto ? '▲ Ocultar horários' : '▼ Ver horários de funcionamento'}
        </Text>
      </TouchableOpacity>

      {/* ── Painel expansível com horários (acordeão) ── */}
      {painelAberto && (
        <View style={styles.painelHorarios}>
          {HORARIOS.map((item, index) => {
            const diaAtual = new Date().getDay();
            const isHoje = index === diaAtual;
            return (
              <View
                key={item.dia}
                style={[styles.linhaHorario, isHoje && styles.linhaHoje]}
              >
                <Text style={[styles.textodia, isHoje && styles.textoDiaHoje]}>
                  {isHoje ? '→ ' : ''}{item.dia}
                </Text>
                <Text style={[styles.textoHorario, isHoje && styles.textoDiaHoje]}>
                  {item.abertura} — {item.fechamento}
                </Text>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#1A1209',
    paddingTop: 44,
    // Sombra do header
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    zIndex: 10,
  },

  // ── Linha principal do header ──
  headerMain: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  logoContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#C8A96E',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    flex: 1,
    gap: 2,
  },
  nomeEstabelecimento: {
    fontSize: 18,
    fontWeight: '800',
    color: '#F5F0E8',
    letterSpacing: 0.3,
  },
  infoTexto: {
    fontSize: 11,
    color: '#A89070',
    letterSpacing: 0.2,
  },

  // ── Badge Aberto/Fechado ──
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  badgeAberto: {
    backgroundColor: '#DCFCE7',
  },
  badgeFechado: {
    backgroundColor: '#FEE2E2',
  },
  badgeDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },
  badgeTexto: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.3,
  },

  // ── Botão Ver Horários ──
  btnHorarios: {
    backgroundColor: '#2C1E0A',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#3D2B12',
  },
  btnHorariosTexto: {
    fontSize: 12,
    color: '#C8A96E',
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  // ── Painel de horários (acordeão) ──
  painelHorarios: {
    backgroundColor: '#231508',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#3D2B12',
    gap: 4,
  },
  linhaHorario: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  linhaHoje: {
    backgroundColor: '#3D2B12',
  },
  textodia: {
    fontSize: 13,
    color: '#A89070',
  },
  textoHorario: {
    fontSize: 13,
    color: '#A89070',
    fontWeight: '500',
  },
  textoDiaHoje: {
    color: '#C8A96E',
    fontWeight: '700',
  },
});
