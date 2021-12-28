import {createDrawerNavigator} from "@react-navigation/drawer";
import {DrawerContent} from "./drawerContent";
import {StackNavigator} from "./stackNavigator";

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
    return (
      <Drawer.Navigator drawerContent={ props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={StackNavigator} />
      </Drawer.Navigator>
    );
}