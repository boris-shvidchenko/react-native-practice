import { useNavigation } from '@react-navigation/native';
import { Avatar } from '@rneui/base';
import { useLayoutEffect } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import CustomListItem from '../components/CustomListItem';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function HomeScreen() {

    const navigation = useNavigation();

    const signOut = () => {
        alert('Signed out!');
        navigation.navigate('Login');
    };

    const addChat = () => {
        navigation.navigate('AddChat')
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Signal',
            headerRight: () => (
                <TouchableOpacity onPress={signOut} activeOpacity={0.5}>
                    <Avatar rounded source={{uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'}} />
                </TouchableOpacity>
            )
        })
    }, []);

    return (
        <View className='relative'>
            <ScrollView className='h-full'>
                <CustomListItem />
            </ScrollView>
            <TouchableOpacity onPress={addChat} className='bg-blue-500 w-16 h-16 flex items-center justify-center rounded-full absolute right-8 bottom-10'>
                <SimpleLineIcons name='pencil' size={35} color='white' />
            </TouchableOpacity>
        </View>
    )
}