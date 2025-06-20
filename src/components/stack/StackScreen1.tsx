import React from "react";
import { View,Text } from "react-native"
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamsList } from "./StackNavigationDemo";

type stackScreenNavigationProp = StackNavigationProp<StackParamsList,'StackScreen1'>

const StackScreen1 : React.FC = () => {
    const navigation = useNavigation<stackScreenNavigationProp>();
    return(
        <View>
            <Text>Hello StackScreen 1</Text>
            <Button onPress = {()=>navigation.navigate('StackScreen2',{itemId:100})} title = "Go to stack Screen 2"/>
        </View>
    )
}

export default StackScreen1;