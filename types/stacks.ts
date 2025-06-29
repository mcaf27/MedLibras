import * as routes from '@/utils/routes';
import { ButtonProps } from 'react-native-paper';

export type Question = { id: string, text: string, level: number, src: string };
export type Answer = { id: string, text: string, src: string, widget?: string, subquestions?: Answer[] }

export type DictionaryItemT = {
  text: string;
  src: string;
};

export type DictionarySectionT = {
  title: string;
  src: string;
  items: DictionaryItemT[];
};

export type DictionaryStackParamList = {
  [routes.DICTIONARY]: undefined;
  [routes.DICTIONARY_ITEM]: { item: DictionaryItemT };
  [routes.DICTIONARY_SECTION]: { section: DictionarySectionT };
};

export type ConsultationStackParamList = {
  [routes.CONTACT_FORM]: undefined;
  [routes.DOCTOR_OPTIONS]: undefined;
  [routes.EXAM_FORM]: undefined;
  [routes.TREATMENT_FORM]: undefined;
  [routes.THANK_YOU]: undefined;
  [routes.DOCTOR_QUESTIONS]: {
    description: string;
    questions: Question[];
    level: number;
  };
  [routes.PATIENT_ANSWERS]: {
    questionTitle: string;
    answersFileName: string;
    previousSnippet?: string;
    subquestionId?: string;
    level: number;
  };
  [routes.VIDEO]: { 
    buttons: {
      props: Omit<ButtonProps, 'children'>;
      text: string;
    }[]; 
    title: string;
    video: string;
  };
};
