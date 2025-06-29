import { Container } from '@/components/container';
import { ConsultationStackParamList } from '@/types/stacks';
import * as routes from '@/utils/routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

type VideoProps = NativeStackScreenProps<ConsultationStackParamList, typeof routes.VIDEO>;

export const Video = ({ route }: VideoProps) => {
  const { buttons, title, video } = route.params;

  const player = useVideoPlayer(video, player => {
    player.loop = true;
    player.play();
  });

  useEffect(() => {
    player.play();
  }, [player]);

  return (
    <Container>
      <Text variant="titleMedium" style={styles.title}>{title}</Text>

      <VideoView 
        style={styles.video} 
        player={player}
        nativeControls={false}
      />

      <View style={styles.row}>
        {buttons.map((b) => (
          <Button {...b.props} key={b.text}>
            {b.text}
          </Button>
        ))}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: { marginVertical: 12 },
  input: { marginVertical: 5 },
  row: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "flex-end",
  },
  video: {
    width: '120%',
    marginLeft: -26,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});

export default Video;