import AsyncStorage from '@react-native-async-storage/async-storage';

const reset_access_token = async () => {
  try {
    await AsyncStorage.removeItem('access_token'); // Удаляем токен
    console.log('Токен удалён, выполняется выход');
  } catch (error) {
    console.error('Ошибка при выходе:', error);
  }
};

export default reset_access_token;
