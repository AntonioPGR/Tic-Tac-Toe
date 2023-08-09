import { Pressable, StyleSheet } from "react-native";
import { C_Text } from "./text";

interface Props_Button {
	children: React.ReactNode;
}
export const C_Button = ({ children }: Props_Button) => {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.button,
				{
					backgroundColor: pressed ? "#2d2017" : "#594031",
				},
			]}
		>
			<C_Text style={styles.text}> {children} </C_Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		padding: 8,
		width: "100%",
		backgroundColor: "#594031",
		borderRadius: 16,
	},
	text: {
		fontSize: 32,
		color: "#BFB3A4",
	},
});
