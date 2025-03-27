import { Text, StyleSheet, View, SafeAreaView } from "react-native";


import Task from '../components/Task';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tasksWrapper}>

        <Text style={styles.sectionTitle}>Today's Tasks</Text>
      <View style={styles.items}>
          <Task text={'Task one'} />
          <Task text={'Task two'} />
          <Task text={'Task three'} />
      </View>
    </View>
    </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#2C3930',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  items: {
    marginTop: 30,
  }
});
