import { AREAS } from '@/utils/human-body-areas';
import { useState } from 'react';
import ImageMapper from 'react-img-mapper';
import { StyleSheet, View } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

const MAN = 'https://res.cloudinary.com/dj3zmadzo/image/upload/v1751235953/man_1_sdtgxe.png';
const WOMAN = 'https://res.cloudinary.com/dj3zmadzo/image/upload/v1751246366/woman_1_wrvsem.png';

export function BodyOverlay() {
  const [areas, setAreas] = useState(AREAS);
  const [gender, setGender] = useState('man');

  const image = gender === 'man' ? MAN : WOMAN;

  return (
    <View style={styles.container}>
      <SegmentedButtons
        value={gender}
        onValueChange={setGender}
        buttons={[
          {
            value: 'man',
            label: 'M',
          },
          {
            value: 'woman',
            label: 'F',
          },
        ]}
      />

      <ImageMapper
        src={image}
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
    gap: 12,
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
  },
  image: {
    marginTop: 20,
  },
});
