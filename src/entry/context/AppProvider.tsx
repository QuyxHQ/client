import { createContext, useContext, useReducer } from "react";
import { createAsyncLocalStorage } from "../../utils/asyncLocalStorage";

const initialState = { user: undefined };

type QuyxUser = {
  token: string;
};

type AppContextProps = {
  user?: QuyxUser;
  login: (user: QuyxUser) => Promise<void>;
  logout: () => Promise<void>;
};

const AppContext = createContext<AppContextProps>({
  async login() {},
  async logout() {},
});

function appReducer(state: any, action: { type: string; payload?: QuyxUser }) {
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
  const appStorage = createAsyncLocalStorage("app");

  const login = async (user: QuyxUser) => {
    await appStorage.setItem("token", user.token); // login
    dispatch({ type: "LOGIN", payload: user });
  };

  const logout = async () => {
    await appStorage.removeItem("token"); // remove token from localstorage
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AppContext.Provider value={{ user: state.user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
