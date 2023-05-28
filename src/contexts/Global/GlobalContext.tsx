import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";


export const GlobalContext = createContext({} as GlobalProviderData);


interface GlobalProps {
  children: ReactNode;
}

export interface IHandleLogin {
    email: string;
    password: string;
  }

interface GlobalProviderData {
  logout: () => void;
  handleLogin: (data: IHandleLogin) => void;
}

function GlobalProvider({ children }: GlobalProps) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  
  const handleLogin = (data: IHandleLogin) => {
      console.log(data)
      api
        .post("/auth/login", data)
        .then((response) => {
          window.localStorage.clear();
          window.localStorage.setItem(
            "@planetchat: UserToken",
            response.data.accessToken
          );
          console.log(response.data)
          if(!response.data.userId) alert("global context 32")
          window.localStorage.setItem("@planetchat: UserID", response.data.userId);
          // setUser(response.data.user);
            console.log(response.status)
          if (response.status === 201) {
          //   toast.success("Login realizado com sucesso");
              navigate("/dashboard", { replace: true });
          }
        })
        .catch((err) => {
          console.log("Email ou senha inválido", err.message);
        });
    };

  return (
    <GlobalContext.Provider value={{ logout, handleLogin }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;