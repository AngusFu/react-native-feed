
import React, { Component } from 'react';

import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  View,
  Text
} from 'react-native';

import { Header, Link, withRouter } from 'react-router-native';

import source from './source';
import fetchData from './DataService';

export const SiteListHeader = withRouter((props) => {
  const { routeParams } = props;
  return (
    <Header
      {...props}
      style={{ backgroundColor: '#fff' }}
      title={routeParams.siteName}
      leftButtonText="Back"
    />
  );
});

const Loading = () => {
  return (
    <View style={styles.loadingCon}>
      <ActivityIndicator
        style={{marginTop: -100}}
        size="large"
        color="#ccc"
       />
    </View>
  );
};

export class SiteListPage extends Component {
  constructor(props) {
    super(props);

    const { routeParams } = props;
    this.conf = source[routeParams.siteName];
    this.loaded = false;
    this.state ={
      data: []
    };
  }
  
  async getPageData() {
    let data = await fetchData(this.conf);
    this.loaded = true;
    this.setState({ data });
  }

  componentDidMount() {
    this.getPageData();
  }

  render() {
    if (!this.loaded) {
      return <Loading />;
    }

    return (
      <ScrollView style={styles.viewContainer} contentContainerStyle={styles.scrollCon}>
        {
          this.state.data.map((item) => {
            return (
              <Link key={item.href} to={`/article/${encodeURIComponent(item.href)}`} style={styles.detailCard} underlayColor="#efefef">
                <View style={styles.listItem}>
                  <Text style={styles.text} numberOfLines={1}>{item.title}</Text>
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
  viewContainer: {
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
  },

  loadingCon: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

