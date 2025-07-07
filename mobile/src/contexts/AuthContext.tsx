import { createContext, ReactNode, useEffect, useState } from "react";

import {
  storageAuthTokenSave,
  storageAuthTokenGet,
  storageAuthTokenRemove,
} from "@storage/storageAuthToken";
import {
  storageUserSave,
  storageUserGet,
  storageUserRemove,
} from "@storage/storageUser";

import { api } from "@services/api";
import { UserDTO } from "@dtos/UserDTO";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateUserProfile: (userUpdated: UserDTO) => Promise<void>;
  isLoadgingUserStorageData: boolean;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const [isLoadgingUserStorageData, setIsLoadgingUserStorageData] =
    useState(true);

  async function userAndTokenUpdate(userData: UserDTO, token: string) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setUser(userData);
  }

  async function storageUserAndTokenSave(userData: UserDTO, token: string, refresh_token: string) {
    try {
      setIsLoadgingUserStorageData(true);

      await storageUserSave(userData);
      await storageAuthTokenSave({ token, refresh_token });
    } catch (error) {
      throw error;
    } finally {
      setIsLoadgingUserStorageData(false);
    }
  }

  async function signIn(email: string, password: string) {
    try {
      // Inicia o carregamento antes da requisição, já que ela é assíncrona
      setIsLoadgingUserStorageData(true);

      const { data } = await api.post("/sessions", { email, password });

      if (data.user && data.token && data.token.refresh_token) {
        // Primeiro salva no storage
        await storageUserAndTokenSave(data.user, data.token, data.refresh_token);
        // Depois atualiza o estado e o axios globalmente
        userAndTokenUpdate(data.user, data.token);
      }
    } catch (error) {
      // O erro já está sendo propagado para ser tratado por quem chama o signIn
      throw error;
    } finally {
      // Garante que o estado de carregamento é desativado em qualquer caso
      setIsLoadgingUserStorageData(false);
    }
  }

  async function signOut() {
    try {
      setIsLoadgingUserStorageData(true);

      setUser({} as UserDTO);
      await storageUserRemove();
      await storageAuthTokenRemove();
      delete api.defaults.headers.common["Authorization"];
    } catch (error) {
      throw error;
    } finally {
      setIsLoadgingUserStorageData(false);
    }
  }

  async function updateUserProfile(userUpdated: UserDTO) {
    try {
      setUser(userUpdated);
      await storageUserSave(userUpdated);
    } catch (error) {
      throw error;
    }
  }

  async function loadUserData() {
    try {
      setIsLoadgingUserStorageData(true); // Ativa o carregamento ao iniciar

      const userLogged = await storageUserGet();
      const { token } = await storageAuthTokenGet();

      if (token && userLogged) {
        userAndTokenUpdate(userLogged, token);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadgingUserStorageData(false); // Desativa o carregamento ao finalizar
    }
  }

  useEffect(() => {
    loadUserData();
  }, []);

  useEffect(() => {
    const subscribe = api.registerInterceptTokenManager(signOut);

    return () => {
      subscribe();
    }
  }, [signOut]);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        isLoadgingUserStorageData,
        updateUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
