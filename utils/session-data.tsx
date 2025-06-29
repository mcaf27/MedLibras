import { createContext, ReactNode, useContext, useState } from 'react';

export const INITIAL_EXAM_DATA = {
  name: '',
  dealine: '',
  duration: '',
  evaluation: '',
  sensation: '',
  preparation: '',
  company: '',
  location:'',
  certificate: '',
};

export const INITIAL_TREATMENT_DATA = {
  exam: '',
  contraindication: '',
  fasting: '',
  collateral: '',
  duration: '',
  sus: '',
  return: '',
  symptoms:'',
  time: '',
  other: '',
};

type User = {
  name: string;
  email: string;
  phoneNumber: string;
};

type SessionContextType = {
  user: User | null;
  updateUser: (user: User | null) => void;
  cleanUp: () => void;
  treatmentData: typeof INITIAL_TREATMENT_DATA;
  updateTreatmentData: (data: typeof INITIAL_TREATMENT_DATA) => void;
  examData: typeof INITIAL_EXAM_DATA;
  updateExamData: (data: typeof INITIAL_EXAM_DATA) => void;
};

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [examQuestions, setExamQuestions] = useState(INITIAL_EXAM_DATA);
  const [treatmentQuestions, setTreatmentQuestions] = useState(INITIAL_TREATMENT_DATA);

  const cleanUp = () => {
    setUser(null);
    setExamQuestions(INITIAL_EXAM_DATA);
    setTreatmentQuestions(INITIAL_TREATMENT_DATA);
  };

  return (
    <SessionContext.Provider 
      value={{ 
        user, 
        updateUser: setUser, 
        cleanUp,
        examData: examQuestions,
        treatmentData: treatmentQuestions,
        updateExamData: setExamQuestions,
        updateTreatmentData: setTreatmentQuestions,
      }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};
