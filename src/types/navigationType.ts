import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { IPlace } from "./placesType";

export type RootStackParamList = {
	OnBoardScreen: undefined;
	HomeScreen: undefined;
	DetailScreen: IPlace;
};

export type OnBoardScreenRouteProp = RouteProp<
	RootStackParamList,
	"OnBoardScreen"
>;
export type OnBoardScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	"HomeScreen"
>;

export type HomeScreenRouteProp = RouteProp<RootStackParamList, "HomeScreen">;
export type HomeScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	"DetailScreen"
>;

export type DetailsScreenRouteProp = RouteProp<
	RootStackParamList,
	"DetailScreen"
>;
export type DetailsScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	"HomeScreen"
>;
