import React, { FC } from 'react'
import { StyleSheet, Text, StatusBar, View, EdgeInsetsPropType } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { COLORS } from '../consts/colors';
//Componets
import { MyStatusBar } from '../components/MyStatusBar';

const style = StyleSheet.create({
  statusBar: {
    flex: 1,
    backgroundColor: '#33373B',
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary
  }
})

export const HomeScreen: FC = () => {
  return (
    <SafeAreaProvider
      style={{ flex: 1, backgroundColor: COLORS.white }}
    >
      <MyStatusBar backgroundColor={COLORS.primary} />
      <View style={style.header}>
      </View>
    </SafeAreaProvider>

  )
}
