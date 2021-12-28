import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {getFocusedRouteNameFromRoute, RouteProp, useIsFocused} from "@react-navigation/native";
import { StackNavigatorParamlist } from "../data/types";
import {FAB, overlay, Portal, useTheme} from "react-native-paper";
import {useSafeArea} from "react-native-safe-area-context";
import color from "color";
import {Feed} from "../screens/feed";
import React from "react";
import {Notifications} from "../screens/notifications";
import {Message} from "../screens/message";

const Tab = createMaterialBottomTabNavigator();

type Props = {
    route: RouteProp<StackNavigatorParamlist, 'FeedList'>;
};

export const BottomTabs = (props: Props) => {

    const routeName = getFocusedRouteNameFromRoute(props.route) ?? 'Feed';
    const theme = useTheme();
    const safeArea = useSafeArea();
    const isFocused = useIsFocused();

    let icon: string;

    switch (routeName) {
        case 'Messages':
            icon = 'email-plus-outline';
            break;
        default:
            icon = 'feather';
            break;
    }

    const tabBarColor = theme.dark
        ? (overlay(6, theme.colors.surface) as string)
        : theme.colors.surface;

    return (
        <React.Fragment>
            <Tab.Navigator
                initialRouteName="Feed"
                backBehavior="initialRoute"
                shifting={true}
                activeColor={theme.colors.primary}
                inactiveColor={color(theme.colors.text)
                    .alpha(0.6)
                    .rgb()
                    .string()}
                sceneAnimationEnabled={false}
            >
                <Tab.Screen
                    name="Feed"
                    component={Feed}
                    options={{
                        tabBarIcon: 'home-account',
                        tabBarColor,
                    }}
                />
                <Tab.Screen
                    name="Notifications"
                    component={Notifications}
                    options={{
                        tabBarIcon: 'bell-outline',
                        tabBarColor,
                    }}
                />
                <Tab.Screen
                    name="Messages"
                    component={Message}
                    options={{
                        tabBarIcon: 'message-text-outline',
                        tabBarColor,
                    }}
                />
            </Tab.Navigator>
            <Portal>
                <FAB
                    visible={isFocused}
                    icon={icon}
                    style={{
                        position: 'absolute',
                        bottom: safeArea.bottom + 65,
                        right: 16,
                    }}
                    color="white"
                    theme={{
                        colors: {
                            accent: theme.colors.primary,
                        },
                    }}
                    onPress={() => {}}
                />
            </Portal>
        </React.Fragment>
    );
};
