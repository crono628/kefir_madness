import { useContext, useEffect } from 'react';
import { createContext, useReducer } from 'react';
import { useCookies } from 'react-cookie';
import { initialState, reducer } from './components/reducer';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cookies, setCookie] = useCookies(['measurements']);

  useEffect(() => {
    if (cookies.measurements) {
      dispatch({ type: 'set_multiple', payload: cookies.measurements });
    }
  }, []);

  useEffect(() => {
    if (state !== initialState) {
      setCookie('measurements', state, {
        path: '/',
        secure: true,
        sameSite: 'none',
      });
    }
  }, [state]);

  const contextValue = { state, dispatch };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
