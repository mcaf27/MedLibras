import type { ConsultationStackParamList } from '@/types/stacks';
import * as routes from '@/utils/routes';
import { toLevel } from '@/utils/routing';
import { useSession } from '@/utils/session-data';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput, useTheme } from 'react-native-paper';
import { Container } from '../components/container';

type ConsultationNav = NativeStackNavigationProp<ConsultationStackParamList>;

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const navigation = useNavigation<ConsultationNav>();
  const theme = useTheme();
  const session = useSession();

  const styles = StyleSheet.create({
    input: { 
      marginVertical: 5, 
      backgroundColor: theme.colors.surface,
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

  const onSubmit = () => {
    session.updateUser({ name, email, phoneNumber });
    navigation.navigate(routes.DOCTOR_QUESTIONS, toLevel(0))
  };

  return (
    <Container>
      <TextInput
        label="Nome"
        value={name}
        style={styles.input}
        onChangeText={text => setName(text)}
        right={<TextInput.Icon icon="hand-peace-variant" style={styles.icon} />}
      />

      <TextInput
        label="Telefone"
        value={phoneNumber}
        style={styles.input}
        onChangeText={text => setPhoneNumber(text)}
        right={<TextInput.Icon icon="phone" style={styles.icon} />}
      />

      <TextInput
        label="E-mail"
        value={email}
        style={styles.input}
        onChangeText={text => setEmail(text)}
        right={<TextInput.Icon icon="email" style={styles.icon} />}
      />

      <View style={styles.row}>
        <Button 
          mode="contained"
          onPress={onSubmit}
        >
          Enviar dados
        </Button>
      </View>
    </Container>
  );
};
