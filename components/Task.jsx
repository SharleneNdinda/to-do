import React from 'react';
import { Text, StyleSheet, View } from "react-native";

const Task = (props) => {
    return (
        <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
})

export default Task;