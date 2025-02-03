import React from 'react';
import { View, Text, Image, Button, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={true}>
        
        {/* Заголовок */}
        <Text style={styles.title}>Добро пожаловать в React Native!</Text>

        {/* Первый блок */}
        <View style={styles.section}>
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }} style={styles.image} />
          <Text style={styles.description}>
            React Native позволяет разрабатывать мобильные приложения на JavaScript.
          </Text>
          <Button title="Узнать больше" onPress={() => alert('Открывается страница...')} />
        </View>

        {/* Второй блок */}
        <View style={styles.section}>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHnHdILxYAEqE4z9ti_VSudmhAQEph9cDQg&s' }} style={styles.image} />
          <Text style={styles.description}>
            Вы можете использовать компоненты, как в обычном React, но с нативным рендерингом.
          </Text>
          <Button title="Начать" onPress={() => alert('Запуск...')} />
        </View>

        {/* Третий блок */}
        <View style={styles.section}>
          <Image source={{ uri: 'https://rocketware.ru/wp-content/uploads/2023/07/compress_react-nat.webp' }} style={styles.image} />
          <Text style={styles.description}>
            В этом примере используется ScrollView для прокрутки контента.
          </Text>
        </View>

        {/* Четвертый блок */}
        <View style={styles.section}>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-TNZyd4IYKP6UfJq38jhx44ywo4gWB6v8Q&s' }} style={styles.image} />
          <Text style={styles.description}>
            Прокручивайте вниз, чтобы увидеть больше информации.
          </Text>
          <Button title="Перейти дальше" onPress={() => alert('Следующий шаг...')} />
        </View>

        {/* Пятый блок */}
        <View style={styles.section}>
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/IOS_logo.svg/512px-IOS_logo.svg.png' }} style={styles.image} />
          <Text style={styles.description}>
            Последний блок! Поздравляем, вы успешно использовали ScrollView.
          </Text>
          <Button title="Готово!" onPress={() => alert('Спасибо!')} />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  section: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Тень для Android
  },
  image: {
    width: 300,
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default App;
