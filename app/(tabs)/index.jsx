import { View, Text, StyleSheet, TouchableOpacity, Switch, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react'
import HeaderText from '../components/HeaderText'
import { store } from '../store';
import Todo from '../components/Todo';
import { useNavigation } from '@react-navigation/native';

const MainPage = () => {
    const data = store.getState()
    const [todos, setTodos] = useState(data)
    store.subscribe(() => { setTodos(store.getState()), console.log("state changed") })
    const navigation = useNavigation()

    return (
        <SafeAreaView style={style.mainContainer}>
            <View style={{ flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <HeaderText>Tasks</HeaderText>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('AddTodo', { name: 'Add task', })
                }>
                    <Ionicons name="add-circle" size={34} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={todos}
                renderItem={({ item }) => <Todo content={item.title} completed={item.completed} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    mainContainer: {
        paddingTop: 10
    }
})

export default MainPage