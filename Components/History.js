import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function History({ route }) {
    const { history } = route.params;

    return (
        <View style={styles.container}>
           <Text style={styles.title}>History</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    fontSize: 16,
    marginVertical: 4,
    textAlign: 'center',
  },
});