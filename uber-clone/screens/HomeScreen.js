import React from 'react';
import { View, Image } from 'react-native';
import NavOptions from '../components/NavOptions';
import NavFavorites from '../components/NavFavorites';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

export default function HomeScreen() {
    const dispatch = useDispatch();
    return (
        <View className='pt-10 bg-white h-full'>
            <View className='p-5'>
                <Image 
                    source={{uri:'https://links.papareact.com/gzs'}}
                    className='w-24 h-24 object-fill'
                    style={{resizeMode:'contain'}}
                />
                <GooglePlacesAutocomplete 
                    nearbyPlacesAPI='GooglePlacesSearch'
                    placeholder='Where From?'
                    debounce={400}
                    styles={{container: {flex: 0}, textInput: {fontSize: 18}}}
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }));
                        dispatch(setDestination(null));
                    }}
                    fetchDetails={true}
                    returnKeyType={'search'}
                />
                <NavOptions />
                <NavFavorites />
            </View>
        </View>
    )
}