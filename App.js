import {NavigationContainer} from "@react-navigation/native";
import StackNavigation from "./navigators/stackNavigator";
import { AuthProvider } from "./context/AuthProvider";
import {CartContextProvider} from "./context/userCartProvider";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <CartContextProvider>
        <StackNavigation/>
        </CartContextProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

