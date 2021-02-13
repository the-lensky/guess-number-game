import React from 'react'
import {TextInput, StyleSheet} from 'react-native'

const Input = (props) => {
    return (
        <TextInput {...props} style={{...styles.input, ...props.styles}}>

        </TextInput>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'purple',
        borderBottomWidth: 1,
        marginVertical: 10,
    }
})


export default Input