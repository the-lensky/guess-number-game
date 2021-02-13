import React, {useState} from 'react'
import {View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard} from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'


const StartGameScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState('')

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    return (
        <TouchableWithoutFeedback onPress={()=> {Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <Text style={styles.title}> Start a New Game</Text>
                <Card style={styles.inputContainer}>
                    <Text> Select a number</Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitaleze='none'
                        autoCorrect={false}
                        keyboardType='numeric'
                        maxLength={2}
                        value={enteredValue}
                        onChangeText={numberInputHandler}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title='Reset' color={Colors.accent} onPress={() => {
                        }}/></View>
                        <View style={styles.button}><Button title='Confirm' color={Colors.primary} onPress={() => {
                        }}/></View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    button: {
        width: 100
    },
    input: {
        width: 100,
        textAlign: 'center'
    }
})
export default StartGameScreen