import { ImageSourcePropType } from "react-native";

export interface IPlace {
	id: string;
	name: string;
	location: string;
	image: ImageSourcePropType;
	details: string;
}

export type TypePlaces = IPlace[];
