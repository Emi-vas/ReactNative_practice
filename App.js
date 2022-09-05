import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';

export default function App() {
  const [addNew, setAddNew] = useState(false)

  const [todos, setTodos] = useState([
    {body: "Medit", key: "1"},
    {body: "Code", key: "2"},
    {body: "Sport", key: "3"},
    {body: "Change the world", key: "4"},
  ])

  return (
    <TouchableWithoutFeedback
      onPress={()=> Keyboard.dismiss()}
    >
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
          <Button 
            title={addNew ? "Display List" : 'Add New'}
            onPress={()=> setAddNew(!addNew)}
           />
          
          {
            addNew ? <Form setTodos={setTodos} todos={todos} setAddNew={setAddNew}/> : <List todos={todos} setTodos={setTodos} />
          }
      </View>

    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30
  },
  content: {
    flex: 0.95
  },

});