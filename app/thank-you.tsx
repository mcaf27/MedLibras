import { Container } from '@/components/container';
import { HOME } from '@/utils/routes';
import { useSession } from '@/utils/session-data';
import * as Print from 'expo-print';
import { useNavigation } from 'expo-router';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { Button, useTheme } from 'react-native-paper';


export const ThankYou = () => {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  const player = useVideoPlayer('https://res.cloudinary.com/dj3zmadzo/video/upload/v1751238025/ugc4sufwnfupnruarhly.mp4', player => {
    player.loop = true;
    player.play();
  });

  useEffect(() => {
    player.play();
  }, [player]);

  const { cleanUp, treatmentData, examData, user } = useSession();

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
    video: {
      width: '120%',
      marginLeft: -26,
      height: 275,  
    },
  });

  const handlePrint = async () => {
    await Print.printAsync({
      html: `
        <html>
          <body>
            <h1>Paciente: ${user?.name}</h1>
            <p>Telefone: ${user?.phoneNumber} / E-mail: ${user?.email}</p>
            ${!!examData.name ? (
              `
                <h2>Dados do exame:</h2>
                <ul>
                  <li><strong>Nome:</strong> ${examData.name}</li>
                  <li><strong>Prazo:</strong> ${examData.dealine}</li>
                  <li><strong>Duração:</strong> ${examData.duration}</li>
                  <li><strong>O que será avaliado:</strong> ${examData.evaluation}</li>
                  <li><strong>Sensação do exame:</strong> ${examData.sensation}</li>
                  <li><strong>Preparatório:</strong> ${examData.preparation}</li>
                  <li><strong>Acompanhante:</strong> ${examData.company}</li>
                  <li><strong>Local:</strong> ${examData.location}</li>
                  <li><strong>Atestado médico:</strong> ${examData.certificate}</li>
                </ul>
              `
            ) : (
              `
                <h2>Dados do tratamento:</h2>
                <ul>
                  <li><strong>Contraindicação:</strong> ${treatmentData.contraindication}</li>
                  <li><strong>Jejum:</strong> ${treatmentData.fasting}</li>
                  <li><strong>Efeitos colaterais:</strong> ${treatmentData.collateral}</li>
                  <li><strong>Duração:</strong> ${treatmentData.duration}</li>
                  <li><strong>Disponível no SUS:</strong> ${treatmentData.sus}</li>
                  <li><strong>Retorno:</strong> ${treatmentData.return}</li>
                  <li><strong>Sintomas de alerta:</strong> ${treatmentData.symptoms}</li>
                  <li><strong>Tempo de melhora:</strong> ${treatmentData.time}</li>
                  <li><strong>Outras informações:</strong> ${treatmentData.other}</li>
                </ul>
              `
            )}
          </body>
        </html>
      `,
    });
  };

  return (
    <Container>
      <View style={{ paddingVertical: 12 }}>
        <VideoView
          style={styles.video} 
          player={player}
          nativeControls={false}
        />
        <View style={{ gap: 12 }}>
          <Button 
            onPress={() => {
              cleanUp();
              navigation.navigate(HOME);
            }}
            mode="contained-tonal"
          >
            Limpar dados da consulta
          </Button>

          <Button onPress={handlePrint} mode="contained">
            Imprimir
          </Button>
        </View>
      </View>
    </Container>
  );
};
