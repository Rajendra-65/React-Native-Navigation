import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "./screens/HomeScreen"
import StackNavigationDemo from "./components/stack/StackNavigationDemo"
import TabNavigationDemo from "./components/tab/TabScreenNavigationDemo";

export type RootStackParamsList = {
    Home : undefined,
    StackDemo : undefined,
    TabDemo : undefined,
}


const stack = createStackNavigator<RootStackParamsList>();

const RootNavigator : React.FC = () => {
    return(
        <stack.Navigator>
            <stack.Screen name = "Home" component = {HomeScreen}/>
            <stack.Screen name = "StackDemo" component = {StackNavigationDemo}/>
            <stack.Screen name = "TabDemo" component = {TabNavigationDemo}/>
        </stack.Navigator>
    )
}

export default RootNavigator;