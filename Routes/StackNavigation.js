import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../Screen/Home";
import Detail from "../Screen/Detail";
import Header from "../Shared/Header";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: function(){
      return {
        headerTitle: function(){
          return (
            <Header title="Contact management" />
          )
        }
      }
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: function(){
      return {
        headerTitle: function(){
          return (
            <Header title="Contact details" />
          )
        }
      }
    }
  }
};

const stack = createStackNavigator(screens);

export default createAppContainer(stack);