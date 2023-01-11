import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { Input, Image } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen(){

    const [email, setEmail] = useState();
    const [password, setPassword] = useState(); 

    const navigation = useNavigation();

    const signIn = () => {
        alert('Logged in!');
        navigation.navigate('Home');
    }

    return (
        <KeyboardAvoidingView behavior='padding' className='flex-1 items-center p-6 bg-white'>
            <StatusBar style='light' />
            <Image 
                source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Logo_Signal..png'}}
                style={{width: 200, height: 200}}
            />
            <View className='w-full'>
                <Input placeholder='Email' autoFocus type='email' value={email} onChangeText={text => setEmail(text)} />
                <Input placeholder='Password' secureTextEntry type='password' value={password} onChangeText={text => setPassword(text)} />
            </View>
            <TouchableOpacity className='w-40 py-2 mb-2 mt-6 bg-[#2c6bed] rounded-md' onPress={signIn}>
                <Text className='text-center text-white'>Login</Text> 
            </TouchableOpacity>
            <TouchableOpacity className='w-40 py-2 mb-2 border border-blue-400 rounded-md' onPress={() => navigation.navigate('Register')}>
                <Text className='text-center text-blue-400'>Register</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}