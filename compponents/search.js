import React from 'react'
import {TextInput,Text, View,StyleSheet,Button} from 'react-native'

export default class Search extends React.Component {

    constructor(props){
        super(props)
        this.state={
            city:'Yaounde'
        }
    }

    setCity(text){
        this.setState({
            city:text
        })
    }


    render(){
        return(

           <View> 
            <TextInput
            underlineColorAndroid='transparent'
            onChangeText={(text)=>this.setCity(text)}
            value={this.state.city}
            style={style.input}
            />
            <Button      
                title="Learn More"
                color="#841584"
                onPress={()=>alert(this.state.city)}
                accessibilityLabel="Learn more about this purple button"
            />
            </View>
        )
            
        
    }
}

const style=StyleSheet.create({
    input:{
        marginLeft:10 ,
        marginTop:50,
        marginRight:10,
        marginBottom:10, 
        height: 40, 
        borderColor: 'red',
        borderWidth: 1 
        }   
})


