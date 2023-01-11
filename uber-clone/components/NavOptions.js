import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

export default function NavOptions() {
    const navigation = useNavigation();
    const data = [
        {
            id: '123',
            title: 'Get a ride',
            image: 'https://links.papareact.com/3pn',
            screen: 'MapScreen'
        }, 
        {
            id: '456',
            title: 'Order food',
            image: 'https://links.papareact.com/28w',
            screen: 'EatsScreen' // Change in future...
        }
    ];

    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate(item.screen)} className='p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-32'>
                    <View>
                        <Image source={{uri:item.image}} className='w-20 h-20' style={{resizeMode:'contain'}}/>
                        <Text className='mt-2 text-lg font-semibold'>{item.title}</Text>
                        <View className='p-2 bg-black rounded-full w-10 mt-4'>
                            <Icon type='antdesign' color='white' name='arrowright' />
                        </View>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}