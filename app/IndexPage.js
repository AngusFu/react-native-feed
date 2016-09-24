
import React, { Component } from 'react';

import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';

import { Header, Link, withRouter } from 'react-router-native';

import source from './source';

export const IndexHeader = withRouter((props) => {
  return (
    <Header
      {...props}
      style={{ backgroundColor: '#fff' }}
      title="首页"
    />
  );
});

export class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state ={
      items: Object.keys(source)
    };
  }

  render() {
    return (
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollCon}>
        {
          this.state.items.map((item) => {
            return (
              <Link key={item} to={`/site/${item}/}`} underlayColor="#efefef" style={styles.detailCard}>
                <View style={styles.listItem}>
                  <Text style={styles.text}>{item}</Text>
                </View>
              </Link>
            );
          })
        }
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    flex: 1
  },

  scrollCon: {
    paddingBottom: 40
  },
  
  listItem: {
    flex: 1,
    justifyContent: 'center',
    height: 40,
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#dfdfdf'
  },

  text: {
    fontSize: 14
  }
});




