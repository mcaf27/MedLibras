import { DOCTOR_QUESTIONS } from '@/utils/routes';
import { ConsultationNav, toLevel } from '@/utils/routing';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { CalendarWidget } from './calendar';
import { BodyOverlay } from './human-body';
import Slider from './slider';

export interface Sentence {
  text: string;
  id: string;
  src: string;
  subquestions?: Sentence[];
  widget?: string;
};

interface SentencesProps {
  sentences: Sentence[];
  onSentencePress: (sentence: Sentence) => void;
  level: number;
};

export const Sentences = ({ sentences, onSentencePress, level }: SentencesProps) => {
  const navigation = useNavigation<ConsultationNav>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {sentences.map((s) => (s.widget) ? (
        <View key={s.id} style={styles.widgetContainer}>
          <WidgetMapper widgetName={s.widget} />
          <Button icon="arrow-right" mode="contained" onPress={() => navigation.navigate(DOCTOR_QUESTIONS, toLevel(level))}>
            Prosseguir
          </Button>
        </View>
      ) : (
        <Card mode="outlined" key={s.id} contentStyle={styles.card} onPress={() => onSentencePress(s)}>
          <Card.Title
            style={styles.card} 
            title={s.text}
            titleVariant="bodyMedium"
            titleNumberOfLines={7}
          />
        </Card>
      ))}
    </ScrollView>
  );
};

interface WidgetMapperProps {
  widgetName: string;
}

const extractSliderInfo = (s: string) => {
  const nums = s.split('_')[1];

  const discrete = !nums.includes('~');

  const [min, max] = nums.replace('~', '-').replace('[', '').replace(']', '').split('-').map(v => Number(v));

  return ({ min, max, discrete });
}

const WidgetMapper = ({ widgetName }: WidgetMapperProps) => {
  if (widgetName === 'CALENDAR') {
    return (<CalendarWidget />);
  } else if (widgetName.startsWith('SLIDER')) {
    const { min, max, discrete } = extractSliderInfo(widgetName);

    return (<Slider minValue={min} maxValue={max} discrete={discrete} />);
  } else if (widgetName === 'HUMAN_BODY') {
    return (<BodyOverlay />);
  } else if (widgetName === 'MEDICATION_LIST') {
    return null;
  }

  return null;
};

const styles = StyleSheet.create({
  container: { paddingVertical: 0, gap: 12 },
  card: { minHeight: 64, overflow: 'hidden' },
  left: { width: 64, height: 64 },
  noImage: { width: 0 },
  image: { height: 64, width: 64 },
  widgetContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
