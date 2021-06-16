import React, { FC } from "react";
import { COLORS } from "../consts/colors";
//Components
import {
	StyleSheet,
	Text,
	StatusBar,
	ImageBackground,
	View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
//Types
import {
	DetailsScreenNavigationProp,
	DetailsScreenRouteProp,
} from "../types/navigationType";

const style = StyleSheet.create({
	header: {
		marginTop: 60,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
	},
	imageDetails: {
		padding: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		position: "absolute",
		bottom: 30,
	},
	detailsContainer: {
		top: -30,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingVertical: 40,
		paddingHorizontal: 20,
		backgroundColor: COLORS.white,
		flex: 0.3,
	},
	iconContainer: {
		height: 60,
		width: 60,
		position: "absolute",
		backgroundColor: COLORS.white,
		top: -30,
		right: 20,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
		elevation: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 1,
	},
	footer: {
		flexDirection: "row",
		backgroundColor: COLORS.primary,
		height: "10%",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingBottom: 10,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
	},
	buyBtn: {
		height: 50,
		backgroundColor: COLORS.white,
		width: 150,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
});

interface Props {
	navigation: DetailsScreenNavigationProp;
	route: DetailsScreenRouteProp;
}

export const DetailsScreen: FC<Props> = ({ navigation, route }) => {
	const place = route.params;

	return (
		<SafeAreaProvider style={{ flex: 1, backgroundColor: COLORS.white }}>
			<StatusBar
				translucent
				backgroundColor="rgba(0,0,0,0)"
				barStyle="light-content"
			/>
			<ImageBackground style={{ flex: 0.7 }} source={place.image}>
				<View style={style.header}>
					<MaterialIcons
						name="arrow-back-ios"
						size={28}
						color="white"
						onPress={navigation.goBack}
					/>
					<MaterialIcons name="more-vert" size={28} color="white" />
				</View>
				<View style={style.imageDetails}>
					<Text
						style={{
							width: "60%",
							fontSize: 30,
							color: COLORS.white,
							fontWeight: "bold",
							marginBottom: 20,
						}}
					>
						{place.name}
					</Text>
					<View style={{ flexDirection: "row" }}>
						<MaterialIcons name="star" size={30} color={COLORS.orange} />
						<Text
							style={{
								fontSize: 20,
								color: COLORS.white,
								fontWeight: "bold",
							}}
						>
							5.0
						</Text>
					</View>
				</View>
			</ImageBackground>
			<View style={style.detailsContainer}>
				<View style={style.iconContainer}>
					<MaterialIcons name="favorite" size={30} color={COLORS.red} />
				</View>
				<View style={{ flexDirection: "row" }}>
					<MaterialIcons name="place" size={28} color={COLORS.primary} />
					<Text
						style={{
							marginLeft: 5,
							fontSize: 20,
							fontWeight: "bold",
							color: COLORS.primary,
						}}
					>
						{place.location}
					</Text>
				</View>
				<Text style={{ marginTop: 20, fontSize: 20, fontWeight: "bold" }}>
					About the trip
				</Text>
				<Text
					style={{
						marginTop: 20,
						lineHeight: 22,
					}}
				>
					{place.details}
				</Text>
			</View>
			<View style={style.footer}>
				<View
					style={{
						flex: 1,
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<Text
						style={{ fontSize: 18, fontWeight: "bold", color: COLORS.white }}
					>
						$50
					</Text>
					<Text
						style={{
							fontSize: 12,
							fontWeight: "bold",
							color: COLORS.grey,
							marginLeft: 2,
						}}
					>
						/REP DAY
					</Text>
				</View>
				<View style={style.buyBtn}>
					<Text
						style={{ color: COLORS.primary, fontSize: 16, fontWeight: "bold" }}
					>
						Buy Now
					</Text>
				</View>
			</View>
		</SafeAreaProvider>
	);
};
