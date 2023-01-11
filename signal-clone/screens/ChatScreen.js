import { View, KeyboardAvoidingView, Platform, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function ChatScreen() {
    return (
        <View className='relative h-full'>
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={90}
                className='absolute w-full bottom-0'
            >
                <>
                    <ScrollView>
                        {/* Chats go here ... */}
                    </ScrollView>
                    <View className='flex-row p-8 items-center'>
                        <TextInput placeholder='Signal Message...' className='flex-1 mr-5 rounded-full bg-[#ECECEC] p-2' />
                        <TouchableOpacity>
                            <Ionicons name='send' size={24} color='#2B68E6' />
                        </TouchableOpacity>
                    </View>
                </>
            </KeyboardAvoidingView>
        </View>
    )
}