import { View, Text, Image, StyleSheet, Button } from "react-native";


const styles = StyleSheet.create({
    image: {
        width: 66,
        height: 58,
    },
});
function Cake(props) {
    function navigate(){
        props.navigation.navigate("CakeDetails", {
            cakeid:props.data.cakeid
        })
    }
    return (
        <View>
            <Image style={styles.image} source={{ uri: props.data.image }}></Image>
            <Text>{props.data.name}</Text>
            <Text>{props.data.price}</Text>
            <Button onPress={navigate} title="SHow Details"></Button>
        </View>
    )

}

export default Cake