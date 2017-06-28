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
import {AnalyticTests} from './analytics';
import Push from "mobile-center-push";


export class MobileCenterTester extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      viewContent: [
        { title: "Console", text: "launched", type: CONST.OTHER },
        
      ],
    };
  }
  unshiftLog(title, text, type) {
    this.state.viewContent.unshift({ title: title, text: text, type: type })
    this.setState({ loading: !this.state.loading })
  }
  async pusEnable(){
    Push.isEnabled()
    .then((obj)=>{
      this.unshiftLog("PushEnabled", obj, CONST.PUSH);
    }

    ).catch((err)=>{
      this.unshiftLog("PushDisabled", err, CONST.PUSH);
    });
  }
  render() {
    //this.pusEnable();
    //if(pushEnable == true){
    //  this.unshiftLog("Push", "Enabled", CONST.PUSH);
    //}else{
    //  this.unshiftLog("Push", "Disabled", CONST.PUSH);
    //}
    log = [];
    this.state.viewContent.forEach((item) => {
      log.push(
        <Text style={{ fontSize: 14, color: "#00cc00" }}> <Text style={{ color: "#ff3300" }}>¶</Text> {item.title}</Text>
      );
      log.push(
        <Text style={{ fontSize: 12, color: "#006600" }}>{item.text}</Text>
      )
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
        <AnalyticTests logger={this.unshiftLog.bind(this)} />
      </View>
    );
  }
}
