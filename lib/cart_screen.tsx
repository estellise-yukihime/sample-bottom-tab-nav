import { View, Text } from "react-native";

const CartScreen = () => {
    return (
        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', }}>
            <Text style={{ alignSelf: 'center' }}>
                This is a Cart Screen.
            </Text>
        </View>
    );
}

export { CartScreen };