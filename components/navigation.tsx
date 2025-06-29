import HomeScreen from '@/app/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomNavigation, useTheme } from 'react-native-paper';

import { Answers } from '@/app/answers';
import { ContactForm } from '@/app/contact-form';
import { Questions } from '@/app/questions';
import { Video } from '@/app/video';
import { ConsultationStackParamList, DictionaryStackParamList } from '@/types/stacks';
import * as routes from '@/utils/routes';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { CommonActions } from '@react-navigation/native';

import { Dictionary } from '@/app/dictionary';
import { DictionaryItem } from '@/app/dictionary-item';
import { DictionarySection } from '@/app/dictionary-section';
import { ExamForm } from '@/app/exam-form';
import { Options } from '@/app/options';
import { ThankYou } from '@/app/thank-you';
import { TreatmentForm } from '@/app/treatment-form';

const Tabs = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ConsultationStack = createNativeStackNavigator<ConsultationStackParamList>();
const DictionaryStack = createNativeStackNavigator<DictionaryStackParamList>();

export function DictionaryStackScreen() {
  const theme = useTheme();
  
  return (
    <DictionaryStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: theme.colors.secondaryContainer },
        headerTitleStyle: { fontWeight: 'bold', fontSize: 14 },
      }}
    >
      <DictionaryStack.Screen name={routes.DICTIONARY} component={Dictionary} />
      <DictionaryStack.Screen name={routes.DICTIONARY_SECTION} component={DictionarySection} />
      <DictionaryStack.Screen name={routes.DICTIONARY_ITEM} component={DictionaryItem} />
    </DictionaryStack.Navigator>
  );
}

export function ConsultationStackScreen() {
  const theme = useTheme(); 

  return (
    <ConsultationStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: theme.colors.secondaryContainer },
        headerTitleStyle: { fontWeight: 'bold', fontSize: 14 },
      }}
    >
      <ConsultationStack.Screen name={routes.CONTACT_FORM} component={ContactForm} />
      <ConsultationStack.Screen name={routes.DOCTOR_QUESTIONS} component={Questions} />
      <ConsultationStack.Screen name={routes.PATIENT_ANSWERS} component={Answers} />
      <ConsultationStack.Screen name={routes.VIDEO} component={Video} />
      <ConsultationStack.Screen name={routes.DOCTOR_OPTIONS} component={Options} />
      <ConsultationStack.Screen name={routes.EXAM_FORM} component={ExamForm} />
      <ConsultationStack.Screen name={routes.TREATMENT_FORM} component={TreatmentForm} />
      <ConsultationStack.Screen name={routes.THANK_YOU} component={ThankYou} />
    </ConsultationStack.Navigator>
  );
}

export function HomeStackScreen() {
  const theme = useTheme();

  return (
    <HomeStack.Navigator 
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: theme.colors.secondaryContainer },
        headerTitleStyle: { fontWeight: 'bold', fontSize: 14 },
      }}
    >
      <HomeStack.Screen name={routes.HOME} component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const TabNavigator = () => {
  const theme = useTheme();

  return (
    <Tabs.Navigator
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          style={{ backgroundColor: theme.colors.background }}
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) =>
            descriptors[route.key].options.tabBarIcon?.({
              focused,
              color,
              size: 24,
            }) || null
          }
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              typeof options.tabBarLabel === 'string'
                ? options.tabBarLabel
                : typeof options.title === 'string'
                ? options.title
                : route.name;

            return label;
          }}
        />
    )}
      screenOptions={({ route }) => ({ headerShown: false })}
    >
      <Tabs.Screen 
        name="Início" 
        component={HomeStackScreen} 
        options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={22} /> }} 
      />
      <Tabs.Screen 
        name="Consulta" 
        component={ConsultationStackScreen}
        options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name="hospital-box" color={color} size={22} /> }} 
      />
      <Tabs.Screen 
        name="Dicionário" 
        component={DictionaryStackScreen} 
        options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name="hand-clap" color={color} size={22} /> }} 
      />
    </Tabs.Navigator>
  );
}

export function Navigation() {
  return (
    <TabNavigator />
  );
}
