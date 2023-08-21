import {NavigationContainer} from "@react-navigation/native";
import StackNavigation from "./navigators/stackNavigator";
// import Layout from './layout';

export default function App() {
  return (
    <NavigationContainer>
       <StackNavigation/>
    </NavigationContainer>
  );
}

