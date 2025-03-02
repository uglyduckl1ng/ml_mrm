import React from 'react';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { View } from 'react-native';
import * as DrawerComponent from '../custom-files/DrawerComponent';
import palettes from '../themes/palettes';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const ChecklistPageScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth({ position: 'relative' }, dimensions.width)}
    >
      <View style={StyleSheet.applyWidth({ marginTop: 100 }, dimensions.width)}>
        <Utils.CustomCodeErrorBoundary>
          <DrawerComponent.DrawerComponent />
        </Utils.CustomCodeErrorBoundary>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ChecklistPageScreen);
