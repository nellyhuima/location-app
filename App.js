import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Button, MD3LightTheme, PaperProvider, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { addLocation, removeAllAlert, useFireLocations } from "./firebase/FirestoreController";
import { LocationList } from "./components/LocationList";

export default function App() {

    const [location, setLocation] = useState('');
    const locations = useFireLocations();

    return (
        <PaperProvider>
            <SafeAreaView style={StyleSheet.container}>
                <Text variant='headlineMedium'>
                    Locations ({locations ? locations.length : 0})
                </Text>
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
                <LocationList locations={locations}/>
                <Button mode='contained' onPress={removeAllAlert}>
                    Remove all locations
                </Button>
            </SafeAreaView>
        </PaperProvider>
    )
}