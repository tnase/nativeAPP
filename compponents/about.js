import React from 'react';
import { View ,Text, StyleSheet ,ActivityIndicator} from 'react-native';



export default class About extends React.Component{

render(){
    return(

        <View style={style.view}>
            <Text style={style.title}>A propos de moi</Text>
            <Text>lorem ipsum   </Text>

            <ActivityIndicator style={style.view} size="large" color="red" />

        </View>

    )
        
    
}

}

const style=StyleSheet.create({
    view:{
        margin:20

    },
    
    title: {
        fontSize:22,
        margin:50
    }
})