import { View, Image, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: 166,
        height: 158,
    },
});
function Cakedetails(props) {
    return (
        <View>
            <Text>Cake Details Page for {props.route.params.cakeid}</Text>
            <Image style={styles.image} source={{ uri: props.data?.image }}></Image>
            <Text>{props.data?.name}</Text>
            <Text>{props.data?.price}</Text>
        </View>
    )
}

export default Cakedetails