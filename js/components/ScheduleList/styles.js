import { StyleSheet, Platform } from 'react-native';

import { colors, fonts } from '../../config/styles';

export const styles = StyleSheet.create({
    sectionTitle: {
        backgroundColor: colors.lightGrey,
        padding: 5,
        paddingLeft: 10,
        fontSize: 12,
        ...Platform.select({
            ios: {
                fontFamily: fonts.fontMainReg,
            },
            android: {
                fontFamily: fonts.fontMainReg,
            },
        }),
    },
    itemTitle: {
        margin: 10,
        ...Platform.select({
            ios: {
                fontFamily: fonts.fontMainReg,
            },
            android: {
                fontFamily: fonts.fontMainReg,
            },
        }),
    },
    itemLocation: {
        color: colors.mediumGrey,
        marginLeft: 10,
        marginBottom: 10,
        fontSize: 12,
        ...Platform.select({
            ios: {
                fontFamily: fonts.fontMainReg,
            },
            android: {
                fontFamily: fonts.fontMainReg,
            },
        }),
    },
    border: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: colors.lightGrey,
    },
    container: {
        flex: 1,
    },
    locationInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
    },
})