import { Container } from '@/components/container';
import { DictionaryStackParamList } from '@/types/stacks';
import { DICTIONARY_ITEM } from '@/utils/routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text, useTheme } from 'react-native-paper';

type DictionaryItemProps = NativeStackScreenProps<DictionaryStackParamList, typeof DICTIONARY_ITEM>;

export const DictionaryItem = ({ route }: DictionaryItemProps) => {
  const { item } = route.params;
  const theme = useTheme();

  const player = useVideoPlayer(item.src, (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

  useEffect(() => {
    player.play();
  }, [player]);
  
  // const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });
  
  const styles = StyleSheet.create({
    content: { 
      backgroundColor: theme.colors.surface,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      gap: 16,
    },
    card: { minHeight: 64, paddingLeft: 0, overflow: 'hidden' },
    video: { width: '100%', aspectRatio: 4 / 3 },
    title: { textAlign: 'center', paddingVertical: 12 }, 
  });

  return (
    <Container>
      <Text variant="titleMedium" style={styles.title}>
        {item.text}
      </Text>
      <Card mode="outlined">
        <Card.Content style={styles.content}>
          <VideoView 
            style={styles.video} 
            player={player}
            nativeControls={false}
          />
        </Card.Content>
      </Card>
    </Container>
  );
};
