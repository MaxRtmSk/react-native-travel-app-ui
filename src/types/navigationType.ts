import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  OnBoardScreen: undefined;
  HomeScreen: undefined;
  DetailScreen: undefined;
};

export type OnBoardScreenRouteProp = RouteProp<RootStackParamList, 'HomeScreen'>;

export type OnBoardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

