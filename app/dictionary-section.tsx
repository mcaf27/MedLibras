import { Container } from '@/components/container';
import { DictionaryStackParamList } from '@/types/stacks';
import { DICTIONARY_ITEM, DICTIONARY_SECTION } from '@/utils/routes';
import { DictionaryNav } from '@/utils/routing';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import { useNavigation } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { List, useTheme } from 'react-native-paper';

type DictionarySectionProps = NativeStackScreenProps<DictionaryStackParamList, typeof DICTIONARY_SECTION>;

export const DictionarySection = ({ route }: DictionarySectionProps) => {
  const { section } = route.params;

  const theme = useTheme();
  const navigation = useNavigation<DictionaryNav>();

  const styles = StyleSheet.create({
    content: {
      backgroundColor: theme.colors.surface,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      gap: 16,
    },
    card: { minHeight: 64, paddingLeft: 0, overflow: 'hidden' },
    image: { width: 80, aspectRatio: 1 / 0.9 },
  });

  return (
    <Container>
      <ScrollView style={{ paddingVertical: 12 }}>
        <Image
          source={section.src}
          style={styles.image}
          contentFit="cover"
        />
        <List.Section>
          {section.items.map((item) => (
            <List.Item
              key={item.text}
              title={item.text}
              onPress={() => navigation.navigate(DICTIONARY_ITEM, { item })}
            />
          ))}
        </List.Section>
      </ScrollView>
    </Container>
  );
};
