import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { OPENSANS_REGULAR } from '../../utils/Const'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../../types/route'

type Props = {}

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANS_REGULAR
    },
    reviewText: {
        fontSize: 25,
        fontFamily: OPENSANS_REGULAR,
        padding: 25
    }
})

const Detail = (props: Props) => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const route: RouteProp<RootStackParamList, 'Details'> = useRoute();
    return (
        <View>
            <Text style={styles.review}>Review Detail</Text>
            <Text style={styles.reviewText}>ID: {route.params?.id}</Text>
            <Text style={styles.reviewText}>Title: {route.params?.title}</Text>
            <Text style={styles.reviewText}>Ratting: {route.params?.star}</Text>
            <Button title='Go Home' onPress={() => { navigation.navigate("Home1") }} />
        </View>
    )
}

export default Detail