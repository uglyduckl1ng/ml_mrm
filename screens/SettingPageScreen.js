import React from 'react';
import {
  Button,
  ExpoImage,
  Icon,
  Pressable,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import reset_access_token from '../global-functions/reset_access_token';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const SettingPageScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [styledTextAreaValue, setStyledTextAreaValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textAreaValue2, setTextAreaValue2] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <View>
        {/* header */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'column', marginTop: '10%' },
            dimensions.width
          )}
        >
          {/* away */}
          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row' },
              dimensions.width
            )}
          >
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
              {'Меню'}
            </Text>
          </View>
          {/* name */}
          <View>
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
              {'Настройки'}
            </Text>
          </View>
        </View>

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
        {/* content */}
        <View
          style={StyleSheet.applyWidth(
            { gap: 10, rowGap: 10 },
            dimensions.width
          )}
        >
          {/* personal_info */}
          <View
            style={StyleSheet.applyWidth(
              { left: '2%', right: '0%' },
              dimensions.width
            )}
          >
            {/* first + family name */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignContent: 'space-between',
                  alignItems: 'stretch',
                  alignSelf: 'stretch',
                  borderColor: 'rgb(255, 2, 2)',
                  borderWidth: 2,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              <View>
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      theme.typography.body1,
                      {
                        color: 'rgb(153, 153, 153)',
                        fontFamily: 'System',
                        fontSize: 15,
                        fontWeight: '400',
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Имя Фамилия'}
                </Text>
                <TextInput
                  autoCorrect={true}
                  changeTextDelay={500}
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={newTextAreaValue => {
                    try {
                      setGlobalVariableValue({
                        key: 'First_last_name_employee',
                        value: newTextAreaValue,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  placeholder={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                  }
                  textAlignVertical={'top'}
                  webShowOutline={true}
                  {...GlobalStyles.TextInputStyles(theme)['Text Area'].props}
                  disabled={'true'}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextInputStyles(theme)['Text Area'].style,
                      theme.typography.body2,
                      {
                        borderBottomWidth: 0,
                        borderColor: theme.colors.branding.primary,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        borderTopWidth: 0,
                        opacity: 1,
                        width: 300,
                      }
                    ),
                    dimensions.width
                  )}
                  value={Constants['First_last_name_employee']}
                />
              </View>
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth(
                  { alignContent: 'center', justifyContent: 'space-between' },
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
                  source={imageSource(Images['lock'])}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ExpoImageStyles(theme)['Image'].style,
                      { height: 20, width: 20 }
                    ),
                    dimensions.width
                  )}
                />
              </View>
            </View>
            {/* mail */}
            <View>
              <TextInput
                autoCorrect={true}
                changeTextDelay={500}
                multiline={true}
                numberOfLines={4}
                onChangeText={newTextAreaValue => {
                  try {
                    setGlobalVariableValue({
                      key: 'email_employee',
                      value: newTextAreaValue,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                placeholder={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                }
                textAlignVertical={'top'}
                webShowOutline={true}
                {...GlobalStyles.TextInputStyles(theme)['Text Area'].props}
                disabled={'true'}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextInputStyles(theme)['Text Area'].style,
                    theme.typography.body2,
                    {
                      borderBottomWidth: 0,
                      borderColor: null,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                    }
                  ),
                  dimensions.width
                )}
                value={Constants['email_employee']}
              />
            </View>
          </View>
          {/* clear cash */}
          <View>
            <Button
              accessible={true}
              iconPosition={'left'}
              {...GlobalStyles.ButtonStyles(theme)['Button'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Button'].style,
                  theme.typography.button,
                  {}
                ),
                dimensions.width
              )}
              title={'Очистить кэш'}
            />
          </View>

          <View>
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                const handler = async () => {
                  try {
                    await reset_access_token();
                    navigation.navigate('AuthPageScreen');
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
              {...GlobalStyles.ButtonStyles(theme)['Button'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Button'].style,
                  theme.typography.button,
                  {
                    backgroundColor: 'rgb(253, 87, 0)',
                    fontFamily: 'System',
                    fontWeight: '700',
                  }
                ),
                dimensions.width
              )}
              title={'Выйти'}
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SettingPageScreen);
