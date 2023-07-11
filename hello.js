import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet} from 'react-native';

const container = StyleSheet.create({
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1
})

const inputFieldStyle = StyleSheet.create({
    height: 50, 
    textAlign: 'center',
    backgroundColor: '#f0fAf5',
    paddingLeft: 20,
    paddingRight: 20,

});

const textStyle = StyleSheet.create({
    fontSize: 30, 
    textAlign: 'center',
});

const nameStyle = StyleSheet.create({
    fontSize: 30, 
    textAlign: 'center',
    fontWeight: 'bold'
});

//conditional rendering of text if bool is valid
function textConst(valid, name){
    if (valid) {
        return (
        <View>
            <Text
                style={textStyle}
                >Hello, I am
            </Text>
                <Text
                style={nameStyle}
                >{name}!
            </Text>
            <Text
            //inline style
            style={{fontSize: 10, textAlign: 'center'}}
            >You can also send an empty input field, {"\n"} to remove the added field....</Text>
        </View>
        )
    } else {
        return null;
    }
}


//function
function Hello() {

    let [name, setName] = useState();
    let [valid, setValid] = useState(false);
    let data = textConst(valid, name);
    return (
        <View>
            <View
            style={container}>
                <TextInput 
                    style={inputFieldStyle}
                    placeholder="Hardy"
                    returnKeyType='send'
                    onSubmitEditing={(event) => {
                        // checks if text sent by user is empty/null, if yes, don't show text
                        if (event.nativeEvent.text.length==0){
                            setValid(false);
                            setName("");
                        } else {
                            //we set the name, we retrieve from the textInput (event data)
                            setName(event.nativeEvent.text);
                            //we set the "valid" variable to true
                            setValid(true);
                        }
                    }}
                />
            </View>
            {data}
        </View>
        
    );
}

export default Hello;