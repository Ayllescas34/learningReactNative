import { View , Text} from "react-native";
import { Link } from "expo-router";


export default function Detail() {
    return (
        <View className="flex-1 bg-black items-center justify-center">
            <View>
                <Text className="text-white font-bold mb-8 text-2xl">
                    Detalle del Juego
                </Text>
                <Link href="/" className="bg-blue-500">
                    Volver Atrás
                </Link>
            </View>
        </View>
    );
}