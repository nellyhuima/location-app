import { useState } from "react";
import { Checkbox, IconButton, MD3LightTheme } from "react-native-paper";

export default function LocationItem({ LocationItem }) {
    
    const [done, setDone] = useState(LocationItem.done)

    function doneChanged() {
        setDone(!done);
    }

    const colors = MD3LightTheme.colors;

    const chipStyle = {
        ...Styles.locationChip,
        backgroundColor: done ? colors.primaryContainer : colors.onTertiary
    }

    return (
        <View>
            <Checkbox
                status={done ? 'checked' : 'unchecked'}
                onPress={doneChanged}
            />
            <Chip>{LocationItem.locationText}</Chip>
        </View>
    )
}