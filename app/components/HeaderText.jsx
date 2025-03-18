import { Text, StyleSheet } from 'react-native'
import React from 'react'

const HeaderText = ({ children }) => {
    return (
        <Text style={style.header}>{children}</Text>
    )
}
const style = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: 'bold'
    }
})

export default HeaderText