import React from 'react';
import { ExpoImage, ScreenContainer, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import * as AuthScreen from '../custom-files/AuthScreen';
import palettes from '../themes/palettes';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const AuthPageScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [checkboxValue2, setCheckboxValue2] = React.useState(false);
  const [checkbox_password, setCheckbox_password] = React.useState(false);
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [login_field, setLogin_field] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [password_field, setPassword_field] = React.useState('');
  const [styledTextAreaValue, setStyledTextAreaValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textAreaValue2, setTextAreaValue2] = React.useState('');
  const [textInput2Value, setTextInput2Value] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [textInputValue3, setTextInputValue3] = React.useState('');
  const [textInputValue4, setTextInputValue4] = React.useState('');
  const [textInputValue5, setTextInputValue5] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={false}
      hasSafeArea={false}
      hasTopSafeArea={false}
      scrollable={true}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: 'rgb(255, 87, 0)',
          borderColor: 'rgb(255, 87, 0)',
          opacity: 1,
        },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            alignSelf: 'center',
            padding: '20%',
            width: '100%',
          },
          dimensions.width
        )}
      >
        <ExpoImage
          allowDownscaling={true}
          cachePolicy={'disk'}
          contentPosition={'center'}
          resizeMode={'cover'}
          transitionDuration={300}
          transitionEffect={'cross-dissolve'}
          transitionTiming={'ease-in-out'}
          {...GlobalStyles.ExpoImageStyles(theme)['Image'].props}
          source={imageSource(Images['main'])}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ExpoImageStyles(theme)['Image'].style,
              { height: 44, position: 'relative', width: 141.88 }
            ),
            dimensions.width
          )}
        />
      </View>

      <Text
        accessible={true}
        selectable={false}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.TextStyles(theme)['Text'].style,
            theme.typography.headline4,
            {
              alignSelf: 'auto',
              color: 'rgb(255, 255, 255)',
              fontFamily: 'System',
              fontWeight: '700',
              lineHeight: 40,
              textAlign: 'center',
            }
          ),
          dimensions.width
        )}
      >
        {'Мобильное рабочее место сотрудника'}
      </Text>
      <Utils.CustomCodeErrorBoundary>
        <AuthScreen.AuthScreen />
      </Utils.CustomCodeErrorBoundary>
    </ScreenContainer>
  );
};

export default withTheme(AuthPageScreen);
