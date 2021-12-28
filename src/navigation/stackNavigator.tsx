import {createStackNavigator} from "@react-navigation/stack";
import {Appbar, Avatar, useTheme} from "react-native-paper";
import {TouchableOpacity} from "react-native";
import {DrawerNavigationProp} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Feed} from "../screens/feed";
import {Details} from "../screens/details";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { getHeaderTitle } from '@react-navigation/elements';
import {BottomTabs} from "./bottomTabNavigator";



const Stack = createStackNavigator();

export const StackNavigator = () => {
    const theme = useTheme();
    return (
        <Stack.Navigator
            initialRouteName="FeedList"
            screenOptions={{
                header: ({ navigation, route, options, back }) => {
                    const title = getHeaderTitle(options, route.name);

                    return (
                        <Appbar.Header
                            theme={{ colors: { primary: theme.colors.surface } }}
                        >
                            {back ? (
                                <Appbar.BackAction
                                    onPress={navigation.goBack}
                                    color={theme.colors.primary}
                                />
                            ) : (
                                <TouchableOpacity
                                    style={{ marginLeft: 10 }}
                                    onPress={() => {
                                        ((navigation as any) as DrawerNavigationProp<{}>).openDrawer();
                                    }}
                                >
                                    <Avatar.Image
                                        size={40}
                                        source={{
                                            uri:
                                                'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                                        }}
                                    />
                                </TouchableOpacity>
                            )}
                            <Appbar.Content
                                title={
                                    title === 'Feed' ? (
                                        <MaterialCommunityIcons
                                            style={{ marginRight: 10 }}
                                            name="twitter"
                                            size={40}
                                            color={theme.colors.primary}
                                        />
                                    ) : (
                                        title
                                    )
                                }
                                titleStyle={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: theme.colors.primary,
                                }}
                            />
                        </Appbar.Header>
                    );
                },
            }}
        >
            <Stack.Screen
                name="FeedList"
                component={BottomTabs}
                options={({ route }) => {
                    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
                    return { headerTitle: routeName };
                }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{ headerTitle: 'Tweet' }}
            />
        </Stack.Navigator>
    );
};