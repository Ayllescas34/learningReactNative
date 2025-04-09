import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

export const InfoIcon = (prompt) => (
    <Feather name="info" size={30} color="white" { ...prompt}/>
);

export const HomeIcon = (prompt) => (
    <AntDesign name="home" size={24} color="white" { ...prompt} />
);