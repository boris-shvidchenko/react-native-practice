import { Text } from 'react-native';
import { ListItem, Avatar } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

export default function CustomListItem() {

    const navigation = useNavigation();

    const goToChat = () => {
        navigation.navigate('Chat');
    }

    return (
        <ListItem onPress={goToChat} >
            <Avatar
                rounded
                source={{uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'}}
            />
            <ListItem.Content>
                <ListItem.Title>
                    <Text className='font-semibold'>Youtube Chat</Text>
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail' >
                    This is a test message
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}