import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, socket } from "../../services/api";
import { toast } from "react-toastify";
import { Socket } from "socket.io-client";


export const UserContext = createContext({} as UserProviderData);


interface UserProps {
  children: ReactNode;
}

export interface IHandleForm {
    email: string;
    password: string;
    confirmPassword?: string;
    firstName?: string;
    lastName?: string;

  }

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
}

interface IOnlineUsers {
  id: string,
  connected: Boolean,
  disconnected: Boolean,
}

interface UserProviderData {
  logout: () => void;
  handleLogin: (data: IHandleForm) => void;
  form: Boolean;
  setForm: React.Dispatch<React.SetStateAction<boolean>>
  handleRegister: (data: IHandleForm) => void;
  token?: string;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>
  users: IUser[] | undefined;
  setUsers: React.Dispatch<React.SetStateAction<IUser[] | undefined>>
  getUser: (email: string) => void;
  getUsers: () => void;
  onlineUsers: IOnlineUsers[] | undefined;
  setOnlineUsers: React.Dispatch<React.SetStateAction<IOnlineUsers[] | undefined>>
  handleConnectedClients(client: Socket): void
}

export function UserProvider({ children }: UserProps) {
  const navigate = useNavigate();
  const [token, setToken] = useState<string>();
  const [form, setForm] = useState(true);
  const [user, setUser] = useState<IUser | undefined>();
  const [users, setUsers] = useState<IUser[] | undefined>();
  const [onlineUsers, setOnlineUsers] = useState<IOnlineUsers[]>();

  function handleConnectedClients(client: Socket) {
    if(client.connected) {
      setOnlineUsers((previousUsers ) => {
        if(!previousUsers?.includes(client)) {
          onlineUsers?.push(client)
        };
        return onlineUsers;
      })
    } else if(client.disconnected) {
      setOnlineUsers((previousUsers ) => {
        if(previousUsers?.includes(client)) {
          const remove = onlineUsers?.indexOf(client);
          onlineUsers?.splice(remove as number, 1);
        };
        return onlineUsers;
      })
    }
  }


  useEffect(() => {
  }, [])


  const logout = () => {
    navigate("/", {replace: true});
    window.localStorage.clear();
    setToken("");
    socket.disconnect();
    toast.info("Usuário desconectado")
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
        navigate("/", {replace: true});
        toast.success("Usuário cadastrado!")
      })
      .catch((err) => {
        console.log(err)
        toast.error("Este email já foi cadastrado!")
        setForm(false);
      });
  };

  const getUser = async (email: string) => {
    api
    .get(`/users/${email}`)
    .then((response) => {
      setUser(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const getUsers = async () => {

    api
    .get("/users")
    .then((response) => {
      setUsers(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
  const handleLogin = (data: IHandleForm) => {
      api
        .post("/auth/login", data)
        .then((response) => {
          if (response.status === 201) {
            setToken(response.data.accessToken);
            window.localStorage.setItem("@planetchat: UserToken",response.data.accessToken);
            window.localStorage.setItem("@planetchat: UserID", response.data.userId);
            window.localStorage.setItem("@planetchat: UserName", `${response.data.firstName} ${response.data.lastName}`);
            window.localStorage.setItem("@planetchat: UserEmail", `${response.data.email}`);
              setUser(response.data);
              setForm(true);
              navigate("/dashboard", {replace: true});
              socket.connect();
          }
        })
        .catch((err) => {
          toast.error("Email ou senha inválidos");
        });
    };

  return (
    <UserContext.Provider value={{
      logout,
      handleLogin, 
      handleRegister,
      form, 
      setForm,
      user,
      setUser,
      token,
      setToken,
      getUser,
      getUsers,
      users,
      setUsers,
      onlineUsers,
      setOnlineUsers,
      handleConnectedClients,
      }}>
      {children}
    </UserContext.Provider>
  );
}