import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={{ marginHorizontal: "auto", width: "100%", marginBottom: 10 }}><Text>Name: {name}</Text></View>
        <TextInput style={{
          borderColor: "blue",
          borderWidth: 1,
          width: 200,
          padding: 15,
          marginBottom: 20
        }} multiline={true} onChangeText={(value) => { setName(value) }} />
        <Text style={{ fontSize: 40, fontWeight: "600" }}>Count {count}</Text>
        <View style={styles.buttonContainer}>
          <Button title='Increase' onPress={() => { setCount(count + 1) }} />
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  },
  formContainer: {
    borderColor: "hotpink",
    borderWidth: 1,
    width: "80%",
    paddingHorizontal: 40,
    paddingVertical: 80,
    justifyContent: "center",
    alignItems: "center"
  }
});
