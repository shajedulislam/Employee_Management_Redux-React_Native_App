import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { registerDatabase } from '@firebase/database';

const Input = ({  value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            
            <TextInput
            secureTextEntry = {secureTextEntry}
            placeholder = {placeholder}
            autoCorrect= {false}
            value= {value}
            onChangeText= {onChangeText}
            style={inputStyle}
            />
        </View>
    );
};

const styles = {

    
    
    inputStyle: {


            
        color: '#000',
         
        fontSize: 18,
        
        flex:1,

       

        marginLeft: 5,
        marginRight: 5,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#007aff',

          

    },
    
    containerStyle: {
        // height: 40,
        flex: 1,
        flexDirection : 'row',
        alignItems: 'center'

    }

    
};

export {Input};