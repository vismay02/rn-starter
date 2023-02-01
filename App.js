import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import componentScreen from "./src/screens/ComponentScreen";
import listScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ImageDetailscreen from "./src/screens/components/ImageDetails";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import ColorCounter from "./src/screens/components/ColorCounter";
import TextScreen from "./src/screens/TextScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: componentScreen,
    List: listScreen,
    Image: ImageScreen,
    ImageDetail: ImageDetailscreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square:SquareScreen,
    ColorCounter:ColorCounter,
    Text:TextScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
