import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Movie from "../screens/Movie";

export default createAppContainer(
  createStackNavigator(
    {
      Movie,
      Home
    },
    {
      initialRouteName: "Home"
    }
  )
);
