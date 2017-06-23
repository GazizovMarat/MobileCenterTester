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

export class AnalyticTests extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(this.testScope),
            logger: props.logger
        }
    }
    logger(title, text) {
        this.state.logger(title, text, CONST.ANALYTIC);
    }
    _preffix = "Analytics"
    testScope = [
        {
            testId: 1,
            handler: () => {
                this.logger("11111", "22222");
            }
        },
        {
            testId: 2,
            handler: undefined
        },
        {
            testId: 3,
            handler: undefined
        },
        {
            testId: 4,
            handler: undefined
        },
        {
            testId: 5,
            handler: undefined
        },
        {
            testId: 6,
            handler: undefined
        },
        {
            testId: 7,
            handler: undefined
        },
        {
            testId: 8,
            handler: undefined
        },
        {
            testId: 9,
            handler: undefined
        },
        {
            testId: 10,
            handler: undefined
        },
        {
            testId: 11,
            handler: undefined
        },
        {
            testId: 12,
            handler: undefined
        },
        {
            testId: 13,
            handler: undefined
        },
        {
            testId: 14,
            handler: undefined
        },
        {
            testId: 15,
            handler: undefined
        },
        {
            testId: 16,
            handler: undefined
        },
        {
            testId: 17,
            handler: undefined
        },
        {
            testId: 18,
            handler: undefined
        },
        {
            testId: 19,
            handler: undefined
        },
        {
            testId: 20,
            handler: undefined
        },
        {
            testId: 21,
            handler: undefined
        },
        {
            testId: 22,
            handler: undefined
        },
        {
            testId: 23,
            handler: undefined
        },
        {
            testId: 24,
            handler: undefined
        },
        {
            testId: 25,
            handler: undefined
        },
        {
            testId: 26,
            handler: undefined
        },
        {
            testId: 27,
            handler: undefined
        },
        {
            testId: 28,
            handler: undefined
        },
        {
            testId: 29,
            handler: undefined
        }
    ]
    render() {
        return (
            <View style={{height:350,}}>
            {/*<View style={STYLES.container}>*/}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={
                        (rowData) => <Button
                            onPress={rowData.handler != undefined && rowData.handler}
                            title={this._preffix + '-' + rowData.testId}
                            color={rowData.handler != undefined ? "#FFCC66" : "#CCCCCC"}
                        />
                    }
                />
            </View>
        );
    }

}
