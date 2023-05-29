import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";


export const GlobalContext = createContext({} as GlobalProviderData);


interface GlobalProps {
  children: ReactNode;
}

export interface IHandleForm {
    email: string;
    password: string;
    confirmPassword?: string;
    firstName?: string;
    lastName?: string;

  }

interface GlobalProviderData {
  logout: () => void;
  handleLogin: (data: IHandleForm) => void;
  form: Boolean;
  setForm: React.Dispatch<React.SetStateAction<boolean>>
  handleRegister: (data: IHandleForm) => void;
}

function GlobalProvider({ children }: GlobalProps) {
  const token = localStorage.getItem("@planetchat: UserToken")
  const navigate = useNavigate();
  const [form, setForm] = useState(true)
  

  useEffect(() => {
  if(!token) {
    if(window.location.pathname == "/dashboard") {
      toast.warn("Faça login primeiro")
    }
    navigate("/home", {replace: true})
    localStorage.clear
    
  };

  }, [token])


  const logout = () => {
    localStorage.clear();
    navigate("/home");
  };

  const handleRegister = (data: IHandleForm) => {
    api
      .post("/users", {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        console.log(response)
        navigate("/home", { replace: true });
        toast.success("Usuário cadastrado!")
      })
      .catch((err) => {
        console.log(err)
        toast.error("Este email já foi cadastrado!")
        setForm(false);
      });
  };
  
  const handleLogin = (data: IHandleForm) => {
      api
        .post("/auth/login", data)
        .then((response) => {
          window.localStorage.clear();
          window.localStorage.setItem(
            "@planetchat: UserToken",
            response.data.accessToken
          );
          console.log(response.data)
          window.localStorage.setItem("@planetchat: UserID", response.data.userId);
            console.log(response.status)
          if (response.status === 201) {
              setForm(true)
              navigate("/dashboard", { replace: true });
          }
        })
        .catch((err) => {
          console.log("Email ou senha inválido", err.message);
          toast.error("Usuário ou senha inválidos")
        });
    };

  return (
    <GlobalContext.Provider value={{ logout, handleLogin, handleRegister, form, setForm }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;