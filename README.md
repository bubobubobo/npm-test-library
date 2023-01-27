# react-native-npm-test-library

practice publishing native module for RN project

simplified from create-react-native-library basic template

## Installation

```sh
npm install react-native-npm-test-library
yarn add react-native-npm-test-library
```

## Usage

```ts
import React from 'react';
import HelloView, { sayHello } from "react-native-npm-test-library";

export function HelloScreen () {
  useEffect(() => {
    sayHello();
  }, []);

  return <HelloView />
}
```

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
