import React from 'react'
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { OPENSANS_REGULAR } from '../../utils/Const'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../../types/route'
import star from "../../assets/images/star.png";
import background from "../../assets/images/react-native.png"

type Props = {}

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANS_REGULAR,
        color: "white"
    },
    reviewText: {
        fontSize: 25,
        fontFamily: OPENSANS_REGULAR,
        padding: 25,
        color: "white"
    }
})

const Detail = (props: Props) => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const route: RouteProp<RootStackParamList, 'Details'> = useRoute();
    return (
        <ImageBackground source={background} style={{ flex: 1 }}>
            <Text style={styles.review}>Review Detail</Text>
            <Text style={styles.reviewText}>ID: {route.params?.id}</Text>
            <Text style={styles.reviewText}>Title: {route.params?.title}</Text>
            <Text style={styles.reviewText}>Ratting: {route.params?.star}</Text>
            <View style={{ flexDirection: "row", gap: 10, marginHorizontal: 10 }}>
                <Image source={star} style={{ height: 50, width: 50 }} />
                <Image source={star} style={{ height: 50, width: 50 }} />
                <Image source={star} style={{ height: 50, width: 50 }} />
                <Image source={star} style={{ height: 50, width: 50 }} />
                <Image source={star} style={{ height: 50, width: 50 }} />
            </View>

            <Button title='Go Home' onPress={() => { navigation.navigate("Home1") }} />
        </ImageBackground>
    )
}

export default Detail