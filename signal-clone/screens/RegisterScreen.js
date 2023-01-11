import { useNavigation } from '@react-navigation/native';
import { Input } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

export default function RegisterScreen() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [imageUrl, setImageUrl] = useState();

    const navigation = useNavigation();

    const register = () => {
        alert('Registered!');
        navigation.navigate('Home');
    }

    return (
        <KeyboardAvoidingView className='flex-1 items-center p-10 bg-white' behavior='padding'>
            <StatusBar style='light' />
            <Text className='mb-10 text-2xl font-semibold'>Create a Signal account</Text>
            <View className='w-full'>
                <Input placeholder='Full Name' autoFocus type='text' value={name} onChangeText={text => setName(text)} />
                <Input placeholder='Email' type='email' value={email} onChangeText={text => setEmail(text)} />
                <Input placeholder='Password' type='password' value={password} onChangeText={text => setPassword(text)} />
                <Input placeholder='Profile Picture URL (optional)' type='text' value={imageUrl} onChangeText={text => setImageUrl(text)} onSubmitEditing={register} />
            </View>
            <TouchableOpacity className='w-40 py-2 mb-2 mt-6 bg-[#2c6bed] rounded-md' onPress={register}>
                <Text className='text-center text-white'>Register</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}
