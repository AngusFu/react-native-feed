import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  View,
  WebView,
  Text
} from 'react-native';

import { Header, withRouter } from 'react-router-native';
 
export const ArticleHeader = withRouter((props) => {
  return (
    <Header
      {...props}
      style={{ backgroundColor: '#fff' }}
      title="文章详情"
      leftButtonText="Back"
    />
  );
});

export const ArticlePage = withRouter((props) => {
  const { routeParams } = props;
  return (
    <WebView
      automaticallyAdjustContentInsets={false}
      style={{}}
      source={{uri: decodeURIComponent(routeParams.url)}}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      decelerationRate="normal"
      startInLoadingState={true}
      scalesPageToFit={true}
    />
  );
});
