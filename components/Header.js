import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingVertical: 10,
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        color: "#2f64a1"
    }
})

export default Header;