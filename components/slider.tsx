import RNSlider from '@react-native-community/slider';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Chip, useTheme } from 'react-native-paper';

interface SliderProps {
  minValue: number;
  maxValue: number;
  discrete?: boolean;
}

export default function Slider({ minValue, maxValue, discrete }: SliderProps) {
  const [value, setValue] = useState(minValue);
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <RNSlider
          style={styles.slider}
          minimumValue={minValue}
          maximumValue={maxValue}
          step={discrete ? 1 : 0.1}
          value={value}
          onValueChange={setValue}
          minimumTrackTintColor={theme.colors.primary}
          maximumTrackTintColor={theme.colors.primaryContainer}
          thumbTintColor={theme.colors.inversePrimary}
        />
        <View style={[styles.thumbLabel, { left: `${(value / maxValue) * 100}%` }]}>
          <Chip>{value}</Chip>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  label: {
    fontSize: 18,
    marginBottom: 16,
  },
  sliderContainer: {
    position: 'relative',
    height: 50,
    justifyContent: 'center',
  },
  slider: {
    width: '100%',
  },
  thumbLabel: {
    position: 'absolute',
    top: 45,
    transform: [{ translateX: '-100%' }],
  },
  thumbText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
