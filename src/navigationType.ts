import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  HomeScreen: undefined;
};

export type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'HomeScreen'>;

export type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

