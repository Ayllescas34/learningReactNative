import {View, Text} from "react-native";

export function Score({ score, maxScore}) {

    const getColors = () => {
        const percentage = (score / maxScore) * 100;
        if (percentage < 4.8) return "bg-red-600";
        if (percentage < 4.9) return "bg-yellow-600";
        return "bg-green-600";
    }

    const className = getColors();


    return (
        <View 
        className   ={`${className} w-10 h-10 rounded-full justify-center items-center`}
        >
            <Text className="text-lg font-bold text-white">{score}</Text>
        </View>
    );
}