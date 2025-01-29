import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Журнал Bright</Text>
      
      <View style={styles.card}>
        <Text style={styles.link}>Новости</Text>
        <Image
          source={{ uri: "https://brightmagazine.ru/wp-content/uploads/2025/01/eugenio-mazzone-6ywyo2qtaZ8-unsplash-600x400.jpg" }}
          style={styles.image}
        />
        <Text style={styles.title}>Книжные ярмарки мира: куда точно стоит ехать?</Text>
        <Text style={styles.text}>
          Если вы обожаете читать, то в вашем списке желаний точно есть пункт «поехать на крупный книжный фестиваль». Заодно и увлекательное путешествие устроить. Ловите подборку самых известных книжных ярмарок мира. 
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    paddingTop: 50,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  link: {
    color: "#007bff",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  text: {
    fontSize: 14,
    color: "#333",
  },
});

export default App;
