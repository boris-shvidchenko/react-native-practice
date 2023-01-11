import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

export default function MapScreen() {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} className='absolute top-10 left-8 z-50 p-3 rounded-full shadow-lg bg-gray-100'>
                <Icon name='menu'/>
            </TouchableOpacity>
            <View className='h-1/2'>
                <Map />
            </View>
            <View className='h-1/2'>
                <Stack.Navigator>
                    <Stack.Screen
                        name='NavigateCard'
                        component={NavigateCard}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name='RideOptionsCard'
                        component={RideOptionsCard}
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
            </View>
        </View>
    )
}