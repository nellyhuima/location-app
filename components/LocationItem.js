import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Checkbox, Chip, IconButton, MD3LightTheme } from "react-native-paper";
import { removeLocation } from "../firebase/FirestoreController";

export default function LocationItem({ locationItem }) {
    
    const [done, setDone] = useState(locationItem.done)

    function doneChanged() {
        setDone(!done);
    }

    const colors = MD3LightTheme.colors;

    const chipStyle = {
        ...StyleSheet.locationChip,
        backgroundColor: done ? colors.primaryContainer : colors.onTertiary
    }

    return (
        <View style={styles.locationItem}>
            <Checkbox
                status={done ? 'checked' : 'unchecked'}
                onPress={doneChanged}
            />
            <Chip style={chipStyle}>{locationItem.locationText}</Chip>
            <IconButton
                disabled={!done}
                icon={'trash-can'}
                iconColor='black'
                onPress={() => removeLocation(locationItem.id)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    locationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    locationChip: {
        flex: 1,
        borderWidth: 2,
        paddingVertical: 2
    }
})