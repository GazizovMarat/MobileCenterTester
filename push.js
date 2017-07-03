import Push from 'mobile-center-push'
import { AppState, Alert } from 'react-native'

//It doesn't work, because a last changes was not added into the npm store.
//You should wait when it will have done, then you can update node packages to actual version via npm.

export class PushService  {
    constructor(logger) {
        this.state = {
            logger: logger
        }
        Push.setEventListener({
            pushNotificationReceived: (pushNotification) => {
                let message = pushNotification.message;
                let title = pushNotification.title;
                if (message === null || message === undefined) {
                    title = "iOS background";
                    message = "<empty>";
                }
                if (pushNotification.customProperties && Object.keys(pushNotification.customProperties).length > 0) {
                    message += '\nCustom properties:\n' + JSON.stringify(pushNotification.customProperties);
                }

                if (AppState.currentState === 'active') {
                    Alert.alert(title, message);
                }
                this.logger(title, message, CONST.Push);
            }
        })
    }
}