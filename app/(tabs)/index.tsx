import { View, Text, StyleSheet } from 'react-native';


export default function Grupo() {
  const grupo = [
    { nome: 'Brasil', flag: '🇧🇷' },
    { nome: 'Marrocos', flag: '🇲🇦' },
    { nome: 'Haiti', flag: '🇭🇹' },
    { nome: 'Escócia', flag: '🏴' },
  ];


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🌍 Grupo E</Text>


      {grupo.map((time, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.texto}>
            {time.flag} {time.nome}
          </Text>
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
    borderRadius: 15,
    marginBottom: 10,
    elevation: 3,
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
