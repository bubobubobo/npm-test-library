import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-npm-test-library' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type NpmTestLibraryProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'NpmTestLibraryView';

export const NpmTestLibraryView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<NpmTestLibraryProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
