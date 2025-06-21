import { View, Text } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamsList } from './StackNavigationDemo'
import { RouteProp } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import { Button } from 'react-native'

type StackScreen2NavigationProp = StackNavigationProp<
  StackParamsList,
  'StackScreen2'
>

type StackScreen2RouteProp = RouteProp<StackParamsList,'StackScreen2'>

export default function StackScreen2() {

  const navigation = useNavigation<StackScreen2NavigationProp>()
  const route = useRoute<StackScreen2RouteProp>()
  return (
    <View>
      <Text>StackScreen2</Text>
      <Text>Item Id : {route.params.itemId}</Text>
      <Button 
        title = "Go back to stack screen1"
        onPress = {()=>navigation.goBack()}
      />
    </View>
  )
}