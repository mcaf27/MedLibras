import { Container } from '@/components/container';
import { FlatList, ScrollView, StyleSheet } from 'react-native';
import { Card, List, Text } from 'react-native-paper';

import { DICTIONARY } from '@/utils/dictionary_getter';
import { IMAGES } from '@/utils/hand_image_getter';
import { DICTIONARY_SECTION } from '@/utils/routes';
import { DictionaryNav } from '@/utils/routing';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';

export const Dictionary = () => {
  const navigation = useNavigation<DictionaryNav>();

  return (
    <Container>
      <Text variant="titleMedium" style={styles.title}>
        Dicionário de Libras
      </Text>

      <ScrollView>
        <List.Section>
          <FlatList
            data={Object.keys(IMAGES)}
            keyExtractor={(item) => item}
            numColumns={2}
            columnWrapperStyle={styles.row}
            renderItem={({ item }) => (
              <Card
                mode="outlined"
                onPress={() => (
                  navigation.navigate(DICTIONARY_SECTION, {
                      section: {
                        title: item,
                        src: IMAGES[item],
                        items: DICTIONARY[item] || [],
                      }
                  })
                )}
              >
                <Card.Content>
                  <Image source={IMAGES[item]} style={styles.image} />
                </Card.Content>
              </Card>
            )}
          />
        </List.Section>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: { paddingVertical: 12, textAlign: 'center' },
  image: { width: 80, aspectRatio: 1 / 0.9, marginHorizontal: 'auto' },
  row: {
    justifyContent: 'space-evenly', // distributes the cards with horizontal spacing
    marginBottom: 16, // vertical gap between rows
  },
});

export default Dictionary;