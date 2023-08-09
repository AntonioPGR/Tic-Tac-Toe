import { StyleSheet, View } from "react-native";
import { P_Home } from "./src/screens/home";
import { useFonts } from "expo-font";

export default function App() {
	const [is_fonts_loaded] = useFonts({
		Spirax: require("./assets/fonts/Spirax-Regular.ttf"),
	});

	if (!is_fonts_loaded) {
		return <View></View>;
	}

	return (
		<View style={styles.container}>
			<P_Home />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
