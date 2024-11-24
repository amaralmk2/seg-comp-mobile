import React, { useState,createContext, useEffect, useCallback } from "react";
import { JwtPayload, jwtDecode } from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from "src/api/api";
import axios from "axios";
import { Alert } from "react-native";

interface UserProps {
    email: string;
    firstName: string;
    lastName: string;
}

interface AuthError  {
  message: string;
  code: string;
}
interface AuthContextData {
    token: string | null;
    user: UserProps | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
    loading: boolean;
    error: AuthError | null;
  }

  interface CustomJwtPayload extends JwtPayload {
    exp: number; 
    sub: string; 
  }

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider ({children}: React.PropsWithChildren) {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProps | null>(null)

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<AuthError | null>(null);

    const isAuthenticated = token ? true : false;

    const logout = useCallback(async () => {
        setToken(null);
        setUser(null);
        await AsyncStorage.removeItem('@auth_token');
        await AsyncStorage.removeItem('@user_data');
        delete api.defaults.headers.common['Authorization'];
      }, []);

      const isTokenExpired = useCallback((token: string): boolean => {
        try {
          const decoded = jwtDecode<CustomJwtPayload>(token); 
          const currentTime = Math.floor(Date.now() / 1000); 
          return decoded.exp < currentTime; 
        } catch (error) {
          throw new Error("Erro ao decodificar o token.");
        }
      }, []);

    useEffect(() => {
        const loadStoredData = async () => {
          const storedToken = await AsyncStorage.getItem('@auth_token');
          const storageUser = await AsyncStorage.getItem('@user_data');

          if (isTokenExpired(storedToken || '')) {
            Alert.alert('Sua sessão expirou.', 'Por favor, faca login novamente.');
            logout();
            throw new Error("Token recebido já está expirado.");
        }

          if ( storedToken && storageUser ) {
            setToken(storedToken);
            setUser(JSON.parse(storageUser));
            api.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
          }
        };
    
        loadStoredData();
      }, [isTokenExpired, logout]);

      console.log(token)
      console.log(isAuthenticated)

    async function login(email: string, password: string){
        try {
            const response = await api.post('/auth/login',{
                email,
                password
            })
            const { token, user } = response.data;
    
            setLoading(true);
            setToken(token);
            setUser(user)
            await AsyncStorage.setItem('@auth_token', token);
            await AsyncStorage.setItem('@user_data', JSON.stringify(user));
            
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }catch(error) {
           if(axios.isAxiosError(error)) {
             const status = error.response?.status;
             switch (status) {
              case 401:
                setError({
                  message: "Falha ao realizar login. Verifique suas credenciais.",
                  code: "invalid_credentials"
                })
                Alert.alert("Falha ao realizar login.", "Verifique suas credenciais.");
                break

                case 422:
                  setError({
                    message: "Dados inválidos. Verifique as informações inseridas",
                    code: "VALIDATION_ERROR"
                  });
                  Alert.alert('Dados inválidos. Verifique as informações inseridas')
                  break;

              default:
                if (!error.response) {
                  setError({
                    message: "Erro de conexão. Verifique sua internet",
                    code: "NETWORK_ERROR"
                  });
                  Alert.alert('Erro de conexão. Verifique sua internet')
                }
                break;
             }
           }
        }finally {
          setLoading(false);
        }
    } 

    return (
        <AuthContext.Provider value={{token, user, login, logout, isAuthenticated, error, loading}}>
            {children}
        </AuthContext.Provider>
    )
}
