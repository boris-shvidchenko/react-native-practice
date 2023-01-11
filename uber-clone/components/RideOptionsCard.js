import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

export default function RideOptionsCard() {
    const [selected, setSelected] = useState(null);
    const navigation = useNavigation();
    const data = [
        {
            id: 'Uber-X-123',
            title: 'UberX',
            multiplier: 1,
            image: 'https://links.papareact.com/3pn'
        },
        {
            id: 'Uber-XL-456',
            title: 'Uber XL',
            multiplier: 1.2,
            image: 'https://links.papareact.com/5w8'
        },
        {
            id: 'Uber-LUX-789',
            title: 'Uber LUX',
            multiplier: 1.75,
            image: 'https://links.papareact.com/7pf'
        }
    ]

    return (
        <View className='bg-white flex-grow'>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('NavigateCard')} className='absolute top-3 left-5 pt-4 rounded-full z-50'>
                    <Icon name='chevron-left' type='font-awesome' size={12}/>
                </TouchableOpacity>
                <Text className='text-center pt-5 text-xl'>Select a Ride</Text>
            </View>
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => setSelected(item)} className={`flex-row items-center justify-between h-20 px-10 ${item.id === selected?.id && 'bg-gray-200'}`}>
                        <Image 
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: 'contain'
                            }}
                            source={{uri:item.image}}
                        />
                        <View className='-ml-6'>
                            <Text className='text-xl font-semibold'>{item.title}</Text>
                            <Text>Travel time...</Text>
                        </View>
                        <Text className='text-xl'>$50</Text>
                    </TouchableOpacity>
                )}
            />
            <View>
                <TouchableOpacity className={`bg-black py-2 m-3 ${!selected && 'bg-gray-300'}`} disabled={!selected}>
                    <Text className='text-center text-white text-xl'>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

