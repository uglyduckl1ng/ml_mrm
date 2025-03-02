import React from 'react';
import {
  Button,
  Icon,
  Pressable,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const ProfilePageScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* header */}
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'row', marginTop: '10%' },
          dimensions.width
        )}
      >
        <Pressable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Icon size={24} name={'AntDesign/left'} />
        </Pressable>
        {/* title */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Text'].style,
              theme.typography.body1,
              {}
            ),
            dimensions.width
          )}
        >
          {'Профиль'}
        </Text>
      </View>
      {/* content */}
      <View>
        {/* account info */}
        <View>
          {/* name */}
          <View />
          {/* secondname */}
          <View />
          {/* role */}
          <View>
            {/* role_name */}
            <View />
            {/* role_rights */}
            <View />
          </View>
        </View>
      </View>
      {/* footer */}
      <View>
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('AuthPageScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              theme.typography.button,
              {}
            ),
            dimensions.width
          )}
          title={'Выйти'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ProfilePageScreen);
