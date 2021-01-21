import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';

export default function App() {

  const [input, setInput] = useState('');
  const [message, setMessage] = useState('Guess a number between 1-100');
  const [number, setNumber] = useState((Math.floor(Math.random() * 100) + 1));
  const [guess, setGuess] = useState(0);


  const buttonPressed = (userNumber) => {
    (parseInt(userNumber) < number) ? (
      setGuess(guess + 1),
      setMessage(`Your guess ${input} is too low`))
      : (parseInt(userNumber) > number) ? (
        setGuess(guess + 1),
        setMessage(`Your guess ${input} is too high`))
        : (parseInt(userNumber) == number) ? Alert.alert(`You guessed the number ${input} in ${guess} guesses!`)
          : setMessage(
            setGuess(guess + 1),
            (`${input} is not a number, try again!`))
  }

  const buttonReset = () => {
    setMessage('Guess a number between 1-100');
    setNumber((Math.floor(Math.random() * 100) + 1));
    setGuess(0);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.text}>{message}</Text>

      <TextInput

        placeholder=""

        style={styles.TextInputStyle}

        keyboardType={'numeric'}

        onChangeText={(input) => setInput(input)}
        value={input}

      />

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="MAKE GUESS" onPress={() => buttonPressed(input)} /></View>
        <View style={styles.resetbutton}>
          <Button title="RESET" color="red" onPress={() => buttonReset()} />
        </View>
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

  TextInputStyle: {

    textAlign: 'center',
    width: 100,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 25
  },

  text: {
    fontSize: 18
  },
  buttonContainer: {
    flexDirection: 'row',
    //justifyContent: 'space-between'

  },
  button: {
    width: '45%',
    height: 40,

    // justifyContent: 'space-between',
    padding: 15
  },

  resetbutton: {
    width: '45%',
    height: 40,
    padding: 15,


  }

});


