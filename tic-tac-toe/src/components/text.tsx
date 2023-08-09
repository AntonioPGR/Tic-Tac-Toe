import { StyleSheet, Text } from "react-native";

interface Props_Button {
	children: React.ReactNode;
	style?: Object;
}
export const C_Text = ({ children, style }: Props_Button) => {
	return <Text style={[styles.text, style]}> {children} </Text>;
};

const styles = StyleSheet.create({
	text: {
		fontFamily: "Spirax",
		textAlign: "center",
		fontSize: 18,
	},
});
