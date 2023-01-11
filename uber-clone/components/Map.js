import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

export default function Map() {
    const origin = useSelector(selectOrigin);
    return (
        <MapView
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            className='flex-1'
        >
            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.latitude,
                        longitude: origin.location.longitude
                    }}
                    title='Origin'
                    description={origin.description}
                    identifier='origin'
                />
            )}
        </MapView>
    )
}