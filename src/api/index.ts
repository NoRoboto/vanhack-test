import { LogBox } from 'react-native';
import { QueryClient } from 'react-query';

// https://github.com/tannerlinsley/react-query/issues/1259#issuecomment-722636893
LogBox.ignoreLogs(['Setting a timer']);

export const queryClient = new QueryClient({
  // Disable retries to be able to fetch data (server send error after success)
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});