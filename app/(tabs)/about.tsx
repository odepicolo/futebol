import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sobre a Tela</Text>
      <Link href="/" style={styles.button}>
      vá para a tela inicial

      </Link>
      </View>
  );
}
      
      
      const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: "center",
        alignItems: "center",
      },
      text:{
        color: '#2e9637',
      },
      button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
      },
    });