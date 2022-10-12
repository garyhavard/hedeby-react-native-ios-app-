import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import Notification from "../../assets/images/Notification.png";

const win = Dimensions.get("window");

function NoNotificationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Activity</Text>
      <View style={styles.wrap}>
        <Image source={Notification} />
        <Text style={styles.head}>No Notification</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#001437",
    height: win.height,
    width: win.width,
    flex: 1,
  },
  wrap: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: win.height / 5,
  },
  img: {
    height: win.height / 10,
    width: win.width / 8,
  },
  head: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    marginTop: win.height / 20,
  },
  heading: {
    // flex: 1,
    color: "#fff",
    fontSize: win.width / 18,
    fontWeight: "bold",
    marginTop: win.height / 16,
    marginLeft: win.width / 30,
    marginBottom: win.height / 50,
  },
});
export default NoNotificationScreen;
