import React from 'react';
import { ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

export default function Categories() {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}}>
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Japanese' />
            <CategoryCard imgUrl='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title='Mexican' />
            <CategoryCard imgUrl='https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title='American' />
            <CategoryCard imgUrl='https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title='Indian' />
            <CategoryCard imgUrl='https://images.pexels.com/photos/6941000/pexels-photo-6941000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title='Mediterran...' />
            <CategoryCard imgUrl='https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title='Chinese' />
            <CategoryCard imgUrl='https://images.pexels.com/photos/725992/pexels-photo-725992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title='Seafood' />
        </ScrollView>
    )
}