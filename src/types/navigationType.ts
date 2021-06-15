import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
//Types
import { IPlace } from "./placesType";

export type RootStackParamList = {
	OnBoardScreen: undefined;
	HomeScreen: undefined;
	DetailScreen: IPlace;
};

export type OnBoardScreenRouteProp = RouteProp<
	RootStackParamList,
	"HomeScreen"
>;

export type OnBoardScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	"HomeScreen"
>;
export type HomeScreenRouteProp = RouteProp<RootStackParamList, "DetailScreen">;

export type HomeScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	"DetailScreen"
>;
