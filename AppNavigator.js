import React from 'react';
import { Icon, Touchable, useTheme } from '@draftbit/ui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { systemWeights } from 'react-native-typography';
import LinkingConfiguration from './LinkingConfiguration';
import AuthPageScreen from './screens/AuthPageScreen';
import ChecklistPageScreen from './screens/ChecklistPageScreen';
import MenuPageScreen from './screens/MenuPageScreen';
import ProfilePageScreen from './screens/ProfilePageScreen';
import SettingPageScreen from './screens/SettingPageScreen';
import palettes from './themes/palettes';
import Breakpoints from './utils/Breakpoints';
import useWindowDimensions from './utils/useWindowDimensions';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DefaultAndroidBackIcon({ tintColor }) {
  return (
    <View style={[styles.headerContainer, styles.headerContainerLeft]}>
      <Icon
        name="AntDesign/arrowleft"
        size={24}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </View>
  );
}

function DefaultDrawerIcon({ tintColor, navigation }) {
  return (
    <Touchable
      onPress={() => navigation.toggleDrawer()}
      style={[styles.headerContainer, styles.headerContainerLeft]}
    >
      <Icon
        name="EvilIcons/navicon"
        size={27}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </Touchable>
  );
}

function BottomTabNavigator() {
  const theme = useTheme();

  const tabBarOrDrawerIcons = {
    ChecklistPageScreen: 'MaterialIcons/checklist-rtl',
    MenuPageScreen: 'Feather/menu',
  };

  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: false,
        headerStyle: {
          backgroundColor: theme.colors.background.base,
          borderBottomColor: 'transparent',
        },
        headerTintColor: theme.colors.text.strong,
        headerTitleStyle: theme.typography.headline5,
        tabBarActiveTintColor: theme.colors.branding.primary,
        tabBarInactiveTintColor: theme.colors.text.light,
        tabBarLabelStyle: theme.typography.caption,
        tabBarStyle: {
          backgroundColor: theme.colors.background.base,
          borderTopColor: 'transparent',
        },
      })}
    >
      <Tab.Screen
        name="ChecklistPageScreen"
        component={ChecklistPageScreen}
        options={({ navigation }) => ({
          headerLeft: ({ tintColor, canGoBack }) =>
            canGoBack ? null : (
              <View
                style={[styles.headerContainer, styles.headerContainerLeft]}
              >
                <Icon
                  name="MaterialIcons/checklist-rtl"
                  size={Platform.OS === 'ios' ? 21 : 24}
                  color={tintColor}
                  style={[styles.headerIcon, styles.headerIconLeft]}
                />
              </View>
            ),
          headerShown: false,
          headerTitle: 'Чеклисты',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialIcons/checklist-rtl"
              size={25}
              color={
                focused
                  ? theme.colors.branding.primary
                  : theme.colors.text.light
              }
            />
          ),
          tabBarLabel: 'Чеклисты',
          title: 'checklist-page',
        })}
      />
      <Tab.Screen
        name="MenuPageScreen"
        component={MenuPageScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Feather/menu"
              size={25}
              color={
                focused
                  ? theme.colors.branding.primary
                  : theme.colors.text.light
              }
            />
          ),
          tabBarLabel: 'Меню',
          title: 'menu-page',
        })}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  const theme = useTheme();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: theme.colors.background.base,
        },
      }}
      linking={LinkingConfiguration}
    >
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          cardStyle: { flex: 1 },
          headerBackImage:
            Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
          headerShown: false,
          headerStyle: {
            backgroundColor: theme.colors.background.base,
            borderBottomColor: 'transparent',
          },
          headerTintColor: theme.colors.text.strong,
          headerTitleStyle: theme.typography.headline5,
        })}
      >
        <Stack.Screen
          name="AuthPageScreen"
          component={AuthPageScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Auth-page',
          })}
        />
        <Stack.Screen
          name="ProfilePageScreen"
          component={ProfilePageScreen}
          options={({ navigation }) => ({
            title: 'profile-page',
          })}
        />
        <Stack.Screen
          name="SettingPageScreen"
          component={SettingPageScreen}
          options={({ navigation }) => ({
            title: 'setting-page',
          })}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={({ navigation }) => ({
            title: 'Bottom Tab Navigator',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({ ios: { marginLeft: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
});
