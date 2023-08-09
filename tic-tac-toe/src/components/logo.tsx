import { Image, StyleSheet, View } from "react-native";
import LogoImage from "../../assets/images/swords.png";
import { C_Text } from "./text";

interface Props_Logo {
	main_text: string;
	sub_main_text: string;
}

export const C_Logo = ({ main_text, sub_main_text }: Props_Logo) => {
	return (
		<View style={styles.logo_container}>
			<View style={styles.text_container}>
				<C_Text style={styles.text}> {main_text} </C_Text>
				<C_Text style={styles.text}> {sub_main_text} </C_Text>
			</View>
			<Image source={LogoImage} />
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 42,
		lineHeight: 42,
		color: "#594031",
	},
	logo_container: {
		display: "flex",
		flexDirection: "row",
		gap: 16,
	},
	text_container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
});
