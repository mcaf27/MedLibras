import { Container } from '@/components/container';
import * as routes from '@/utils/routes';
import { ConsultationNav } from '@/utils/routing';
import { useNavigation } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';

export const Options = () => {
  const navigation = useNavigation<ConsultationNav>();

  return (
    <Container>
      <ScrollView>
        <Text variant="titleMedium" style={styles.title}>
          Selecione uma opção para continuar:
        </Text>

        <View style={styles.container}>
          <Card 
            mode="outlined" 
            onPress={() => navigation.navigate(routes.EXAM_FORM)}
          >
            <Card.Title
              title="Solicitar um exame"
              titleVariant="bodyMedium"
              titleNumberOfLines={7}
            />
          </Card>

          <Card 
            mode="outlined" 
            onPress={() => navigation.navigate(routes.TREATMENT_FORM)}
          >
            <Card.Title
              title="Propor um tratamento"
              titleVariant="bodyMedium"
              titleNumberOfLines={7}
            />
          </Card>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: { marginVertical: 8 },
  title: { paddingVertical: 12, textAlign: 'center' },
  container: { paddingVertical: 12, gap: 12 },
  card: { textAlign: 'center' },
});

export default Options;
