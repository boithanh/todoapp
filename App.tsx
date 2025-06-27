import About from "./components/review/About";
import Detail from "./components/review/Detail";
import Home from "./components/review/Home";
import TodoApp, { ITodo } from "./components/TodoApp";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { OPENSANS_REGULAR } from "./utils/Const";
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from "./components/navigation/App.navigation";
import { SafeAreaView } from "react-native-safe-area-context";


SplashScreen.preventAutoHideAsync();

const myTodo: ITodo = {
  id: 1,
  name: 'Học React Native'
};

export default function App() {
  const [loaded, error] = useFonts({
    [OPENSANS_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }



  return (
    // <TodoApp todo={myTodo} />
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}
