import { Navigation } from '@/components/navigation';
import { SessionProvider } from '@/utils/session-data';
import { paper_theme } from '@/utils/theme';
import { useFonts } from 'expo-font';
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
  const [loaded] = useFonts({
    'Roboto': require('@/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('@/assets/fonts/Roboto-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
    <PaperProvider theme={paper_theme}>
      <SessionProvider>
        <Navigation />
      </SessionProvider>
    </PaperProvider>
  );
};


