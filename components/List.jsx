import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';


const List = ({ todos }) => {
    return (
        <View style={styles.list}>
            <FlatList 
                data={todos}
                renderItem={({ item }) => (
                <Text style={styles.text}> {item.body} </Text>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    list: {
      marginTop: 20
    },
    text: {
      fontSize: 17,
      backgroundColor: "#2f64a1",
      color: "white",
      margin: 7,
      padding: 30,
  
    }
  
  });

export default List;