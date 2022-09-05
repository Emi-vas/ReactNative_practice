import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, TextInput } from 'react-native';



const Form = ({ setTodos, todos, setAddNew }) => {

    const [valueNewTodo, setValueNewTodo] = useState('')

    const addTodo = () => {
        const getKey = () => {
            console.log()
            const lastKey = todos[todos.length -1].key
            return parseInt(lastKey) + 1
        }
        setAddNew(false)
        setTodos([...todos, {body: valueNewTodo, key: getKey() }])
        

    }

    return (
        <View>
            <TextInput 
                placeholder='Task...'
                onChangeText={(value) => setValueNewTodo(value)}
                style={styles.textInput}
            />
            <Button 
                title='Add'
                onPress={addTodo}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        textAlign: "center",
        paddingVertical: 30,
        fontSize: 15
    }
})

export default Form;