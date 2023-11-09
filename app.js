import { db } from './firebase.js';
import { collection, getDocs } from 'firebase/firestore';

let map;

window.initMap = async function() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 }, // Default center of the map
        zoom: 8
    });

    // Fetch stations from Firestore and add markers
    const querySnapshot = await getDocs(collection(db, "stations"));
    querySnapshot.forEach((doc) => {
        const station = doc.data();
        const position = new google.maps.LatLng(station.latitude, station.longitude);
        const marker = new google.maps.Marker({
            position: position,
            map: map,
            title: station.name // Assuming 'name' is a field in the station document
        });
    });
};
