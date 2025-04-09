import { View , Text} from "react-native";
import { Link, Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";



export default function Detail() {

    const { gameslug } = useLocalSearchParams();

    return (
        <Screen>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#4ee747" },
                    headerTintColor: "black",
                    headerLeft: () => "",
                    headerTitle: gameslug,
                    headerRight: () => "",
                }}
            />
            <View>
                <Text className="text-white font-bold mb-8 text-2xl">
                    Detalle del Juego {gameslug}
                </Text>
                <Link href="/" className="bg-blue-200">
                    Volver Atrás
                </Link>
            </View>
        </Screen>
    );
}