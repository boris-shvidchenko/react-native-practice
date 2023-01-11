import { useNavigation } from '@react-navigation/native';
import { Icon, Input } from '@rneui/base';
import { useLayoutEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

export default function AddChatScreen() {

    const navigation = useNavigation();

    const [input, setInput] = useState();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add a new Chat',
        })
    }, []);

    const createChat = () => {
        navigation.goBack();
    }

    return (
        <View className='pt-10 items-center w-64 mx-auto'>
            <Input placeholder='Enter a chat name' value={input} onChange={text => setInput(text)} leftIcon={<Icon name='wechat' type='antdesign' size={24} color='black' />} />
            <TouchableOpacity onPress={createChat} className='w-40 py-2 mb-2 mt-6 bg-[#2c6bed] rounded-md'>
                <Text className='text-center text-white'>Add Chat</Text>
            </TouchableOpacity>
        </View>
    )
}