import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from "./bottomTabNavigator";
import Login from "../screen/login";


const Stack = createNativeStackNavigator();

export default function StackNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home"
             component={BottomTabNavigator}
            options={{ headerShown: false }}/>
            <Stack.Screen name="login" component={Login}/>
        </Stack.Navigator>
    );
}