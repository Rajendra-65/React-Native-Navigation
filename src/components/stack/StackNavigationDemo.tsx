import { createStackNavigator } from "@react-navigation/stack";
import stackScreen1 from "./StackScreen1";
import StackScreen2 from "./StackScreen2";
import StackScreen3 from "./StackScreen3";

export type  StackParamsList = {
    StackScreen1 : undefined;
    StackScreen2 : {
        itemId : number
    }
}

const stack = createStackNavigator()

const StackNavigationDemo : React.FC = () => {
    return <stack.Navigator>
        <stack.Screen name="stackScreen1" component = {stackScreen1}/>
        <stack.Screen options = {({route})=>({
            title : `Item ${route?.params?.itemId}`
        })} name="StackScreen2" component = {StackScreen2}/>
        <stack.Screen name="stackScreen3" component = {StackScreen3}/>
    </stack.Navigator>
}

export default StackNavigationDemo;