import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

interface ITodo {
  id: number,
  name: string
}
export default function App() {
  const [todo, setTodo] = useState<string>("hihi");
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
    const newsTodos = listTodo.filter(item => item.id !== id);
    setListTodo(newsTodos);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.header}>Todo App</Text>
        {/* form */}
        <View style={styles.body}>
          <TextInput value={todo} autoCapitalize='sentences' style={styles.todoInput} onChangeText={(value) => { setTodo(value) }} />
          <Button title='Add todo' onPress={handleAddTodo} />
        </View>
        {/* list todo */}
        <View style={styles.todoContainer}>
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
                  <Text style={styles.todoItem} key={item.id} >{item.name}</Text>
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
  );
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
    fontSize: 40,
    color: "#313638"
  },
  todoInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#313638",
    padding: 5,
    margin: 15

  },
  todoContainer: {
    paddingHorizontal: 20
  },
  todoItem: {
    fontSize: 20,
    borderWidth: 1,
    marginBottom: 10,
    borderStyle: "dashed",
    padding: 10,
    backgroundColor: "#E4B363",
    borderColor: "#313638",
    color: "#313638"
  },
  body: {
    paddingHorizontal: 20,
    marginBottom: 20
  }
});
