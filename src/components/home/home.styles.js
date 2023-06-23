import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    landing: {
        flex: 1,
        backgroundColor: '#356EFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
        backgroundColor: '#fff',
        height: '100%',
        flex: 1,
        paddingTop: 20,
    },

    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
    },

    welcomeText: {
        fontSize: 18,
        fontWeight: 700,
        paddingLeft: 40,
        marginBottom: 25,
        marginTop: 10,
    },

    forgotPassword: {
        alignItems: 'flex-start',
        paddingLeft: 40,
        marginTop: 10,
    },

    msg: {
        color: '#000000',
        fontSize: 12,
        fontWeight: 500,
    },

    socialsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: '60%',
        marginTop: 30,
    },

    social: {
        width: 40,
        height: 35,
        borderRadius: 4,
    }
});

export default styles;