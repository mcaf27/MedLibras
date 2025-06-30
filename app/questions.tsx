import { Container } from '@/components/container';
import { Sentences } from '@/components/sentences';
import { ConsultationStackParamList } from '@/types/stacks';
import * as routes from '@/utils/routes';
import { ConsultationNav, toLevel } from '@/utils/routing';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

type QuestionsProps = NativeStackScreenProps<ConsultationStackParamList, typeof routes.DOCTOR_QUESTIONS>;

export const Questions = ({ route }: QuestionsProps) => {
  const { description, questions, level } = route.params;

  const navigation = useNavigation<ConsultationNav>();

  return (
    <Container>
      <ScrollView>
        <Text variant="titleMedium" style={styles.title}>{description}</Text>

        <Sentences sentences={questions} level={level} onSentencePress={(s) => (
            navigation.navigate(routes.VIDEO, {
              title: s.text,
              video: s.src,
              buttons: [
                { 
                  text: 'Prosseguir', 
                  props: { 
                    mode: 'contained', 
                    onPress: () => navigation.navigate(
                      routes.PATIENT_ANSWERS, {
                        questionTitle: s.text,
                        answersFileName: s.id,
                        level,
                      }
                    ) 
                  } 
                }
              ]
          }))}
        />

        <Button 
          onPress={() => {
            if (level >= 2) {
              navigation.navigate(routes.DOCTOR_OPTIONS);
            } else {
              navigation.navigate(routes.DOCTOR_QUESTIONS, toLevel(level + 1));
            }
          }} 
          mode="contained" 
          icon="arrow-right"
          style={styles.button}
        >
          Avançar
        </Button>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: { marginVertical: 8 },
  title: { paddingVertical: 12, textAlign: 'center' },
});

export default Questions;