import { Sentence, Sentences } from '@/components/sentences';
import { ConsultationStackParamList } from '@/types/stacks';
import * as routes from '@/utils/routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Chip, Text } from 'react-native-paper';

import { Container } from '@/components/container';
import { ANSWERS } from '@/utils/answer_getter';
import { ConsultationNav, toLevel } from '@/utils/routing';
import { useNavigation } from '@react-navigation/native';

type AnswersProps = NativeStackScreenProps<ConsultationStackParamList, typeof routes.PATIENT_ANSWERS>;

export const Answers = ({ route }: AnswersProps) => {
  const { questionTitle, previousSnippet, answersFileName, level, subquestionId,  } = route.params;

  const answersFile = ANSWERS[answersFileName];

  const answers = !subquestionId 
    ? (answersFile || [])
    : (answersFile?.find(a => a.id === subquestionId.slice(0, subquestionId.lastIndexOf('-')))?.subquestions || []);

  const navigation = useNavigation<ConsultationNav>();

  const goToNextSentence = (s: Sentence) => {
    if (s.subquestions && s.subquestions.length > 0) {
      navigation.navigate(routes.PATIENT_ANSWERS, {
        questionTitle,
        previousSnippet: s.text,
        answersFileName,
        subquestionId: s.subquestions[0].id,
        level,
      });
    } else {
      if (level === 0) navigation.navigate(routes.DOCTOR_QUESTIONS, toLevel(1));
      else navigation.navigate(routes.DOCTOR_QUESTIONS, toLevel(level));
    }
  };

  const goToVideo = (s: Sentence) => {
    navigation.navigate(routes.VIDEO, {
      title: s.text,
      video: s.src,
      buttons: [
        {
          text: 'Prosseguir',
          props: {
            mode: 'contained',
            onPress: () => {
              goToNextSentence(s);
            }
          },
        },
      ],
    });
  };

  return (
    <Container>
      <Text variant="headlineSmall" style={styles.title}>{questionTitle}</Text>

      {!!previousSnippet && (<Chip style={styles.chip}>{previousSnippet}</Chip>)}

      <Sentences sentences={answers} level={level} onSentencePress={(s) => {
        if (s.src) {
          goToVideo(s);
        } else {
          goToNextSentence(s);
        }
      }} />
    </Container>
  );
};

const styles = StyleSheet.create({
  input: { marginVertical: 5 },
  chip: {marginVertical: 6 },
  row: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-between",
  },
  title: {
    paddingVertical: 8,
    textAlign: 'center',
  }
});

export default Answers;
