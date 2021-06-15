import React, { FC } from 'react'
import { COLORS } from '../consts/colors';
//Componets
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { MyStatusBar } from '../components/MyStatusBar';
import { MaterialIcons } from '@expo/vector-icons';

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 23,
  },
  inputContainer: {
    height: 60,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: 'absolute',
    top: 90,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',

  }
})

export const HomeScreen: FC = () => {
  const ListCategories = () => {
    return <View style={style.categoryContainer}></View>
  }
  return (
    <SafeAreaProvider
      style={{ flex: 1, backgroundColor: COLORS.white }}
    >
      <MyStatusBar backgroundColor={COLORS.primary} />
      <View style={style.header}>
        <MaterialIcons name="sort" size={28} color={COLORS.white} />
        <MaterialIcons name="notifications-none" size={28} color={COLORS.white} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 120,
            paddingHorizontal: 20
          }}
        >
          <View>
            <Text style={style.headerTitle}>Explore the</Text>
            <Text style={style.headerTitle}>beautiful places</Text>
            <View style={style.inputContainer}>
              <MaterialIcons name="search" size={28} />
              <TextInput placeholder="Search place" style={{ color: COLORS.grey }} />
            </View>
          </View>
        </View>
        <ListCategories />
      </ScrollView>
    </SafeAreaProvider>

  )
}
