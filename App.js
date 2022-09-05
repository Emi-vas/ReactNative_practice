import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';

export default function App() {
  const [addNew, setAddNew] = useState(false)

  const [todos, setTodos] = useState([
    {body: "Medit", key: "1"},
    {body: "Code", key: "2"},
    {body: "Sport", key: "3"},
    {body: "Change the world", key: "5"},
  ])

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
          <Button 
            title={addNew ? "Display List" : 'Add New'}
            onPress={()=> setAddNew(!addNew)}
           />
          
          {
            addNew ? (
              <Form />
            ) : (
              <List todos={todos} />
            )
          }
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30
  },
  content: {

  },

});