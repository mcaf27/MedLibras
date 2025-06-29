import { ReactNode } from 'react';
import { View } from 'react-native';
import { Text } from "react-native-paper";

export default function App({ children }: { children: ReactNode }) {
  return (
    <View>
      <Text>Hello!</Text>
      {children}
    </View>
  );
}
