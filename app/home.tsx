import { Container } from '@/components/container';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { Button } from 'react-native-paper';

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <Container>
      <Image source={require('@/assets/images/logo.png')} style={{ height: '70%' }} />
      <Button onPress={() => navigation.navigate('Consulta')} mode="contained">
        Iniciar consulta
      </Button>
    </Container>
  );
}