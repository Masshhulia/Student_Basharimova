import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>5 книжных новинок октября</Text>
      </View>

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>
          «Кадиш.com» Натан Ингландер. {'\n'}
          Издательство «Книжники»
        </Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Ироничная новелла Натана Ингландера, две личные истории культовой Патти Смит, 
          репортаж британской журналистки о будущем человечества, дебютный роман Оушена 
          Вуонга и журналистское расследование о создании «Моссада». В нашей подборке 
          рассказываем о пяти захватывающих книжных новинках, которые достойны того, чтобы 
          появиться на ваших полках.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#E0E0E0', // Общий фон
  },

  titleContainer: {
    width: '90%',
    backgroundColor: 'white', 
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  subtitleContainer: {
    width: '90%',
    backgroundColor: '#D6D6D6', // Светло-серый фон
    padding: 12,
  },
  subtitle: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
  },

  descriptionContainer: {
    width: '90%',
    backgroundColor: '#757575', // Темно-серый фон
    padding: 16,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  description: {
    fontSize: 14,
    color: 'white',
    lineHeight: 20,
  },
});

export default App;
