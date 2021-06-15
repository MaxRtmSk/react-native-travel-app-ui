import React, { FC } from "react";
import { COLORS } from "../consts/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

const categoryIcons = [
	<MaterialIcons name="flight" size={25} color={COLORS.primary} />,
	<MaterialIcons name="beach-access" size={25} color={COLORS.primary} />,
	<MaterialIcons name="near-me" size={25} color={COLORS.primary} />,
	<MaterialIcons name="place" size={25} color={COLORS.primary} />,
];

const style = StyleSheet.create({
	categoryContainer: {
		marginTop: 60,
		marginHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	iconContainer: {
		height: 60,
		width: 60,
		backgroundColor: COLORS.secondary,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
});

export const ListCategories: FC = () => (
	<View style={style.categoryContainer}>
		{categoryIcons.map((icon, index) => (
			<View key={index} style={style.iconContainer}>
				{icon}
			</View>
		))}
	</View>
);
