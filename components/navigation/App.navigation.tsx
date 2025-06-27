import React from 'react'
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../review/Home';
import Detail from '../review/Detail';
import About from '../review/About';
import AppHeader from './App.header';
import { RootStackParamList } from '../../types/route';

const HomeLayout = () => {

    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <Stack.Navigator>
            {/* Nếu truyền vào title -> nhận vào string để thay đổi tiêu đề và dùng header mặc định của Stack, nếu truyền vào option là header có thể nhận vào 1 function componnent -> Ta có thể lợi dụng điều này để design ra 1 header theo ý thích sau đó truyền vào để Stack naavigation hiểu */}
            <Stack.Screen name="Home1" component={Home} options={{ header: () => <AppHeader /> }} />
            <Stack.Screen name="Details" component={Detail} options={{ title: 'Chi tiết review' }} />
        </Stack.Navigator>
    )
}

const AppNavigation = () => {
    const Drawer = createDrawerNavigator();
    return (
        //  screenOptions={{ headerShown: false }: false -  trong Drawer.Navigator - dùng để ẩn thanh header mặc đinh của drawler trường hợp bị trùng với header của Stack.
        <Drawer.Navigator >
            <Drawer.Screen name="Home" component={HomeLayout} options={{ header: () => <></> }} />
            <Drawer.Screen name="About" component={About} options={{ header: () => <AppHeader /> }} />
        </Drawer.Navigator>
    )
}

export default AppNavigation