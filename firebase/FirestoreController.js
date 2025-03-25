import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import { cloneElement, useEffect, useState } from "react";
import { db, LOCATIONS_REF } from "./Config";
import { Alert } from "react-native";

export function useFireLocations() {
    const [locations, setLocations] = useState([]);

    useEffect(()=>{
        const q = query(collection(db, LOCATIONS_REF), orderBy('locationText'));

        onSnapshot(q, QuerySnapshot => {
            setLocations(QuerySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            }));
        } );
    }, []);

    return locations;
}

export function addLocation(locationText){
    addDoc( collection(db, LOCATIONS_REF), {done: false, locationText} )
        .catch(error => console.log(error.message));
}

export function removeLocation(id) {
    deleteDoc(doc(db, LOCATIONS_REF, id))
        .catch(error => console.log(error.message));
}

export function removeAllLocations() {
    getDocs(collection(db, LOCATIONS_REF))
        .then( docs =>  {
            docs.forEach( doc => {
                removeLocation(doc.id)
            })
        })
        .catch(error => console.log(error.message) );
}

export function removeAllAlert() {
    Alert.alert('Location list', 'Remove all locations?', [
        { text: 'Cancel' },
        { text: 'Ok', onPress: removeAllLocations},
    ]);
}