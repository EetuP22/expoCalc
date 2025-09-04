import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Calculator({ navigation }) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(isNaN(sum) ? 0 : sum);

    if (!isNaN(sum)) {
      const newEntry = `${num1} + ${num2} = ${sum}`;
      setHistory([newEntry, ...history]);
    }
  };

  const handleSubtraction = () => {
    const diff = parseFloat(num1) - parseFloat(num2);
    setResult(isNaN(diff) ? 0 : diff);

    if (!isNaN(diff)) {
      const newEntry = `${num1} - ${num2} = ${diff}`;
      setHistory([newEntry, ...history]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Result: {result}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="First number"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Second number"
        value={num2}
        onChangeText={setNum2}
      />

      <View style={styles.row}>
        <Button title="+" onPress={handleAddition} />
        <Button title="-" onPress={handleSubtraction} />
        <Button
          title="History"
          onPress={() => navigation.navigate('History', { history })}
        />
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
    paddingTop: 40,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    width: 130,
  },
});
