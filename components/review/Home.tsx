import { NavigationProp, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParamList } from '../../types/route'
import CreateModal from './Create.modal'
import AntDesign from '@expo/vector-icons/AntDesign';



type Props = {}

interface IPreview {
    id: number,
    title: string,
    star: number
}


const styles = StyleSheet.create({
    reviewsItem: {
        padding: 15,
        backgroundColor: "#CCC",
        marginBottom: 15
    }
})
const Home = (props: any) => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const [reviews, setReviews] = useState<IPreview[]>([
        { id: 1, title: "React Native", star: 5 },
        { id: 2, title: "Php + Laravel", star: 3 }
    ]);
    const [modalVisible, setModalVisible] = useState(true)
    return (
        <View>
            <Text style={{ padding: 30, textAlign: "center" }}>Preview List</Text>
            <View>
                <View style={{ alignItems: "center" }}>
                    <AntDesign name="plussquareo" size={40} color="orange" onPress={() => { setModalVisible(true) }} />
                </View>
                <View>
                    <FlatList data={reviews} keyExtractor={item => item.id + ""} renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                navigation.navigate("Details", item)
                            }}>
                                <View style={styles.reviewsItem}>
                                    <Text>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }} />
                </View>
                <CreateModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
            </View>
        </View>
    )
}

export default Home