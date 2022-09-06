import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

const List = ({ todos, setTodos }) => {
  const [confirm, setConfirm] = useState(false)

  const handleClicItem = (item) => {
    if(confirm.id == item.key) {
      setConfirm(false)
    } else {
      setConfirm({id : item.key})
    }
  }

  const deleteItem = () => {
    setTodos((prevTodo) => {
        return prevTodo.filter(elem => elem.key != confirm.id)
    })
  }

    return (
        <View style={styles.list}>
            <FlatList 
                data={todos}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={()=> handleClicItem(item)}
                    style={styles.elem}
                  >
                    <Text style={styles.text}> {item.body} </Text>
                    {
                      confirm.id == item.key && (
                        <TouchableOpacity style={styles.confirm} onPress={deleteItem}>
                            <AntDesign name="checkcircleo" size={50} color="white" style={styles.icon} />
                        </TouchableOpacity>
                        )
                    }
                  </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    list: {
      marginTop: 20,
    },
    text: {
      fontSize: 17,
      backgroundColor: "#2f64a1",
      color: "white",
      marginVertical: 7,
      padding: 30,
      flex: 1
  
    },
    elem: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center"
    },
    confirm: {
      backgroundColor: "#81bcff",
    },
    confirmText: {
      color: "white",
      padding: 10,
      fontSize: 22
    },
    icon: {
      padding: 7,
      paddingHorizontal: 20
    }
  
  });

export default List;