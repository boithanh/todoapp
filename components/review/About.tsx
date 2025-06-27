import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../../utils/Const'

type Props = {}

const styles = StyleSheet.create({
    about: {
        fontSize: 30,
        padding: 25
    },
    about1: {
        fontSize: 20,
        padding: 15
    }
})
const About = (props: Props) => {
    return (
        <View>
            <Text style={[styles.about, globalStyles.globalFont]}>About review App</Text>
            <Text style={styles.about1}>Bành Bối Thạnh</Text>
        </View>
    )
}

export default About