import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, TextInput } from 'react-native';



const Form = ({ setTodos, todos, setAddNew }) => {

    const [valueNewTodo, setValueNewTodo] = useState('')
    const [err, setErr] = useState(false)

    const addTodo = () => {
        if(valueNewTodo.length < 3) {
            setErr(true)
            return false
        }


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
            {
                err && <Text style={styles.err}>Short task is the key, but this is TOO short !</Text>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        textAlign: "center",
        paddingVertical: 30,
        fontSize: 15
    },
    err: {
        textAlign: "center",
        padding: 20,
        backgroundColor: '#d02d2d',
        color: "white",
        fontSize: 15
    }
})

export default Form;