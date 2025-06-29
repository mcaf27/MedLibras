import { Answer, ConsultationStackParamList, DictionaryStackParamList, Question } from "@/types/stacks";
import * as routes from '@/utils/routes';

import QUESTIONS_LIST from '@/assets/data/questions.json';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ToLevelT = (nextLevel: number) => ConsultationStackParamList[typeof routes.DOCTOR_QUESTIONS];
type FromQuestionToAnswersT = (q: Question) => ConsultationStackParamList[typeof routes.PATIENT_ANSWERS];
type FromAnswerToSubquestionT = (q: Question, answer: Answer, subquestion: Answer) => ConsultationStackParamList[typeof routes.PATIENT_ANSWERS];

export type ConsultationNav = NativeStackNavigationProp<ConsultationStackParamList>;
export type DictionaryNav = NativeStackNavigationProp<DictionaryStackParamList>;

const questionsByLevel = [
  QUESTIONS_LIST.filter(q => q.level === 0),
  QUESTIONS_LIST.filter(q => q.level === 1),
  QUESTIONS_LIST.filter(q => q.level === 2),
];

export const toLevel: ToLevelT = (level) => ({
  description: "Selecione uma pergunta para fazer ao paciente:",
  questions: questionsByLevel[level],
  level
});

export const fromQuestionVideoToAnswers: FromQuestionToAnswersT = (q) => ({
  questionTitle: q.text,
  answersFileName: q.id,
  level: q.level
});

export const fromAnswerToSubquestion: FromAnswerToSubquestionT = (q, answer, subquestion)  => ({
  questionTitle: q.text,
  previousSnippet: answer.text,
  answersFileName: q.id,
  subquestionId: subquestion.id,
  level: q.level,
});

export const onAnswerClick = (originalQuestion: Question, answer: Answer) => {
  if (answer.subquestions && answer.subquestions.length > 0) {
    return fromAnswerToSubquestion(originalQuestion, answer, answer.subquestions[0]);
  }
}
