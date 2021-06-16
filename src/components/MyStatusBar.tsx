import React, { FC } from "react";
import { StatusBar, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
	backgroundColor: string;
	barStyle?: "dark-content";
}

export const MyStatusBar: FC<Props> = ({
	backgroundColor,
	barStyle = "dark-content",
}) => {
	const insets = useSafeAreaInsets();
	return (
		<View style={{ height: insets.top, backgroundColor }}>
			<StatusBar
				animated={true}
				translucent
				backgroundColor={backgroundColor}
			/>
		</View>
	);
};
