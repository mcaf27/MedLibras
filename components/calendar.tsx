import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useTheme } from 'react-native-paper';

LocaleConfig.locales['pt-BR'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr.', 'Maio', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
  today: 'Hoje',
};

LocaleConfig.defaultLocale = 'pt-BR';

export function CalendarWidget() {
  const [selected, setSelected] = useState('');
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day) => setSelected(day.dateString)}
        markedDates={{
          [selected]: { selected: true, marked: true, selectedColor: theme.colors.primary },
        }}
        disableArrowRight
        disableAllTouchEventsForDisabledDays
        maxDate={new Date().toISOString().slice(0, 10)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
