<a href="https://www.npmjs.com/package/react-money-keyboard-simple">
    <img alt="simple-keyboard: Javscript Virtual Keyboard" src="https://storage.googleapis.com/go_network/images/demo.png">
</a>

<blockquote>Virtual Keyboard Money for React. Customizable, responsive and lightweight.</blockquote>

<p>
  <a href="https://www.npmjs.com/package/react-money-keyboard-simple"><img src="https://badgen.net/npm/v/react-money-keyboard-simple?color=blue" alt="npm version"></a>
</p>

## 🚀 Demo

[react-money-keyboard-simple](https://www.npmjs.com/package/react-money-keyboard-simple)

## 📦 Installation & Usage

npm install react-money-keyboard-simple --save
yarn add react-money-keyboard-simple

## 📖 Documentation

### To run demo on your own computer

```js
import React, { Component } from "react";
import { Keyboard } from "react-money-keyboard-simple";
import { IconBackSpace } from '~/assets';

const App  = () => {

  const handleBackspace = () => {};
  const handleSubmit = () => {};
  const handleNumberClick = (value: any) => {}

  render() {
    return (
      <Keyboard
        handleSubmit={handleSubmit}
        handleBackspace={handleBackspace}
        handleNumberClick={handleNumberClick}
        BackspaceIcon={<IconBackSpace />}
        titleBtnEnter='Pay'
      />
    );
  }
}
```

### Other versions

- [Vanilla JS](https://www.npmjs.com/package/react-money-keyboard-simple)
- [Angular](https://www.npmjs.com/package/react-money-keyboard-simple)
- [Vue.js](https://www.npmjs.com/package/react-money-keyboard-simple)

### Questions? Join the chat

## 🎯 Compatibility

- Internet Explorer 11
- Edge (Spartan) 16+
- Edge (Anaheim/Edge Chromium) 79+
- Chrome 49+
- Safari 9+
- Firefox 57+
- iOS 9+

> Note: If you don't want to support old browsers, you can use the Modern Browsers bundle.

## ✅ Contributing

PRs and issues are welcome. Feel free to submit any issues you have at:
[https://www.npmjs.com/package/react-money-keyboard-simple](https://www.npmjs.com/package/react-money-keyboard-simple)
