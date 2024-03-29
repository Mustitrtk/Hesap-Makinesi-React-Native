import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const Calculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const calculate = (operator) => {
    const num1 = number1;
    const num2 = number2;

    let calculatedResult;

    switch (operator) {
      case '+':
        calculatedResult = parseInt(num1) + parseInt(num2);
        break;
      case '-':
        calculatedResult = num1 - num2;
        break;
      case '*':
        calculatedResult = num1 * num2;
        break;
      case '/':
        calculatedResult = num1 / num2;
        break;
      default:
        return;
    }

    setResult(calculatedResult);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setNumber1}
        value={number1}
        placeholder="Enter number 1"
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setNumber2}
        value={number2}
        placeholder="Enter number 2"
      />
      <View style={styles.buttonContainer}>
        <Button color="#2196F3" onPress={() => calculate('+')} title="+" />
        <Button color="#2196F3" onPress={() => calculate('-')} title="-" />
        <Button color="#2196F3" onPress={() => calculate('*')} title="*" />
        <Button color="#2196F3" onPress={() => calculate('/')} title="/" />
      </View>
      {result ? (
        <View>
          <Text style={styles.result}>Result: {result}</Text>
          <Button 
            buttonStyle={styles.clearButton}
            color="#2196F3"
            onPress={() => { setResult(''); setNumber1(''); setNumber2(''); }} 
            title='Clear'
          />
        </View>
      ) : null}    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 200,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    marginBottom: 10,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:10
  },
});

export default Calculator;
