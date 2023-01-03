import { View, Text } from 'react-native';

const ProfileScreen = () => {
    return (
        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', }}>
            <Text style={{ alignSelf: 'center' }}>
                This is a Profile Screen.
            </Text>
        </View>
    )
}

export { ProfileScreen };