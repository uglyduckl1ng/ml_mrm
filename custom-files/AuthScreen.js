import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { WebView } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as GlobalVariableContext from '../config/GlobalVariableContext';

// Функция декодирования JWT через Base64
const decodeJWT = token => {
  try {
    const base64Url = token.split('.')[1]; // Берем Payload (вторую часть токена)
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Приводим к стандартному Base64
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );

    return JSON.parse(jsonPayload); // Преобразуем в объект
  } catch (error) {
    console.error('Ошибка декодирования токена:', error);
    return null;
  }
};

// Функции для работы с AsyncStorage
const saveToken = async token => {
  try {
    await AsyncStorage.setItem('access_token', token);
  } catch (error) {
    console.error('Ошибка сохранения токена:', error);
  }
};

const getToken = async () => {
  try {
    return await AsyncStorage.getItem('access_token');
  } catch (error) {
    console.error('Ошибка получения токена:', error);
    return null;
  }
};

const deleteToken = async () => {
  try {
    await AsyncStorage.removeItem('access_token');
  } catch (error) {
    console.error('Ошибка удаления токена:', error);
  }
};

export const AuthScreen = () => {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get('window').height;
  const [visible, setVisible] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [authCode, setAuthCode] = useState(null);
  const [isExchanging, setIsExchanging] = useState(false);
  const webViewRef = useRef(null);
  const translateY = useRef(new Animated.Value(screenHeight)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const setGlobalVariable = GlobalVariableContext.useSetValue();

  const authUrl =
    'https://keycloak.mlkitchen.ru/auth/realms/MnogoLososya/protocol/openid-connect/auth?client_id=ml-admin&redirect_uri=https%3A%2F%2Fadmin.mlkitchen.ru%2Fauth0%2Fredirect&state=28b95bf8-20dc-4fef-a1c6-b42b6f4645c9&response_mode=fragment&response_type=code&scope=openid&nonce=c343b4c4-f022-4267-b951-eb3c5bc57ef3';
  const tokenUrl =
    'https://keycloak.mlkitchen.ru/auth/realms/MnogoLososya/protocol/openid-connect/token';

  const openDrawer = () => {
    deleteToken();
    setAuthCode(null);
    setIsExchanging(false);
    setVisible(true);
    setAuthChecked(false);
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const closeDrawer = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: screenHeight,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start(() => setVisible(false));
  };

  const extractAuthCode = url => {
    const match = url.match(/code=([^&]+)/);
    return match ? match[1] : null;
  };

  const exchangeCodeForToken = async code => {
    try {
      console.log('Отправка запроса на токен:', tokenUrl);
      const requestBody = new URLSearchParams();
      requestBody.append('grant_type', 'authorization_code');
      requestBody.append('client_id', 'ml-admin');
      requestBody.append('client_secret', 'YOUR_CLIENT_SECRET');
      requestBody.append(
        'redirect_uri',
        'https://admin.mlkitchen.ru/auth0/redirect'
      );
      requestBody.append('code', code);

      const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: requestBody.toString(),
      });

      console.log(`Response Status: ${response.status}`);
      console.log(`Response URL: ${response.url}`);
      const responseBody = await response.text();
      console.log(`Response Body: ${responseBody}`);

      if (response.status === 200) {
        const accessToken = JSON.parse(responseBody).access_token;
        await saveToken(accessToken); // Сохранение в AsyncStorage

        // ✅ Декодирование access_token через Base64
        const decodedToken = decodeJWT(accessToken);
        if (!decodedToken) {
          console.error('Ошибка: Невозможно декодировать токен');
          return;
        }

        const firstName = decodedToken.given_name || 'Неизвестно';
        const lastName = decodedToken.family_name || 'Неизвестно';
        const email = decodedToken.email || 'Неизвестно';

        // ✅ Сохранение в глобальные переменные
        setGlobalVariable({
          key: 'First_last_name_employee',
          value: `${firstName} ${lastName}`,
        });
        setGlobalVariable({ key: 'email_employee', value: email });

        setAuthChecked(true);
        closeDrawer();
        navigation.navigate('BottomTabNavigator', {
          screen: 'ChecklistPageScreen',
          token: accessToken,
        });
      } else {
        throw new Error('Invalid grant');
      }
    } catch (error) {
      console.error('Ошибка обмена кода на токен:', error);
      setAuthCode(null);
    } finally {
      setIsExchanging(false);
    }
  };

  useEffect(() => {
    if (authCode && !isExchanging) {
      setIsExchanging(true);
      exchangeCodeForToken(authCode);
    }
  }, [authCode]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer} style={styles.loginButton}>
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
      {visible && (
        <TouchableWithoutFeedback onPress={closeDrawer}>
          <Animated.View style={[styles.overlay, { opacity }]} />
        </TouchableWithoutFeedback>
      )}
      {visible && (
        <Animated.View style={[styles.drawer, { transform: [{ translateY }] }]}>
          <TouchableOpacity onPress={closeDrawer} style={styles.closeButton}>
            <Text style={styles.closeText}>×</Text>
          </TouchableOpacity>
          <WebView
            ref={webViewRef}
            incognito={true}
            source={{ uri: authUrl }}
            style={styles.webview}
            onNavigationStateChange={event => {
              if (!authCode) {
                const code = extractAuthCode(event.url);
                if (code) {
                  console.log('Получен код авторизации:', code);
                  setAuthCode(code);
                }
              }
            }}
          />
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loginButton: {
    padding: 15,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 5,
    width: 350,
    length: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: Dimensions.get('window').height * 0.8,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 5,
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webview: {
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  closeButton: {
    position: 'absolute',
    top: -50,
    right: 20,
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    zIndex: 1010,
  },
  closeText: { fontSize: 24, color: 'black' },
});

export default AuthScreen;
