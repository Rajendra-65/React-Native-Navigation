import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabScreen1 from "./TabScreen1";
import TabScreen2 from "./TabScreen2";

type BottomTabParamsList = {
    TabScreen1 : undefined,
    TabScreen2 : undefined
}

const BottonTab = createBottomTabNavigator()

const TabNavigationDemo : React.FC = () => {
    return (
        <BottonTab.Navigator>
            <BottonTab.Screen name = "TabScreen1" component = {TabScreen1}/>
            <BottonTab.Screen name = "TabScreen2" component = {TabScreen2}/>
        </BottonTab.Navigator>
    )
}

export default TabNavigationDemo;