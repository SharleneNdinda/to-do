import { Text, StyleSheet, View } from "react-native";
import Task from '../components/Task';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>

        <Text style={styles.sectionTitle}>Today's Tasks</Text>
      <View style={styles.items}>
          <Task text={'Task one'} />
          <Task text={'Task two'} />
          <Task text={'Task three'} />
      </View>
    </View>
    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {}
});
