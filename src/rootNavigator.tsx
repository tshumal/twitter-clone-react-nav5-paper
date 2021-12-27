import {createDrawerNavigator} from "@react-navigation/drawer";
import {Text, View} from "react-native";

const Drawer = createDrawerNavigator();

function DrawerContent() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Drawer content</Text>
        </View>
    );
}

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

export const RootNavigator = () => {
    return (
      <Drawer.Navigator drawerContent={ () => <DrawerContent />}>
          <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    );
}