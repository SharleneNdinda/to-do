import { Text, StyleSheet, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from "react-native";


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
      
      {/* Write a task */}
      <KeyboardAvoidingView style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} />
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text  style={styles.addText}>
              +
            </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
      
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
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#DCD7C9',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
    addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    backgroundColor: '#FFF',
      
  },
  addText: {
  
  },
});
