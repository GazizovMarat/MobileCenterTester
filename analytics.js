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
            testId: 16,
            handler: () => {
                AnalyticService.trackEvent("Test event1")
                    .then((obj) => {
                        this.logger("Analytics-16", "Name: Test event 1", CONST.ANALYTIC);
                    })
                    .catch((err) => {
                        his.logger("[Ex]Analytics-16", err, CONST.ANALYTIC);
                    });
            }
        },
        {
            testId: 17,
            handler: () => {
                AnalyticService.trackEvent("Test event2")
                    .then((obj) => {
                        this.logger("Analytics-17", "Name: Test event 2", CONST.ANALYTIC);
                    })
                    .catch((err) => {
                        his.logger("[Ex]Analytics-17", err, CONST.ANALYTIC);
                    });
            }
        },
        {
            testId: 18,
            handler: () => {
                AnalyticService.trackEvent("Test event3", {
                    "abcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefgha": "Music"
                })
                    .then((obj) => {
                        this.logger("Analytics-18", "Name: Test event 3:\n\rProperties:\n\rabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefgha :Music", CONST.ANALYTIC);
                    })
                    .catch((err) => {
                        his.logger("[Ex]Analytics-18", err, CONST.ANALYTIC);
                    });
            }
        },
        {
            testId: 19,
            handler: () => {
                AnalyticService.trackEvent("Test event4", {
                    "Music": "abcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefgha"
                })
                    .then((obj) => {
                        this.logger("Analytics-19", "Name: Test event 4\n\rProperties:\n\rMusic : abcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefgha", CONST.ANALYTIC);
                    })
                    .catch((err) => {
                        his.logger("[Ex]Analytics-19", err, CONST.ANALYTIC);
                    });
            }
        },
        {
            testId: 20,
            handler: () => {
                this.logger("Analytics-20", "Was started initialization 210 events", CONST.ANALYTIC);
                for (let i = 0; i <= 210; i++) {
                    AnalyticService.trackEvent("Test event" + i)
                        .then((obj) => {

                        })
                        .catch((err) => {
                            this.logger("[Ex]Analytics-20", err), CONST.ANALYTIC;
                        })
                }
            }
        },
        {
            testId: 21,
            handler: () => {
                AnalyticService.trackEvent("Test event6", {
                    "!@#$%^&*()?><,.\']}~`": "Music"
                })
                    .then((obj) => {
                        this.logger("Analytics-21", "Name: Test event 6\n\rProperties:\n\r!@#$%^&*()?><,.\']}~`:Music", CONST.ANALYTIC);
                    })
                    .catch((err) => {
                        his.logger("[Ex]Analytics-21", err, CONST.ANALYTIC);
                    });
            }
        },
        {
            testId: 22,
            handler: () => {
                AnalyticService.trackEvent("Test event7", {
                    "Music": "!@#$%^&*()?><,.\']}~`"
                })
                    .then((obj) => {
                        this.logger("Analytics-22", "Name: Test event 7\n\rProperties:\n\rMusic:!@#$%^&*()?><,.\']}~`", CONST.ANALYTIC);
                    })
                    .catch((err) => {
                        his.logger("[Ex]Analytics-22", err, CONST.ANALYTIC);
                    });
            }
        },
        {
            testId: 23,
            handler: () => {
                AnalyticService.trackEvent("!@#$%^&*()?><,.\']}~`")
                    .then((obj) => {
                        this.logger("Analytics-23", "Name: !@#$%^&*()?><,.\']}~`", CONST.ANALYTIC);
                    })
                    .catch((err) => {
                        his.logger("[Ex]Analytics-23", err, CONST.ANALYTIC);
                    });
            }
        },
        {
            testId: 24,
            handler: () => {
                AnalyticService.trackEvent(null)
                    .then((obj) => {
                        this.logger("Analytics-24", "Name: null", CONST.ANALYTIC);
                    })
                    .catch((err) => {
                        his.logger("[Ex]Analytics-24", err, CONST.ANALYTIC);
                    });
            }
        },
        {
            testId: 25,
            handler: () => {
                AnalyticService.trackEvent("abcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefgha")
                    .then((obj) => {
                        this.logger("Analytics-25", "Name: acbc...caca (257 chars)", CONST.ANALYTIC);
                    })
                    .catch((err) => {
                        his.logger("[Ex]Analytics-25", err, CONST.ANALYTIC);
                    });
            }
        },
        {
            testId: 26,
            handler: () => {
                AnalyticService.trackEvent("")
                    .then((obj) => {
                        this.logger("Analytics-26", "Name: empty string", CONST.ANALYTIC);
                    })
                    .catch((err) => {
                        his.logger("[Ex]Analytics-26", err, CONST.ANALYTIC);
                    });
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
                })
                    .then((obj) => {
                        this.logger("Analytics-27", "Name: Test event 8\n\rProperties:\n\rCategory1:FileName1 ... Category6:FileName6", CONST.ANALYTIC);
                    })
                    .catch((err) => {
                        his.logger("[Ex]Analytics-27", err, CONST.ANALYTIC);
                    });
            }
        }
    ]
    render() {
        return (
            <View style={{ height: 350, }}>
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
