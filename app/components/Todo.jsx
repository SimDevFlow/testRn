import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Separator = () => <View style={{
    marginVertical: 8,
    backgroundColor: '#000',
    width: '100%',
    height: 1
}} />;

const Todo = ({ content, completed }) => {
    return (
        <View style={{paddingHorizontal:10}}>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
                <TouchableOpacity>
                    {
                        completed ? <MaterialCommunityIcons name="radiobox-marked" size={24} color="black" /> :
                            <MaterialCommunityIcons name="radiobox-blank" size={24} color="black" />
                    }
                </TouchableOpacity>
                <Text style={{ color: "#000", fontSize: 18, marginLeft: 8 }}>{content}</Text>
            </View>
            <Separator />
        </View>
    )
}

export default Todo