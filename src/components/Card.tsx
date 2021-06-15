import React, { FC } from "react";
import { COLORS } from "../consts/colors";
import {
	Dimensions,
	Text,
	View,
	ImageBackground,
	StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");

const style = StyleSheet.create({
	cardImage: {
		height: 220,
		width: width / 2,
		marginRight: 20,
		padding: 10,
		overflow: "hidden",
		borderRadius: 10,
	},
});

interface Props {
	place: any;
}

export const Card: FC<Props> = ({ place }) => (
	<ImageBackground style={style.cardImage} source={place.image}>
		<Text
			style={{
				color: COLORS.white,
				fontSize: 20,
				fontWeight: "bold",
				marginTop: 10,
			}}
		>
			{place.name}
		</Text>
		<View
			style={{
				flex: 1,
				justifyContent: "space-between",
				flexDirection: "row",
				alignItems: "flex-end",
			}}
		>
			<View style={{ flexDirection: "row" }}>
				<MaterialIcons name="place" size={20} color={COLORS.white} />
				<Text style={{ marginLeft: 5, color: COLORS.white }}>
					{place.location}
				</Text>
			</View>
			<View style={{ flexDirection: "row" }}>
				<MaterialIcons name="star" size={20} color={COLORS.white} />
				<Text style={{ marginLeft: 5, color: COLORS.white }}>5.0</Text>
			</View>
		</View>
	</ImageBackground>
);
