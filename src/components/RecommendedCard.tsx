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
//Types
import { IPlace } from "../types/placesType";

const { width } = Dimensions.get("screen");

const style = StyleSheet.create({
	rmCardImage: {
		width: width - 40,
		height: 200,
		marginRight: 20,
		borderRadius: 10,
		overflow: "hidden",
		padding: 10,
	},
});

interface Props {
	place: IPlace;
}

export const RecommendedCard: FC<Props> = ({ place }) => (
	<ImageBackground style={style.rmCardImage} source={place.image}>
		<Text style={{ color: COLORS.white, fontSize: 22, marginTop: 10 }}>
			{place.name}
		</Text>
		<View
			style={{
				flex: 1,
				justifyContent: "space-between",
				alignItems: "flex-end",
			}}
		>
			<View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
				<View style={{ flexDirection: "row" }}>
					<MaterialIcons name="place" size={22} color={COLORS.white} />
					<Text style={{ marginLeft: 5, color: COLORS.white }}>
						{place.location}
					</Text>
				</View>
				<View style={{ flexDirection: "row" }}>
					<MaterialIcons name="star" size={22} color={COLORS.white} />
					<Text style={{ marginLeft: 5, color: COLORS.white }}>5.0</Text>
				</View>
			</View>
			<Text style={{ color: COLORS.white, fontSize: 13 }}>{place.details}</Text>
		</View>
	</ImageBackground>
);
