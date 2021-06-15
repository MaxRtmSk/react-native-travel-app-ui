import React, { FC } from 'react'
import { COLORS } from '../consts/colors';
import { places } from '../consts/places'
//Componets
import { Dimensions, StyleSheet, Text, View, ScrollView, TextInput, FlatList, ImageBackground } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { MyStatusBar } from '../components/MyStatusBar';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('screen')

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
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
  }
})

export const HomeScreen: FC = () => {

  const categoryIcons = [
    <MaterialIcons name="flight" size={25} color={COLORS.primary} />,
    <MaterialIcons name="beach-access" size={25} color={COLORS.primary} />,
    <MaterialIcons name="near-me" size={25} color={COLORS.primary} />,
    <MaterialIcons name="place" size={25} color={COLORS.primary} />
  ];

  const ListCategories = () => (
    <View style={style.categoryContainer}>
      {categoryIcons.map((icon, index) => (
        <View key={index} style={style.iconContainer}>
          {icon}
        </View>
      )
      )}
    </View>);

  const Card = ({ place }: any) =>
  (<ImageBackground style={style.cardImage} source={place.image}>
    <Text style={{
      color: COLORS.white,
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
    }}>{place.name}</Text>
    <View style={{
      flex: 1,
      justifyContent: "space-between",
      flexDirection: 'row',
      alignItems: 'flex-end'
    }}>
      <View style={{ flexDirection: 'row' }}>
        <MaterialIcons name="place" size={20} color={COLORS.white} />
        <Text style={{ marginLeft: 5, color: COLORS.white }}>{place.location}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <MaterialIcons name="star" size={20} color={COLORS.white} />
        <Text style={{ marginLeft: 5, color: COLORS.white }}>5.0</Text>
      </View>
    </View>
  </ImageBackground>);

  const RecommendedCard = ({ place }: any) => (
    <ImageBackground style={style.rmCardImage} source={place.image} >
      <Text style={{ color: COLORS.white, fontSize: 22, marginTop: 10, }}>
        {place.name}
      </Text>
      <View style={{ flex: 1, justifyContent: "space-between", alignItems: "flex-end" }}>
        <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <MaterialIcons name="place" size={22} color={COLORS.white} />
            <Text style={{ marginLeft: 5, color: COLORS.white }}>{place.location}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <MaterialIcons name="star" size={22} color={COLORS.white} />
            <Text style={{ marginLeft: 5, color: COLORS.white }}>5.0</Text>
          </View>
        </View>
        <Text style={{ color: COLORS.white, fontSize: 13 }}>{place.details}</Text>
      </View>
    </ImageBackground>
  )


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
        <View>
          <FlatList
            contentContainerStyle={{ paddingLeft: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({ item }) => <Card place={item} />}
          />
          <Text style={style.sectionTitle}>Recommended</Text>
          <FlatList
            decelerationRate="fast"
            snapToInterval={width - 20}
            contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={places}
            renderItem={({ item }) => <RecommendedCard place={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}
