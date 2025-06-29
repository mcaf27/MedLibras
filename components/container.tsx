import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
   container: { 
    flex: 1, 
    justifyContent: "center", 
    paddingHorizontal: 30, 
    backgroundColor: theme.colors.background,
  }});

  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  );
};
