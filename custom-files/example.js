import React, { useState, useRef } from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

export const DrawerComponent = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const drawerWidth = screenWidth;
  const [visible, setVisible] = useState(false);
  const translateX = useRef(new Animated.Value(-drawerWidth)).current;

  const openDrawer = () => {
    setVisible(true);
    Animated.timing(translateX, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(translateX, {
      toValue: -drawerWidth,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setVisible(false));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer} style={styles.filterButton}>
        <Text style={styles.buttonText}>Фильтры</Text>
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.drawer,
          {
            transform: [{ translateX }],
            width: screenWidth * 0.8,
          },
        ]}
      >
        <TouchableOpacity onPress={closeDrawer} style={styles.closeButton}>
          <Text style={styles.closeText}>❌</Text>
        </TouchableOpacity>
        <Text style={styles.drawerText}>Drawer Content</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#03a9f4',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  drawer: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: Dimensions.get('window').width * 0.97,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    zIndex: 1001,
  },
  closeText: {
    fontSize: 24,
    color: 'red',
  },
  drawerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
