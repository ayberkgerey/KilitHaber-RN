import React, {useState} from 'react';
import {WebView} from 'react-native-webview';

export default function App() {
  return <WebView source={{uri: 'https://kilithaber.com.tr/'}} />;
}
