import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import NavFavorites from './NavFavorites';

export default function NavigateCard() {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <View className='pb-10 bg-white flex-1'>
            <Text className='text-center py-5 text-xl'>Good Morning, Ryan.</Text>
            <View className='border-t border-gray-200 flex-shrink'>
                <View>
                    <View className='flex-row'>
                        <GooglePlacesAutocomplete 
                            nearbyPlacesAPI='GooglePlacesSearch'
                            placeholder='Where to?'
                            debounce={400}
                            styles={{container: {flex: 1, paddingTop: 20, backgroundColor: 'white'}, textInput: {fontSize: 18, borderRadius: 0, backgroundColor: '#DDDDDF'}, textInputContainer: {paddingHorizontal: 20, paddingBottom: 0}}}
                            onPress={(data, details = null) => {
                                dispatch(setDestination({
                                    location: details.geometry.location,
                                    description: data.description
                                }));
                            }}
                            fetchDetails={true}
                            returnKeyType={'search'}
                        />
                        <TouchableOpacity className='items-center pt-5' onPress={() => navigation.navigate('RideOptionsCard')}>
                            <Text className='text-lg font-semibold py-2 pr-5 '>Continue</Text>
                        </TouchableOpacity>
                    </View>
                    <NavFavorites />
                    <View className='flex-row space-x-2 mx-5'>
                        <TouchableOpacity onPress={() => navigation.navigate('RideOptionsCard')} className='flex-row bg-black w-24 px-4 py-3 rounded-full space-x-2'>
                            <Icon name='car' type='font-awesome' color='white' size={16} />
                            <Text className='text-white text-center'>Rides</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='flex-row bg-black space-x-2 w-24 px-4 py-3 rounded-full'>
                            <Icon name='fast-food-outline' type='ionicon' color='white' size={16} />
                            <Text className='text-center text-white'>Eats</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}