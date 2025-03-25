import { FlatList, View } from "react-native";
import LocationItem from "./LocationItem";

export function LocationList({locations}){
    return(
        <View>
            <FlatList
                data={locations}
                renderItem={({item}) => <LocationItem locationItem={item}/>}
            />
        </View>
    );
}