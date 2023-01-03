import { View, Text, StyleSheet } from 'react-native';
import { DefaultStyle } from './default_style';

const HomeScreen = () => {
    return (
        <View style={{ ...DefaultStyle.body, alignContent: 'center', justifyContent: 'center' }}>
            <Text style={style.text}>
                This is Home
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    text: {
        alignSelf: 'center',
        textAlign: 'center'
    }
});

export { HomeScreen };