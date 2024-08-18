import { Text, ScrollView, View, Pressable } from "react-native";
import { Link } from "expo-router";
import { Screen } from "../../components/Screen";
import Entypo from "@expo/vector-icons/Entypo";

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <View className=" items-center text-justify">
          <Link asChild href="/" className="text-blue-400 text-xl mt-24">
            <Pressable>
              <Entypo name="info-with-circle" size={24} color="white" />
            </Pressable>
          </Link>
          <Text className="text-white font-bold mb-8 text-2xl">
            About the project
          </Text>

          <Text className=" text-white/90 mb-4 text-justify">
            This project has been developed solely for educational purposes to
            practice and enhance my skills in React Native development. The
            primary objective is to improve my ability to build mobile
            applications using this technology, exploring functionalities such
            as API integration and the creation of interactive user interfaces.
            This project is not intended for commercial use and will not be
            distributed as a final product.
          </Text>

          <Text className=" text-white/90 mb-4 text-justify">
            I would like to clarify that I am not the owner of, nor am I
            affiliated with, Metacritic, its API, or its services. All
            references to Metacritic within this project are for educational and
            demonstration purposes only. The Metacritic API has been utilized to
            simulate real-world scenarios and functionalities within an
            application, but there is no intent to misuse or commercially
            exploit the data and services it provides.
          </Text>

          <Text className="text-white/90 mb-4 text-justify">
            This project is not intended to be an official representation of
            Metacritic, nor does it seek to compete with its services. All
            content, including data, images, and any other references, belong to
            their respective owners. While every effort has been made to respect
            the terms of use of the API and intellectual property rights, I am
            willing to make immediate corrections or remove content if any
            unintentional infringement occurs.
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
}
