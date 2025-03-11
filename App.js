import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { addLocation, useFireLocations } from "./firebase/FirestoreController";
import { MD3LightTheme, PaperProvider, TextInput } from "react-native-paper";
import { useState } from "react";

export default function App() {

  const [location, setLocation] = useState('');
  const locations = useFireLocations();

  return(
    <PaperProvider>
      <SafeAreaView>
        <TextInput
        label={'New location'}
        value={location}
        onChangeText={setLocation}
        right={
          <TextInput.Icon
            icon={'plus-circle'}
            onPress={( )=> addLocation(location)}
            size={32}
            color={MD3LightTheme.colors.primary}
            />
          }
        />
      </SafeAreaView>
    </PaperProvider>
  )
}


