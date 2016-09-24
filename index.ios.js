/**
 * index.[ios|android].js
 */

import React from 'react';

import {
  Header,
  Link,
  nativeHistory,
  Route,
  Router,
  StackRoute,
  withRouter,
} from 'react-router-native';

import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  component: {
    backgroundColor: '#fff',
    flex: 1,
  }
});

const Master = (props) => (
  <View style={styles.component}>
    {props.children}
  </View>
);


import { IndexPage, IndexHeader } from './app/IndexPage';
import { SiteListPage, SiteListHeader } from './app/SiteListPage';
import { ArticlePage, ArticleHeader } from './app/ArticlePage';

const routes = (
  <Router history={nativeHistory} addressBar={false}>
    <StackRoute path="master" component={Master}>
      <Route path="/" component={IndexPage} overlayComponent={IndexHeader} />
      <Route path="/site/:siteName/:siteURL" component={SiteListPage} overlayComponent={SiteListHeader} />
      <Route path="/article/:url" component={ArticlePage} overlayComponent={ArticleHeader} />
    </StackRoute>
  </Router>
);

AppRegistry.registerComponent('TestRN', () => () => routes);

