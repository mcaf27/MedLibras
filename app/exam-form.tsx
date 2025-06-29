import { Container } from '@/components/container';
import * as routes from '@/utils/routes';
import { ConsultationNav } from '@/utils/routing';
import { useSession } from '@/utils/session-data';
import { useNavigation } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Text, TextInput, useTheme } from 'react-native-paper';

export const ExamForm = () => {
  const navigation = useNavigation<ConsultationNav>();
  const theme = useTheme();
  const { examData, updateExamData } = useSession();

  const styles = StyleSheet.create({
    input: { 
      marginVertical: 5, 
      backgroundColor: theme.colors.surface,
    },
    title: {
      paddingVertical: 12,
      textAlign: 'center',
    },
    icon: {
      backgroundColor: 'transparent',
    },
    row: {
      alignItems: "center",
      marginVertical: 20,
      justifyContent: "space-between",
      width: "100%",
    },
  });

  return (
    <Container>
      <ScrollView>
        <Text variant="titleMedium" style={styles.title}>
          Dados do exame:
        </Text>

        <View>
          <TextInput
            label="Nome do exame"
            value={examData.name}
            style={styles.input}
            onChangeText={text => updateExamData(({ ...examData, name: text }))}
            right={<TextInput.Icon icon="hand-peace-variant" style={styles.icon} />}
          />

          <TextInput
            label="Qual é o prazo para a realização do exame?"
            value={examData.dealine}
            style={styles.input}
            onChangeText={text => updateExamData(({ ...examData, dealine: text }))}
            right={<TextInput.Icon icon="calendar" style={styles.icon} />}
          />

          <TextInput
            label="Qual é a duração do exame?"
            value={examData.duration}
            style={styles.input}
            onChangeText={text => updateExamData(({ ...examData, duration: text }))}
            right={<TextInput.Icon icon="timer" style={styles.icon} />}
          />

          <TextInput
            label="O que vai ser avaliado com este exame?"
            value={examData.evaluation}
            style={styles.input}
            onChangeText={text => updateExamData(({ ...examData, evaluation: text }))}
            right={<TextInput.Icon icon="check-circle" style={styles.icon} />}
          />

          <TextInput
            label="Como será a sensação deste exame?"
            value={examData.sensation}
            style={styles.input}
            onChangeText={text => updateExamData(({ ...examData, sensation: text }))}
            right={<TextInput.Icon icon="heart" style={styles.icon} />}
          />

          <TextInput
            label="Como é o preparatório deste exame?"
            value={examData.preparation}
            style={styles.input}
            onChangeText={text => updateExamData(({ ...examData, preparation: text }))}
            right={<TextInput.Icon icon="format-list-checks" style={styles.icon} />}
          />

          <TextInput
            label="Será necessário um acompanhante para a realização do exame?"
            value={examData.company}
            style={styles.input}
            onChangeText={text => updateExamData(({ ...examData, company: text }))}
            right={<TextInput.Icon icon="human-female-female" style={styles.icon} />}
          />

          <TextInput
            label="Onde poderá ser realizado este exame?"
            value={examData.location}
            style={styles.input}
            onChangeText={text => updateExamData(({ ...examData, location: text }))}
            right={<TextInput.Icon icon="map-marker" style={styles.icon} />}
          />

          <TextInput
            label="A realização deste exame concede um atestado médico?"
            value={examData.certificate}
            style={styles.input}
            onChangeText={text => updateExamData(({ ...examData, certificate: text }))}
            right={<TextInput.Icon icon="file-document" style={styles.icon} />}
          />

          <View style={styles.row}>
            <Button
              mode="contained"
              icon="check"
              onPress={() => {
                navigation.navigate(routes.THANK_YOU);
              }}
            >
              Enviar
            </Button>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default ExamForm;