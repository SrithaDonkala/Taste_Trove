import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { HomeCard } from "./components";
import { HomeScreenProps } from "../types";
import { Heading, SafeAreaBox } from "../../components";
import { data } from "./data";

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaBox>
      <ScrollView>
        <ImageBackground source={{uri: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"}} style={homeScreen.rootContainer}>
          <WelcomeCard />

          <Text style={homeScreen.title}>Tests</Text>

          <FlatList
            scrollEnabled={false}
            numColumns={2}
            data={data}
            renderItem={({ item, index }) => (
              <HomeCard
                title={item.title}
                image={item.image}
                numOfQuestions={item.numOfQuestions}
                duration={item.duration}
                index={index}
                onPress={() => {
                  navigation.navigate("Test", {
                    title: item.title,
                    testName: item.testName,
                  });
                }}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </ImageBackground>
      </ScrollView>
    </SafeAreaBox>
  );
}

function WelcomeCard() {
  return (
    <View style={welcomeCard.root}>
      <Heading text="Taste Trove" fontSize={24} color="#fafafa" />
      <Text style={welcomeCard.text}>
        Welcome to the Restaurant! Survey helps to get to know customer more!
      </Text>
    </View>
  );
}

const homeScreen = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
    gap: 8,
    backgroundColor: "#ffffff", // Set a fallback background color
    resizeMode: 'cover', // Ensure the image covers the entire container
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#525252",
  },
});

const welcomeCard = StyleSheet.create({
  root: {
    backgroundColor: "#4B5563",
    gap: 16,
    borderRadius: 24,
    padding: 24,
  },
  heading: {
    color: "#fafafa",
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    color: "#fafafa",
    fontWeight: "500",
  },
});
