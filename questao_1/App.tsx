import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar as RNStatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from './src/styles/global';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Gerenciador de Tarefas</Text>
        <Text style={styles.text}>Questão 1: SafeAreaView e Estilos Globais aplicados.</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: globalStyles.backgroundColor,
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: globalStyles.primaryColor,
    marginBottom: 10,
  },
  text: {
    fontSize: globalStyles.bodyFontSize,
    color: '#333',
  }
});
