/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  ListView,
  TouchableHighlight
} from 'react-native';
import * as CONST from './const';
import * as STYLES from './styles';
import { AnalyticTests } from './analytics';
import Push from "mobile-center-push";
import Moment from 'moment'


export class MobileCenterTester extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      log: [
        {
          title: "Console",
          text: "launched",
          type: CONST.OTHER,
          timeOn: Moment().format('lll')
        },
      ],
    };
  }
  logger(title, text, type) {
    this.state.log.unshift({ title: title, text: text, type: type, timeOn: Moment().format('lll') })
    this.setState({ loading: !this.state.loading })
  }
  render() {
    log = [];
    this.state.log.forEach((item) => {
      log.push(
        <Text>
          <Text style={{ fontSize: 14, color: "#00cc00" }}>
            <Text style={{ color: "#ffd500" }}>{item.timeOn}</Text>
            {" - "}
            {item.title}
          </Text>
          {"\n\r"}
          <Text style={{ fontSize: 12, color: "#006600" }}>{item.text}</Text>
          {"\n\r"}
        </Text>
      );
    })
    return (
      <View style={STYLES.styles.container}>
        <ScrollView style={{
          flex: 1,
          alignSelf: 'stretch',
          marginLeft: 0,
          marginRight: 0,
          marginTop: 10,
          marginBottom: 10,
          paddingLeft: 10,
          paddingRight: 10,
          height: 150,
          backgroundColor: '#000',
          borderWidth: 1,
          borderColor: "#003300"
        }}>
          {log}
        </ScrollView>
        <AnalyticTests logger={this.logger.bind(this)} />
      </View>
    );
  }
}
