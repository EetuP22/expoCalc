import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(isNaN(sum) ? 0: sum);
  };

  const handleSubstraction = () => {
    const diff = parseFloat(num1) - parseFloat(num2);
    setResult(isNaN(diff) ? 0: diff);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Result: {result}</Text>
      <TextInput
       style={{ width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
       keyboardType='numeric'
       placeholder='First number'
       value = {num1}
       onChangeText={setNum1}
       />

       <TextInput
       style={{ width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
       keyboardType='numeric'
       placeholder='Second number'
       value = {num2}
       onChangeText={setNum2}
       />
       <View style={styles.row}>
        <Button title ='+' onPress={handleAddition}/>
        <Button title = '-' onPress={handleSubstraction}/>
       </View>
      <StatusBar style="auto" />
       
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

  resultText: {
    fontSize: 18,
    marginBottom: 10
  },

  row: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    width: 50
  },
});
