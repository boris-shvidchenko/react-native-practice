import { Icon } from '@rneui/base';
import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function NavFavorites() {
    const data = [
        {
            id: '123',
            icon: 'home',
            location: 'Home',
            destination: '554 H St, San Francisco, CA'
        },
        {
            id: '456',
            icon: 'briefcase',
            location: 'Work',
            destination: '1112 Code Place, Oakland, CA'
        }
    ];
    return (
        <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View className='bg-gray-200 h-[1px]' />
            )}
            renderItem={({ item: {location, destination, icon} }) => (
                <TouchableOpacity className='flex-row items-center p-5 space-x-2'>
                    <Icon 
                        name={icon}
                        type='ionicon'
                        color='white'
                        size={18}
                        style={{marginRight: 4, backgroundColor: 'rgb(229, 231, 235)', padding: 3, borderRadius: 100}}
                    />
                    <View>
                        <Text className='font-semibold text-lg'>{location}</Text>
                        <Text className='text-gray-500'>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}