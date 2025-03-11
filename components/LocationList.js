import { FlatList } from "react-native";

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