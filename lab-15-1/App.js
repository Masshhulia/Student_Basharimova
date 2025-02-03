import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
  const [page, setPage] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      {page === 1 ? <ScreenOne onNext={() => setPage(2)} /> : <ScreenTwo onPrev={() => setPage(1)} />}
    </SafeAreaView>
  );
};

const ScreenOne = ({ onNext }) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Get the best prices</Text>
      <Image source={{ uri: 'https://s1.iconbird.com/ico/0512/OldschoolbyBabasse/w256h2561337442098avion.png' }} style={styles.image} />
      <Text style={styles.description}>
        Add the destinations you like to your Favorites. Yandex.Flights will notify you when prices change.
      </Text>
      <TouchableOpacity style={styles.button} onPress={onNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const ScreenTwo = ({ onPrev }) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Stay informed</Text>
      <Image source={{ uri: 'http://s1.iconbird.com/ico/0512/summerholidayicons1/file1336928186.png' }} style={styles.image} />
      <Text style={styles.description}>
        Yandex.Flights will inform you via push notifications if your flight is delayed or cancelled.
      </Text>
      <TouchableOpacity style={styles.button} onPress={onPrev}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    width: '90%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F5DF4F',
    paddingVertical: 10,
    paddingHorizontal: 160,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
});

export default App;
