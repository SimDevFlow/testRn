import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { addTodo, store } from './store';

const AddTodo = () => {
    const [text, onChangeText] = useState("")
    const handleAddTask = () => {
        const id = Math.floor(Math.random() * (1000 - 50 + 1)) + 50
        const task = {
            "title": text,
            "id": id,
            "completed": false
        }
        try {

            store.dispatch(addTodo(task))
        } catch (error) {
            console.log("errreur")
        }
    }
    return (
        <SafeAreaView style={{ paddingHorizontal: 10 }}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="task title"
                keyboardType="default"
            />
            <TouchableOpacity onPress={handleAddTask} style={styles.button}><Text style={styles.title}>Add</Text></TouchableOpacity>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        backgroundColor: '#000',
        padding: 12
    },
    title: {
        textAlign: 'center',
        color: '#fff'
    }
});

export default AddTodo