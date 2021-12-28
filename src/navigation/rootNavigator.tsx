import {createDrawerNavigator} from "@react-navigation/drawer";
import {Text, View} from "react-native";
import {DrawerContent} from "./drawerContent";

const Drawer = createDrawerNavigator();



function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

export const RootNavigator = () => {
    return (
      <Drawer.Navigator drawerContent={ props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    );
}