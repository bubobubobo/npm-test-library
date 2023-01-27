import { NativeModules, requireNativeComponent } from 'react-native';

const HelloView = requireNativeComponent('IOSHelloView'); // as view component
const { IOSHelloView } = NativeModules; // as module

export function sayHello(): void {
  IOSHelloView.sayHello();
  console.log('This is test');
}

export default HelloView;
