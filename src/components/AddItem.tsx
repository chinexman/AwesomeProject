import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native'


export interface IItem {
    item: string;
    quantity: string;
}

interface Props {
    shoppingList : IItem[];
    setShoppingList : React.Dispatch<React.SetStateAction<IItem[]>>;
}

const AddItem:React.FC<Props> = ({shoppingList,setShoppingList}) => {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('')

    const additem = () =>{
        if(!item){
           Alert.alert("No Item!", 'You need to enter an item');
        }else{
            setShoppingList([
                ...shoppingList, {item, quantity: quantity || '1'}
            ]);
            setItem('');
            setQuantity('');
        }
    }
    return (
        <View>
            <Text style={styles.heading}> Add Shopping Item</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Enter item'
                    value={item}
                    onChangeText={text => setItem(text)}
                ></TextInput>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Quantity'
                    keyboardType='numeric'
                    value={quantity}
                    onChangeText={q => setQuantity(q)}
                ></TextInput>
            </View>

            <TouchableOpacity style={styles.addItemButton} onPress={additem}>
                <Text style={styles.buttonText}>Add Item</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: '700',
    },
    form: {
        marginTop: 30,
    },
    input: {
        padding: 15,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
    },
    addItemButton: {
        backgroundColor: '#eb8634',
        paddingVertical: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: { color: '#fff', fontWeight: '500' },
})

export default AddItem