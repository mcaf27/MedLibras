import { AREAS } from '@/utils/human-body-areas';
import { useState } from 'react';
import ImageMapper from 'react-img-mapper';
import { StyleSheet, View } from 'react-native';

const bodyImage = 'https://res.cloudinary.com/dj3zmadzo/image/upload/v1751235953/man_1_sdtgxe.png';

export function BodyOverlay() {
  const [areas, setAreas] = useState(AREAS);

  return (
    <View style={styles.container}>
      <ImageMapper
        src={bodyImage}
        toggle
        ref={null}
        areas={areas}
        onChange={(_, newAreas: any[]) => setAreas(newAreas)}
        width={199}
        height={599}
        name="body"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 'auto',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
  },
  image: {
    marginTop: 20,
  },
});
