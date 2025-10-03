import { createContext } from 'react';

interface AppContextType {
  teamName: string;
  setTeamName: React.Dispatch<React.SetStateAction<string>>;
  taskId: string;
  setTaskId: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextType>({
  setTaskId: () => {},
  setTeamName: () => {},
  teamName: '',
  taskId: '',
});
