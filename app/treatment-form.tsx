import { Container } from '@/components/container';
import * as routes from '@/utils/routes';
import { ConsultationNav } from '@/utils/routing';
import { useSession } from '@/utils/session-data';
import { useNavigation } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Text, TextInput, useTheme } from 'react-native-paper';

export const TreatmentForm = () => {
  const navigation = useNavigation<ConsultationNav>();
  const theme = useTheme();
  const { treatmentData, updateTreatmentData } = useSession();

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
          Dados do tratamento:
        </Text>

        <View>
          <TextInput
            label="Será necessário algum exame?"
            value={treatmentData.exam}
            style={styles.input}
            onChangeText={text => updateTreatmentData(({ ...treatmentData, exam: text }))}
            right={<TextInput.Icon icon="hospital-building" style={styles.icon} />}
          />

          <TextInput
            label="Há alguma contraindicação?"
            value={treatmentData.contraindication}
            style={styles.input}
            onChangeText={text => updateTreatmentData(({ ...treatmentData, contraindication: text }))}
            right={<TextInput.Icon icon="alert-circle" style={styles.icon} />}
          />

          <TextInput
            label="Este medicamento deve ser tomado em jejum?"
            value={treatmentData.fasting}
            style={styles.input}
            onChangeText={text => updateTreatmentData(({ ...treatmentData, fasting: text }))}
            right={<TextInput.Icon icon="food" style={styles.icon} />}
          />

          <TextInput
            label="Quais são os efeitos colaterais?"
            value={treatmentData.collateral}
            style={styles.input}
            onChangeText={text => updateTreatmentData(({ ...treatmentData, collateral: text }))}
            right={<TextInput.Icon icon="alert-octagon" style={styles.icon} />}
          />

          <TextInput
            label="Qual é a duração do tratamento?"
            value={treatmentData.duration}
            style={styles.input}
            onChangeText={text => updateTreatmentData(({ ...treatmentData, duration: text }))}
            right={<TextInput.Icon icon="timer" style={styles.icon} />}
          />

          <TextInput
            label="Esses medicamentos podem ser obtidos no SUS?"
            value={treatmentData.sus}
            style={styles.input}
            onChangeText={text => updateTreatmentData(({ ...treatmentData, sus: text }))}
            right={<TextInput.Icon icon="hospital" style={styles.icon} />}
          />

          <TextInput
            label="Quando é o retorno do atendimento médico?"
            value={treatmentData.return}
            style={styles.input}
            onChangeText={text => updateTreatmentData(({ ...treatmentData, return: text }))}
            right={<TextInput.Icon icon="calendar" style={styles.icon} />}
          />

          <TextInput
            label="Para quais sintomas o paciente deve ficar atento, para retornar ao atendimento médico?"
            value={treatmentData.symptoms}
            style={styles.input}
            onChangeText={text => updateTreatmentData(({ ...treatmentData, symptoms: text }))}
            right={<TextInput.Icon icon="heart" style={styles.icon} />}
          />

          <TextInput
            label="Em quanto tempo o paciente deve esperar a melhora dos sintomas?"
            value={treatmentData.time}
            style={styles.input}
            onChangeText={text => updateTreatmentData(({ ...treatmentData, time: text }))}
            right={<TextInput.Icon icon="clock" style={styles.icon} />}
          />

          <TextInput
            label="Outras informações relevantes"
            value={treatmentData.other}
            style={styles.input}
            onChangeText={text => updateTreatmentData(({ ...treatmentData, other: text }))}
            right={<TextInput.Icon icon="information" style={styles.icon} />}
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

export default TreatmentForm;