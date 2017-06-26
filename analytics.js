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
import AnalyticService from "mobile-center-analytics";

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
            handler: undefined
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
            handler: () => {
                AnalyticService.trackEvent("Test event1");
                //.then((obj)=>{
                //    this.logger("Test event1","obj");
                //})
                //.catch((err)=>{
                //    this.logger("[Ex]Test event1",err);
                //});
            }
        },
        {
            testId: 17,
            handler: () => {
                AnalyticService.trackEvent("Test event2");
            }
        },
        {
            testId: 18,
            handler: () => {
                AnalyticService.trackEvent("Test event3", {
                    "Music2": "test prop",
                    "Music": "abcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefgha"
                });
            }
        },
        {
            testId: 19,
            handler: () => {
                AnalyticService.trackEvent("Test event4", {
                    "Music2": "test prop",
                    "Music": "abcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefgha"
                });
            }
        },
        {
            testId: 20,
            handler: () => {
                for (let i = 0; i <= 201; i++) {
                    AnalyticService.trackEvent("Test event" + i);
                }

            }
        },
        {
            testId: 21,
            handler: () => {
                AnalyticService.trackEvent("Test event7", {
                    "!@#$%^&*()?><,.\']}~`": "Music"
                });
            }
        },
        {
            testId: 22,
            handler: () => {
                AnalyticService.trackEvent("Test event6", {
                    "Music": "!@#$%^&*()?><,.\']}~`"
                });
            }
        },
        {
            testId: 23,
            handler: () => {
                AnalyticService.trackEvent("!@#$%^&*()?><,.\']}~`");
            }
        },
        {
            testId: 24,
            handler: () => {
                AnalyticService.trackEvent(null);
            }
        },
        {
            testId: 25,
            handler: () => {
                AnalyticService.trackEvent("abcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefgha");
            }
        },
        {
            testId: 26,
            handler: () => {
                AnalyticService.trackEvent("");
            }
        },
        {
            testId: 27,
            handler: () => {
                AnalyticService.trackEvent("Test event8", {
                    "Category1": "FileName1",
                    "Category2": "FileName2",
                    "Category3": "FileName3",
                    "Category4": "FileName4",
                    "Category5": "FileName5",
                    "Category6": "FileName6"
                });
            }
        },
        {
            testId: 28,
            handler: undefined
        },
        {
            testId: 29,
            handler: undefined
        },
        {
            testId: 30,
            handler: undefined
        },
        {
            testId: 31,
            handler: undefined
        },
        {
            testId: 32,
            handler: undefined
        },
        {
            testId: 33,
            handler: undefined
        }
    ]
    render() {
        return (
            <View style={{ height: 350, }}>
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
