import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { createAsyncLocalStorage } from "../../utils/asyncLocalStorage";
import { apiSdk } from "../../utils/api.utils";
import useTonConnect from "../hooks/useTonConnect";

const initialState = { user: undefined };

type AppContextProps = {
  isMounting: boolean;
  isConnected: boolean;
  user?: QuyxUser;
  login: (user: QuyxUser) => void;
  update: (user: QuyxUser) => void;
  logout: () => void;
};

const AppContext = createContext<AppContextProps>({
  isMounting: true,
  isConnected: false,
  login() {},
  update() {},
  logout() {},
});

function appReducer(state: any, action: { type: string; payload?: any }) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
      };

    case "UPDATE":
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };

    default:
      return state;
  }
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within an AppProvider");

  return context;
}

function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [isMounting, setIsMounting] = useState<boolean>(true);
  const [isConnected, setIsConnected] = useState<boolean>(true);

  const { connected } = useTonConnect();

  useEffect(() => {
    if (connected) setIsConnected(true);
    else setIsConnected(false);
  }, [connected]);

  const appStorage = createAsyncLocalStorage("app");

  useEffect(() => {
    (async function () {
      let token = await appStorage.getItem("token");
      if (!token) {
        setIsMounting(false);
        return;
      }

      const user = await apiSdk.whoami();
      if (user) dispatch({ type: "LOGIN", payload: user });
      setIsMounting(false);
      return;
    })();
  }, []);

  function login(user: QuyxUser) {
    dispatch({ type: "LOGIN", payload: user });
  }

  function update(user: Partial<QuyxUser>) {
    dispatch({ type: "UPDATE", payload: user });
  }

  function logout() {
    dispatch({ type: "LOGOUT" });
    setIsConnected(false);
  }

  return (
    <AppContext.Provider
      value={{
        user: state.user,
        isMounting,
        isConnected,
        login,
        update,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
