/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#3498db';
const tintColorDark = '#2980b9';

export const Colors = {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    icon: '#95a5a6',
    tabIconDefault: '#bdc3c7',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#000',
    background: '#fff',
    tint: tintColorDark,
    icon: '#7f8c8d',
    tabIconDefault: '#95a5a6',
    tabIconSelected: tintColorDark,
  },
};
