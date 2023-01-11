import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

export default function FeaturedRow({ title, description }) {
    return (
        <View>
            <View className='flex-row items-center mt-4 justify-between px-4'>
                <Text className='text-lg font-bold'>{title}</Text>
                <ArrowRightIcon color='#00CCBB' />
            </View>
            <Text className='text-xs text-gray-500 px-4'>{description}</Text>
            <ScrollView horizontal contentContainerStyle={{paddingHorizontal: 15}} showsHorizontalScrollIndicator className='pt-4'>
                <RestaurantCard 
                    id={123}
                    imgUrl='https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    title='Mexican Cuisine' 
                    rating={3}
                    genre='Mexican'
                    address='123 Main Street'
                    short_description='Mexican food!'
                    dishes={[
                        {
                            id: 1,
                            name: 'Enchilladas',
                            description: 'Enchilladas dish.',
                            price: 5,
                            image: 'https://images.pexels.com/photos/9772454/pexels-photo-9772454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        },
                        {
                            id: 2,
                            name: 'Tacos',
                            description: 'Taco Dish.',
                            price: 4,
                            image: 'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        },
                        {
                            id: 3,
                            name: 'Burritos',
                            description: 'Burrito dish.',
                            price: 4,
                            image: 'https://images.pexels.com/photos/9258714/pexels-photo-9258714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        },
                        {
                            id: 4,
                            name: 'Quesadilla',
                            description: 'Quesadilla dish.',
                            price: 5,
                            image: 'https://images.pexels.com/photos/5840082/pexels-photo-5840082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        }   
                    ]}
                    long={-118.2444}
                    lat= {34.0529}
                />
                <RestaurantCard 
                    id={1234}
                    imgUrl='https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    title="Rob's Grill" 
                    rating={4.5}
                    genre='American'
                    address='451 Second Street'
                    short_description='American Food'
                    dishes={[
                        {
                            id: 5,
                            name: 'Burger',
                            description: 'Classic burger.',
                            price: 6,
                            image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        },
                        {
                            id: 6,
                            name: 'Steak',
                            description: 'Steak dish.',
                            price: 10,
                            image: 'https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        },
                        {
                            id: 7,
                            name: 'Salad',
                            description: 'Salad dish.',
                            price: 4,
                            image: 'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        },
                        {
                            id: 8,
                            name: 'Sandwich',
                            description: 'Grilled sandwich.',
                            price: 5,
                            image: 'https://images.pexels.com/photos/10831659/pexels-photo-10831659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        }   
                    ]}
                    long={-118.2444}
                    lat= {34.0529}
                />
                <RestaurantCard 
                    id={12345}
                    imgUrl='https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    title='My Ramen!' 
                    rating={4}
                    genre='Japanese'
                    address='32 Right Lane'
                    short_description='Japanese food'
                    dishes={[
                        {
                            id: 9,
                            name: 'Ramen',
                            description: 'Classic ramen dish.',
                            price: 6,
                            image: 'https://images.pexels.com/photos/698549/pexels-photo-698549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        },
                        {
                            id: 10,
                            name: 'Sushi',
                            description: 'Various types of sushi.',
                            price: 8,
                            image: 'https://images.pexels.com/photos/3763816/pexels-photo-3763816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        },
                        {
                            id: 11,
                            name: 'Sashimi',
                            description: 'Shashimi dish.',
                            price: 9,
                            image: 'https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        },
                        {
                            id: 12,
                            name: 'Udon',
                            description: 'Udon dish.',
                            price: 5,
                            image: 'https://images.pexels.com/photos/10281095/pexels-photo-10281095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        }   
                    ]}
                    long={-118.2444}
                    lat= {34.0529}
                />
                <RestaurantCard 
                    id={123456}
                    imgUrl='https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    title="Ryan's Classic Food"
                    rating={4}
                    genre='American'
                    address='500 Dale Blvd'
                    short_description='American food'
                    dishes={[
                        {
                            id: 13,
                            name: 'Classic Fries',
                            description: 'Classic fries.',
                            price: 5,
                            image: 'https://images.pexels.com/photos/2498440/pexels-photo-2498440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        },
                        {
                            id: 14,
                            name: 'Burger',
                            description: 'Classic burger dish.',
                            price: 5,
                            image: 'https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        },
                        {
                            id: 15,
                            name: 'BBQ',
                            description: 'Variety of BBQ dishes.',
                            price: 7,
                            image: 'https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        },
                        {
                            id: 16,
                            name: 'Pasta',
                            description: 'American style pasta.',
                            price: 6,
                            image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        }   
                    ]}
                    long={-118.2444}
                    lat= {34.0529}
                />
            </ScrollView>
        </View>
    )
}