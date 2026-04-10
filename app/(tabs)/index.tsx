import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pagina Inicial</Text>
      <Link href="/about" style={styles.button}>
      vá para a tela sobre

      </Link>
      </View>
  );
}
      
      
      const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#d4d7da',
        justifyContent: "center",
        alignItems: "center",
      },
      text:{
        color: '#2e9637',
      },
      button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: 'fff'
      },

    });
    
    
