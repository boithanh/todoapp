import React from 'react'
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
}
const CreateModal = (props: IProps) => {
    const { modalVisible, setModalVisible } = props
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
                        <AntDesign name="close" size={24} color="black" onPress={() => { setModalVisible(false) }} />
                    </View>
                    <View>
                        <View style={styles.groupInput}>
                            <Text style={styles.text}>Nội dung</Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View style={styles.groupInput}>
                            <Text style={styles.text}>Rating</Text>
                            <TextInput style={styles.input} keyboardType='numeric' />
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>

                    </View>
                </View>
            </Modal>
        </>
    )
}

export default CreateModal