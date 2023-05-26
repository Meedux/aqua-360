import { SafeAreaProvider } from "react-native-safe-area-context";
import AppContext from "./app/appcontext";
import Navibar from "./components/Navibar";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <AppContext>
          <Navibar />
        </AppContext>
      </SafeAreaProvider>
    </>
  );
}

