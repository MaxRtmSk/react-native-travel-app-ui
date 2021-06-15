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
    alignItems: 'center',
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20
  }
})

export const HomeScreen: FC = () => {
  const categoryIcons = [
    <MaterialIcons name="flight" size={25} color={COLORS.primary} />,
    <MaterialIcons name="beach-access" size={25} color={COLORS.primary} />,
    <MaterialIcons name="near-me" size={25} color={COLORS.primary} />,
    <MaterialIcons name="place" size={25} color={COLORS.primary} />
  ]

  const ListCategories = () => (
    <View style={style.categoryContainer}>
      {categoryIcons.map((icon, index) => (
        <View key={index} style={style.iconContainer}>
          {icon}
        </View>
      )
      )}
    </View>)

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
        <Text style={style.sectionTitle}>Places</Text>
      </ScrollView>
    </SafeAreaProvider>
  )
}
