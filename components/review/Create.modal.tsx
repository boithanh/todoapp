import React, { useState } from 'react'
import { Alert, Button, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 10
    },
    header: {
        flexDirection: "row",
        paddingVertical: 10,
        borderBottomColor: "red",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1
    },
    groupInput: {
        marginBottom: 15
    },
    text: {
        fontSize: 20,
        fontWeight: "400"
    },
    input: {
        borderWidth: 1,
        borderColor: "#CCC",
        padding: 5,
        borderRadius: 5
    }

})

interface IProps {
    modalVisible: boolean,
    setModalVisible: (v: boolean) => void;
    addNew: (item: any) => void
}
const CreateModal = (props: IProps) => {
    const { modalVisible, setModalVisible, addNew } = props
    const [title, setTitle] = useState("");
    const [star, setStar] = useState("");

    const handleSubmit = () => {
        if (!title || !star) {
            alert(title + star);
            return
        };
        //add new
        addNew({
            id: Math.floor(Math.random() * 2000000),
            title,
            star
        })
        setModalVisible(false);
        setTitle("");
    }
    return (
        <>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.container}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text>Thêm rating mới</Text>
                        <AntDesign name="close" size={24} color="black" onPress={() => {
                            setModalVisible(false)
                            setTitle(""),
                                setStar("")
                        }} />
                    </View>
                    <View>
                        <View style={styles.groupInput}>
                            <Text style={styles.text}>Nội dung</Text>
                            <TextInput value={title} style={styles.input} onChangeText={(v) => { setTitle(v) }} />
                        </View>
                        <View style={styles.groupInput}>
                            <Text style={styles.text}>Rating</Text>
                            <TextInput value={star} style={styles.input} keyboardType='numeric' onChangeText={(v) => { setStar(v) }} />
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Button title='Add' onPress={() => { handleSubmit() }} />
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default CreateModal