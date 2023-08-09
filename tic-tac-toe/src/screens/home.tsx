import { C_Logo } from "../components/logo";
import { C_Button } from "../components/button";
import { Dimensions, StyleSheet, View } from "react-native";
import { home_text } from "../mocks/home_text";

export const P_Home = () => {
	return (
		<View style={styles.container}>
			<C_Logo
				main_text={home_text.title.first_line}
				sub_main_text={home_text.title.second_line}
			/>
			<C_Button> {home_text.button.text} </C_Button>
		</View>
	);
};

const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		backgroundColor: "#DDD4CA",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: 24,
		gap: windowHeight / 6,
	},
});
