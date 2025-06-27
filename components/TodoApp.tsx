import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export interface ITodo {
    id: number,
    name: string
}

interface Props {
    todo: ITodo;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0DFD5',
        paddingTop: 50
    },
    header: {
        backgroundColor: "#EF6461",
        paddingHorizontal: 20,
        textAlign: "center",
        fontSize: 60,
        color: "#313638",
        flex: 1
    },
    todoInput: {
        borderBottomWidth: 1,
        borderBottomColor: "#313638",
        padding: 5,
        margin: 15

    },
    todoItem: {
        fontSize: 20,
        color: "#313638"
    },
    groupTodo: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        marginBottom: 10,
        borderStyle: "dashed",
        justifyContent: "space-between",
        backgroundColor: "#E4B363",
        padding: 15,
        borderColor: "#313638"
    },
    form: {
        flex: 2,
    },
    todo: {
        paddingHorizontal: 20,
        flex: 8
    },
});


const TodoApp = (props: Props) => {
    const [todo, setTodo] = useState<string>("");
    const [listTodo, setListTodo] = useState<ITodo[]>([]);

    const handleAddTodo = () => {
        if (!todo) {
            Alert.alert("Bạn chưa nhập todo tên là gì nhé!");
            return
        };
        setListTodo([...listTodo, { id: Math.floor(Math.random() * 2000000), name: todo }]);
        setTodo("");
    }

    const deleteTodo = (id: Number) => {
        // const newsTodos = listTodo.filter(item => item.id !== id);
        // setListTodo(newsTodos);
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.header}>Todo App</Text>
                {/* form */}
                <View style={styles.form}>
                    <TextInput value={todo} autoCapitalize='sentences' style={styles.todoInput} onChangeText={(value) => { setTodo(value) }} />
                    <Button title='Add todo' onPress={handleAddTodo} />
                </View>
                {/* list todo */}
                <View style={styles.todo}>
                    {/* keyExtractor để khai báo key prop tranh bị giảm hiệu suât khi react render */}
                    <FlatList
                        data={listTodo}
                        keyExtractor={item => item.id + ""}
                        renderItem={({ item }) => {
                            return (

                                <Pressable onPress={() => {
                                    Alert.alert(`Bạn đang xóa mục: ${item.name}`, 'chắc chắn xóa không?', [
                                        {
                                            text: 'Hủy',
                                            style: 'cancel',
                                        },
                                        {
                                            text: 'Xác nhận',
                                            onPress: () => deleteTodo(item.id)
                                        },
                                    ])
                                }}>
                                    <View style={styles.groupTodo}>
                                        <Text style={styles.todoItem} key={item.id} >{item.name}</Text>
                                        <AntDesign name="close" size={24} color="black" />
                                    </View>
                                </Pressable>
                                //Cách cũ không khuyến khích sử dụng bởi React, tương lai nên migrate sang component Pressable để tránh lỗi phat sinh do TouchableOpacity không còn được hỗ trợ nửa
                                // <TouchableOpacity onPress={() => {
                                //   deleteTodo(item.id);
                                //   alert("Ban vua xoa todo co ma: " + item.id);  
                                // }}>
                                //   <Text style={styles.todoItem} key={item.id} >{item.name}</Text>
                                // </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default TodoApp

