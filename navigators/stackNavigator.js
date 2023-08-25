import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from "./bottomTabNavigator";
import Login from "../screen/login";
import SignUp from "../screen/signup";
import ProductDetail from "../screen/productDetail";


const Stack = createNativeStackNavigator();

export default function StackNavigation(){
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home"
             component={BottomTabNavigator}
            options={{ headerShown: false }}/>
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="Sign Up" component={SignUp}/>
            <Stack.Screen name="Product Details" component={ProductDetail }/>
        </Stack.Navigator>
    );
}