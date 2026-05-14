import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Jogos() {
  const [favoritos, setFavoritos] = useState<number[]>([]);

  const jogos = [
  { id: 1, jogo: 'Brasil 🇧🇷 x Marrocos 🇲🇦', data: '13/06', hora: '19:00' },
  { id: 2, jogo: 'Brasil 🇧🇷 x Haiti 🇭🇹', data: '19/06', hora: '21:30' },
  { id: 3, jogo: 'Brasil 🇧🇷 x Escócia 🏴', data: '24/06', hora: '19:00' },
];

  function toggleFavorito(id: number) {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter(item => item !== id));
    } else {
      setFavoritos([...favoritos, id]);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>⚽ Jogos do Brasil</Text>

      {jogos.map(jogo => (
        <View key={jogo.id} style={styles.card}>
          
          <View>
            <Text style={styles.jogo}>{jogo.jogo}</Text>
            <Text style={styles.data}>📅 {jogo.data}</Text>
          </View>

          <TouchableOpacity onPress={() => toggleFavorito(jogo.id)}>
            <Text style={styles.estrela}>
              {favoritos.includes(jogo.id) ? '⭐' : '☆'}
            </Text>
          </TouchableOpacity>

        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 15,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 12,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
  },
  jogo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  data: {
    color: '#777',
    marginTop: 5,
  },
  estrela: {
    fontSize: 22,
  },
});