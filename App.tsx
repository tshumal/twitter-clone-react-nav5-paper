import React from 'react';
import {
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
    Provider as PaperProvider,
} from 'react-native-paper';
import {DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme, NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from "./src/navigation/rootNavigator";
import { PreferencesContext } from './src/context/preferencesContext';

const CombinedDarkTheme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    colors: { ...PaperDarkTheme.colors, ...NavigationDarkTheme.colors },
};

const CombinedDefaultTheme = {
    ...PaperDefaultTheme,
    ...NavigationDefaultTheme,
    colors: { ...PaperDefaultTheme.colors, ...NavigationDefaultTheme.colors },
};

export default function App(this: any) {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    let theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme; // Use Light/Dark theme based on a state

    const toggleTheme = React.useCallback(() => {
        // We will pass this function to Drawer and invoke it on theme switch press
        return setIsDarkTheme(!isDarkTheme);
    }, [isDarkTheme]);

    const preferences = React.useMemo(
        () => ({
            toggleTheme,
            isDarkTheme,
        }),
        [toggleTheme, isDarkTheme]
    );

  // @ts-ignore
    return (
        // Context is wired into the local state of our main component, so that its values could be propagated throughout the entire application
        <PreferencesContext.Provider value={preferences}>
            <PaperProvider theme={theme}>
                <NavigationContainer theme={theme}>
                    <RootNavigator />
                </NavigationContainer>
            </PaperProvider>
        </PreferencesContext.Provider>
  );
}