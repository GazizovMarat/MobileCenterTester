import {
    StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 10
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

});
export const commonColors = StyleSheet.create({
    crash: {
        color: "#FF0000"
    },
    analytic: {
        color: "#FFCC66"
    },
    push: {
        color: "#00CC00"
    },
    other: {
        color: "#0099FF"
    }
});