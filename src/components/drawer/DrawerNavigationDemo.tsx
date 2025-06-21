import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native";
import { Text } from "react-native";

const Drawer = createDrawerNavigator();

const DrawerScreen1 : React.FC = () => {
    return <View>
            <Text>Drawer Screen 1</Text>
    </View>
}

const DrawerScreen2 : React.FC = () => {
    return <View>
        <Text>Drawer Screen 2</Text>
    </View>
}

const DrawerNavigationDemo : React.FC = () => {
    return <Drawer.Navigator>
        <Drawer.Screen name = "DrawerScreen1" component = {DrawerScreen1}/>
        <Drawer.Screen name = "DrawerScreen2" component = {DrawerScreen2}/>
    </Drawer.Navigator>
}

export default DrawerNavigationDemo;