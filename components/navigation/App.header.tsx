import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { globalStyles } from '../../utils/Const';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '../../types/route';
type MainDrawerNavigationProp = DrawerNavigationProp<DrawerParamList, 'MainDrawer'>;


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#CCC",
        paddingHorizontal: 5,
        paddingVertical: 10,
        alignItems: "center",
        // paddingTop: 50
    },
    headerText: {
        fontSize: 25,
        flex: 1,
        textAlign: "center",
        fontWeight: "600"

    }
})
const AppHeader = () => {
    const navigation = useNavigation<MainDrawerNavigationProp>();
    return (
        <View style={styles.container}>
            <MaterialIcons name="menu" size={24} color="black" onPress={() => {
                navigation.openDrawer();
            }} />
            <Text style={[styles.headerText, globalStyles.globalFont]}>Review App</Text>
        </View>
    )
}

export default AppHeader