import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, LOCATIONS_REF } from "./Config";


export function useFireLocations() {
    const [locations, setLocations] = useState([]);

    useEffect(() =>{
        const q = query(collection(db, LOCATIONS_REF), orderBy('locationText'));

        onSnapshot(q, querySnapshot => {
            setLocations( querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            }));
        } );
    }, []);

    return locations;
}

export function addLocation(locationText){
    addDoc( collection(db, LOCATIONS_REF), {done: false, locationText} )
        .catch(error => console.log(error.message));

    if(locationText.trim() !== ''){
        addDoc( collection(db, LOCATIONS_REF), {done: false, locationText } )
            .catch(error => console.log(error.message));
    }
}