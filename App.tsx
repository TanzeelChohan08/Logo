import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "./src/routes/RootNavigator";
import { ThemeProvider } from "./src/utils/ThemeContext";
import { LanguageProvider } from "./src/utils/LanguageContext";

const App = ({ }: any) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <LanguageProvider>
          <ThemeProvider>
            <RootNavigator />
          </ThemeProvider>
    </LanguageProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView >
  )
}

export default App;