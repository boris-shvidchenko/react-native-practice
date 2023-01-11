import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

export default function HomeScreen() {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <View className='pt-10 pb-28 bg-white'>
            {/* Header */}
            <View className='flex-row pb-3 items-center px-2 space-x-2'>
                <Image source={{ uri: 'https://links.papareact.com/wru' }} className='h-7 w-7 bg-gray-300 p-4 rounded-full' />
                <View className='flex-1'>
                    <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                    <View className='flex-row items-center'>
                        <Text className='font-bold text-xl flex-row space-x-2'>
                            Current Location
                        </Text>
                        <ChevronDownIcon size={20} color='#00CCBB' />
                    </View>
                </View>
                <UserIcon size={35} color='#00CCBB' keyboardType='default' />
            </View>

            {/* Search */}
            <View className='flex-row items-center space-x-2 pb-2 ml-2 mr-3'>
                <View className='flex-row flex-1 items-center space-x-2 bg-gray-200 p-3'>
                    <MagnifyingGlassIcon color='gray' size={20} />
                    <TextInput placeholder='Restaurants and cuisines' />
                </View>
                <AdjustmentsVerticalIcon color='#00CCBB'/>
            </View>

            {/* Body */}
            <ScrollView className='bg-gray-100'>
                <Categories />
                <FeaturedRow
                    id='123'
                    title='Featured'
                    description='Paid placements from our partners'
                />
                <FeaturedRow
                    id='1234'
                    title='Tasty Discounts'
                    description='Everyones been enjoying these juicy discounts!'     
                />
                <FeaturedRow
                    id='1235'
                    title='Offers near you!'
                    description='Why not support your local restaurant tonight!'
                />
            </ScrollView>

    </View>
    )
}